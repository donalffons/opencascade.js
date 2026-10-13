/**
 * Geometry testing helpers for libcascade smoke tests.
 *
 * Provides utilities for:
 * - Converting OpenCASCADE shapes to GLB via XCAF + RWGltf_CafWriter
 * - Parsing GLB with gltf-transform to extract bounding box, vertex/face counts
 * - Assertion helpers for validating geometry dimensions
 *
 * Adapted from @taucad/kernels kernel-geometry-testing.utils.ts
 */

import { NodeIO } from '@gltf-transform/core';
import type { InspectReport } from '@gltf-transform/functions';
import { inspect } from '@gltf-transform/functions';
import { expect } from 'vitest';
import type { TopoDS_Shape } from '../../dist/opencascade_single.js';
import { getOC } from './helpers.js';

// =============================================================================
// Types
// =============================================================================

type Vec3 = [number, number, number];

export type BoundingBox = {
  min: Vec3;
  max: Vec3;
  size: Vec3;
  center: Vec3;
};

export type GeometryStats = {
  vertexCount: number;
  faceCount: number;
  meshCount: number;
  boundingBox: BoundingBox | undefined;
};

// =============================================================================
// Shape → GLB Export
// =============================================================================

/**
 * Export an OpenCASCADE shape to GLB binary data via XCAF document + RWGltf_CafWriter.
 *
 * This is the canonical way to produce GLB from an OCCT shape:
 * 1. Create an XCAF document and add the shape to it
 * 2. Mesh the shape with BRepMesh_IncrementalMesh
 * 3. Write GLB using RWGltf_CafWriter
 * 4. Read the GLB bytes from the Emscripten virtual filesystem
 */
export function shapeToGlb(
  shape: TopoDS_Shape,
  options?: { linearDeflection?: number; angularDeflection?: number },
): Uint8Array {
  const oc = getOC();
  const linearDeflection = options?.linearDeflection ?? 0.1;
  const angularDeflection = options?.angularDeflection ?? 0.5;

  using docName = new oc.TCollection_ExtendedString();
  using doc = new oc.TDocStd_Document(docName);
  using mainLabel = doc.Main();
  using shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(mainLabel);
  using label = shapeTool.NewShape();
  shapeTool.SetShape(label, shape);

  using mesh = new oc.BRepMesh_IncrementalMesh(
    shape,
    linearDeflection,
    false,
    angularDeflection,
    false,
  );

  const glbPath = '/tmp/_smoke_test_export.glb';
  using asciiPath = new oc.TCollection_AsciiString(glbPath);
  using writer = new oc.RWGltf_CafWriter(asciiPath, true);
  using metadata = new oc.TColStd_IndexedDataMapOfStringString();
  using progress = new oc.Message_ProgressRange();
  writer.Perform(doc, metadata, progress);

  const data = oc.FS.readFile(glbPath) as Uint8Array;
  oc.FS.unlink(glbPath);

  return data;
}

// =============================================================================
// GLB Parsing via gltf-transform
// =============================================================================

async function parseGlb(glbData: Uint8Array): Promise<InspectReport> {
  const io = new NodeIO();
  const document = await io.readBinary(glbData);
  return inspect(document);
}

function extractBoundingBox(report: InspectReport): BoundingBox | undefined {
  if (report.scenes.properties.length === 0) return undefined;
  const scene = report.scenes.properties[0]!;
  if (scene.bboxMin.length < 3 || scene.bboxMax.length < 3) return undefined;

  const min: Vec3 = [scene.bboxMin[0]!, scene.bboxMin[1]!, scene.bboxMin[2]!];
  const max: Vec3 = [scene.bboxMax[0]!, scene.bboxMax[1]!, scene.bboxMax[2]!];
  const size: Vec3 = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
  const center: Vec3 = [
    (max[0] + min[0]) / 2,
    (max[1] + min[1]) / 2,
    (max[2] + min[2]) / 2,
  ];

  return { min, max, size, center };
}

function extractStats(report: InspectReport): GeometryStats {
  const vertexCount = report.meshes.properties.reduce(
    (sum, m) => sum + m.vertices,
    0,
  );
  const meshCount = report.meshes.properties.length;
  const faceCount = Math.round(vertexCount / 3);
  const boundingBox = extractBoundingBox(report);

  return { vertexCount, faceCount, meshCount, boundingBox };
}

/**
 * Analyze GLB binary data and return geometry statistics.
 */
export async function analyzeGlb(glbData: Uint8Array): Promise<GeometryStats> {
  const report = await parseGlb(glbData);
  return extractStats(report);
}

/**
 * Export shape to GLB and analyze it in one step.
 */
