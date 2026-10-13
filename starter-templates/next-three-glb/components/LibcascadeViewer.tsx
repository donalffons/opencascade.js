'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { getLibcascade } from '../lib/libcascade-init';
import { buildShape } from '../lib/build-shape';
import { shapeToGlb } from '../lib/shape-to-glb';

function parseGlb(bytes: Uint8Array): Promise<THREE.Group> {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    const buffer = bytes.buffer.slice(
      bytes.byteOffset,
      bytes.byteOffset + bytes.byteLength,
    ) as ArrayBuffer;
    loader.parse(buffer, '', (gltf) => resolve(gltf.scene), reject);
  });
}

/**
 * libcascade v3 throws `WebAssembly.Exception` instances when an OCCT C++
 * exception crosses the WASM boundary. `getExceptionMessage` returns
 * `[type, message]`; the type token is omitted from the user-facing
 * string because the message is what end-users want.
 */
async function decodeOcctError(err: unknown): Promise<string> {
  if (typeof WebAssembly !== 'undefined' && err instanceof WebAssembly.Exception) {
    const oc = await getLibcascade();
    const [, message] = oc.getExceptionMessage(err);
    return message;
  }
  if (err instanceof Error) return err.message;
  return String(err);
}

export function LibcascadeViewer(): React.ReactElement {
  const [status, setStatus] = useState('booting…');
  const [root, setRoot] = useState<THREE.Group | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        setStatus('loading OCCT WASM…');
        const oc = await getLibcascade();
        if (cancelled) return;
        setStatus('building shape…');
        using shape = buildShape(oc);
        setStatus('meshing → GLB…');
        const glb = shapeToGlb(oc, shape);
        const scene = await parseGlb(glb);
        if (cancelled) return;
        setRoot(scene);
        setStatus(`rendered (${glb.byteLength} bytes)`);
      } catch (err) {
        if (cancelled) return;
        const decoded = await decodeOcctError(err);
        setStatus(`error: ${decoded}`);
        console.error('OCCT pipeline failed:', decoded);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        height: '100%',
        width: '100%',
      }}
    >
      <header
        style={{
          padding: '0.75rem 1rem',
          background: '#222',
          borderBottom: '1px solid #333',
        }}
      >
        <strong>libcascade + three.js</strong>{' '}
        <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>{status}</span>
      </header>
      <div id="libcascade-canvas" style={{ width: '100%', height: '100%' }}>
        <Canvas
          camera={{ position: [40, 30, 40], fov: 45, near: 0.1, far: 1000 }}
          gl={{ antialias: true, toneMapping: THREE.NoToneMapping, outputColorSpace: THREE.SRGBColorSpace }}
          style={{ background: '#1a1a1a', display: 'block' }}
        >
          <Suspense fallback={null}>
            <ambientLight color={0xffffff} intensity={0.5} />
            <directionalLight color={0xffffff} intensity={1.0} position={[40, 60, 40]} />
            {root ? <primitive object={root} /> : null}
            <OrbitControls
              target={[10, 10, 10]}
              enableDamping
              dampingFactor={0.08}
              rotateSpeed={1.0}
              zoomSpeed={1.0}
              panSpeed={1.0}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