export async function analyzeShape(
  shape: TopoDS_Shape,
  options?: { linearDeflection?: number; angularDeflection?: number },
): Promise<GeometryStats> {
  const glbData = shapeToGlb(shape, options);
  return analyzeGlb(glbData);
}

// =============================================================================
// Assertion Helpers
// =============================================================================

function expectVec3CloseTo(
  actual: Vec3,
  expected: Vec3,
  label: string,
  tolerance: number,
): void {
  const axes = ['X', 'Y', 'Z'] as const;
  for (let i = 0; i < 3; i++) {
    expect(
      Math.abs(actual[i]! - expected[i]!),
      `${label} [${axes[i]}]: expected ${expected[i]}, got ${actual[i]}`,
    ).toBeLessThanOrEqual(tolerance);
  }
}

/**
 * Assert that GLB data is valid (non-empty, correct header).
 */
export function expectValidGlb(glbData: Uint8Array): void {
  expect(glbData.length, 'GLB data should not be empty').toBeGreaterThan(0);
  if (glbData.length >= 4) {
    const header = new TextDecoder().decode(glbData.slice(0, 4));
    expect(header, 'GLB header should be "glTF"').toBe('glTF');
  }
}

/**
 * Assert bounding box size matches expected dimensions.
 *
 * OCCT units are millimeters. The GLTF spec uses meters, so OCCT's native
 * RWGltf_CafWriter (without coordinate system conversion) outputs in mm.
 * Our shapeToGlb helper does NOT apply coordinate conversion, so the
 * GLB values are in the same unit system as OCCT (mm).
 *
 * When comparing, pass expected size in the same units as your OCCT shape.
 */
export async function expectBoundingBoxSize(
  glbData: Uint8Array,
  expectedSize: Vec3,
  tolerance = 0.5,
): Promise<void> {
  const stats = await analyzeGlb(glbData);
  expect(stats.boundingBox, 'Bounding box should be defined').toBeDefined();
  if (stats.boundingBox) {
    expectVec3CloseTo(
      stats.boundingBox.size,
      expectedSize,
      'Bounding box size',
      tolerance,
    );
  }
}

/**
 * Assert bounding box center matches expected position.
 */
export async function expectBoundingBoxCenter(
  glbData: Uint8Array,
  expectedCenter: Vec3,
  tolerance = 0.5,
): Promise<void> {
  const stats = await analyzeGlb(glbData);
  expect(stats.boundingBox, 'Bounding box should be defined').toBeDefined();
  if (stats.boundingBox) {
    expectVec3CloseTo(
      stats.boundingBox.center,
      expectedCenter,
      'Bounding box center',
      tolerance,
    );
  }
}

/**
 * Assert mesh count in GLB data.
 */
export async function expectMeshCount(
  glbData: Uint8Array,
  expectedCount: number,
): Promise<void> {
  const stats = await analyzeGlb(glbData);
  expect(stats.meshCount, `Expected ${expectedCount} mesh(es)`).toBe(
    expectedCount,
  );
}

/**
 * Assert that vertex count is at least a given minimum.
 * Useful when exact counts vary by tessellation settings.
 */
export async function expectMinVertexCount(
  glbData: Uint8Array,
  minCount: number,
): Promise<void> {
  const stats = await analyzeGlb(glbData);
  expect(
    stats.vertexCount,
    `Expected at least ${minCount} vertices, got ${stats.vertexCount}`,
  ).toBeGreaterThanOrEqual(minCount);
}

/**
 * Full geometry assertion: export shape to GLB and validate dimensions.
 */
export async function expectShapeGeometry(
  shape: TopoDS_Shape,
  expected: {
    size: Vec3;
    center?: Vec3;
    meshCount?: number;
    minVertices?: number;
    tolerance?: number;
  },
): Promise<void> {
  const glbData = shapeToGlb(shape);
  expectValidGlb(glbData);

  const tolerance = expected.tolerance ?? 0.5;
  const stats = await analyzeGlb(glbData);

  expect(stats.boundingBox, 'Bounding box should be defined').toBeDefined();

  if (stats.boundingBox) {
    expectVec3CloseTo(
      stats.boundingBox.size,
      expected.size,
      'Bounding box size',
      tolerance,
    );

    if (expected.center) {
      expectVec3CloseTo(
        stats.boundingBox.center,
        expected.center,
        'Bounding box center',
        tolerance,
      );
    }
  }

  if (expected.meshCount !== undefined) {
    expect(stats.meshCount).toBe(expected.meshCount);
  }

  if (expected.minVertices !== undefined) {
    expect(stats.vertexCount).toBeGreaterThanOrEqual(expected.minVertices);
  }
}
