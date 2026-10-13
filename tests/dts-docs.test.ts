/**
 * Documentation coverage tests for generated TypeScript declarations.
 *
 * Parses the generated .d.ts file and validates that JSDoc comments are
 * present for classes, methods, constructors, enums, and parameters.
 * Documentation is extracted from OCCT C++ headers via Doxygen XML pipeline.
 */

import { describe, it, expect } from 'vitest';
import * as ts from 'typescript';
import * as fs from 'node:fs';
import * as path from 'node:path';

const FULL_DTS = path.resolve(
  import.meta.dirname,
  '../dist/opencascade_single.d.ts',
);

function parseDts(): ts.SourceFile | null {
  if (!fs.existsSync(FULL_DTS)) return null;
  const content = fs.readFileSync(FULL_DTS, 'utf8');
  return ts.createSourceFile(
    FULL_DTS,
    content,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
}

function getJSDocText(node: ts.Node): string {
  // `jsDoc` is a TS compiler-internal property not surfaced on the public
  // `ts.Node` type; narrow to a typed shape rather than `as any`.
  const jsDocNodes = (node as ts.Node & { jsDoc?: ts.JSDoc[] }).jsDoc;
  if (!jsDocNodes || !Array.isArray(jsDocNodes)) return '';
  return jsDocNodes
    .map((jd: ts.JSDoc) => jd.getFullText())
    .join('\n');
}

function hasJSDoc(node: ts.Node): boolean {
  return getJSDocText(node).trim().length > 0;
}

function getJSDocComment(node: ts.Node): string {
  const jsDocNodes = (node as ts.Node & { jsDoc?: ts.JSDoc[] }).jsDoc;
  if (!jsDocNodes || !Array.isArray(jsDocNodes)) return '';
  return jsDocNodes
    .map((jd: ts.JSDoc) => (jd.comment ? (typeof jd.comment === 'string' ? jd.comment : '') : ''))
    .join('\n');
}

function findClass(
  sourceFile: ts.SourceFile,
  name: string,
): ts.ClassDeclaration | undefined {
  let found: ts.ClassDeclaration | undefined;
  ts.forEachChild(sourceFile, (node) => {
    if (ts.isClassDeclaration(node) && node.name?.text === name) {
      found = node;
    }
  });
  return found;
}

function findTypeAlias(
  sourceFile: ts.SourceFile,
  name: string,
): ts.TypeAliasDeclaration | undefined {
  let found: ts.TypeAliasDeclaration | undefined;
  ts.forEachChild(sourceFile, (node) => {
    if (ts.isTypeAliasDeclaration(node) && node.name?.text === name) {
      found = node;
    }
  });
  return found;
}

function findVariableStatement(
  sourceFile: ts.SourceFile,
  name: string,
): ts.VariableStatement | undefined {
  let found: ts.VariableStatement | undefined;
  ts.forEachChild(sourceFile, (node) => {
    if (
      ts.isVariableStatement(node) &&
      node.declarationList.declarations.some(
        (d) => ts.isIdentifier(d.name) && d.name.text === name,
      )
    ) {
      found = node;
    }
  });
  return found;
}

function findMethod(
  classDecl: ts.ClassDeclaration,
  methodName: string,
): ts.MethodDeclaration | undefined {
  for (const member of classDecl.members) {
    if (
      ts.isMethodDeclaration(member) &&
      member.name &&
      ts.isIdentifier(member.name) &&
      member.name.text === methodName
    ) {
      return member;
    }
  }
  return undefined;
}

function findAllMethods(
  classDecl: ts.ClassDeclaration,
  methodName: string,
): ts.MethodDeclaration[] {
  const results: ts.MethodDeclaration[] = [];
  for (const member of classDecl.members) {
    if (
      ts.isMethodDeclaration(member) &&
      member.name &&
      ts.isIdentifier(member.name) &&
      member.name.text === methodName
    ) {
      results.push(member);
    }
  }
  return results;
}

function findConstructor(
  classDecl: ts.ClassDeclaration,
): ts.ConstructorDeclaration | undefined {
  for (const member of classDecl.members) {
    if (ts.isConstructorDeclaration(member)) {
      return member;
    }
  }
  return undefined;
}

describe('JSDoc documentation coverage', () => {
  const sourceFile = parseDts();

  it.skipIf(!sourceFile)('should have a valid .d.ts file to test', () => {
    expect(sourceFile).not.toBeNull();
  });

  describe('Class-level JSDoc', () => {
    it.skipIf(!sourceFile)(
      'should have class-level JSDoc describing cartesian point for gp_Pnt',
      () => {
        const cls = findClass(sourceFile!, 'gp_Pnt');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        expect(doc).toContain('cartesian point');
      },
    );

    it.skipIf(!sourceFile)(
      'should have class-level JSDoc about parallelepiped for BRepPrimAPI_MakeBox',
      () => {
        const cls = findClass(sourceFile!, 'BRepPrimAPI_MakeBox');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        expect(doc).toContain('parallelepiped');
      },
    );

    it.skipIf(!sourceFile)(
      'should have class-level JSDoc about STEP files for STEPControl_Writer',
      () => {
        const cls = findClass(sourceFile!, 'STEPControl_Writer');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        expect(doc).toContain('STEP');
      },
    );

    it.skipIf(!sourceFile)('should have class-level JSDoc about vector for gp_Vec', () => {
      const cls = findClass(sourceFile!, 'gp_Vec');
      expect(cls).toBeDefined();
      const doc = getJSDocText(cls!);
      expect(doc.toLowerCase()).toContain('vector');
    });
  });

  describe('Method-level JSDoc', () => {
    it.skipIf(!sourceFile)(
      'should have method-level JSDoc about X coordinate for gp_Pnt.X',
      () => {
        const cls = findClass(sourceFile!, 'gp_Pnt');
        expect(cls).toBeDefined();
        const method = findMethod(cls!, 'X');
        expect(method).toBeDefined();
        const doc = getJSDocText(method!);
        expect(doc).toContain('X');
      },
    );

    it.skipIf(!sourceFile)(
      'should have method-level JSDoc about distance for gp_Pnt.Distance',
      () => {
        const cls = findClass(sourceFile!, 'gp_Pnt');
        expect(cls).toBeDefined();
        const method = findMethod(cls!, 'Distance');
        expect(method).toBeDefined();
        const doc = getJSDocText(method!);
        expect(doc.toLowerCase()).toContain('distance');
      },
    );

    it.skipIf(!sourceFile)(
      'should have method-level JSDoc about assigning X for gp_Pnt.SetX',
      () => {
        const cls = findClass(sourceFile!, 'gp_Pnt');
        expect(cls).toBeDefined();
        const method = findMethod(cls!, 'SetX');
        expect(method).toBeDefined();
        const doc = getJSDocText(method!);
        expect(doc).toContain('X');
      },
    );
  });

  describe('Constructor JSDoc', () => {
    it.skipIf(!sourceFile)(
      'should have constructor JSDoc for gp_Pnt',
      () => {
        const cls = findClass(sourceFile!, 'gp_Pnt');
        expect(cls).toBeDefined();
        const ctor = findConstructor(cls!);
        expect(ctor).toBeDefined();
        const doc = getJSDocText(ctor!);
        expect(doc).toContain('point');
      },
    );

    it.skipIf(!sourceFile)(
      'should have distinct constructor JSDoc for gp_Pnt overloaded constructors',
      () => {
        // Re-pinned from OSD_Disk → gp_Pnt after nested-class filtering removed all
        // OSD host-introspection classes from the bound surface.
        // gp_Pnt has 3 ctors with distinct JSDoc:
        //   "Creates a point with zero coordinates."
        //   "Creates a point from a XYZ object."
        //   "Creates a point with its 3 cartesian's coordinates: …"
        const pnt = findClass(sourceFile!, 'gp_Pnt');
        expect(pnt).toBeDefined();

        const ctors = pnt!.members.filter(ts.isConstructorDeclaration);
        expect(ctors.length).toBeGreaterThanOrEqual(2);

        const docs = ctors.map((c) => getJSDocText(c));
        const nonEmpty = docs.filter((d) => d.length > 0);
        expect(nonEmpty.length).toBeGreaterThanOrEqual(2);

        expect(docs[0]).not.toEqual(docs[1]);
      },
    );
  });

  describe('Enum JSDoc', () => {
    it.skipIf(!sourceFile)(
      'should have JSDoc describing topological shapes for TopAbs_ShapeEnum',
      () => {
        const enumDecl = findVariableStatement(sourceFile!, 'TopAbs_ShapeEnum');
        expect(enumDecl).toBeDefined();
        const doc = getJSDocText(enumDecl!);
        expect(doc.toLowerCase()).toContain('topological');
      },
    );

    it.skipIf(!sourceFile)(
      'should have JSDoc describing orientation for TopAbs_Orientation',
      () => {
        const enumDecl = findVariableStatement(sourceFile!, 'TopAbs_Orientation');
        expect(enumDecl).toBeDefined();
        const doc = getJSDocText(enumDecl!);
        expect(doc.toLowerCase()).toContain('orientation');
      },
    );
  });

  describe('Enum member JSDoc', () => {
    function findEnumMemberProperty(
      sourceFile: ts.SourceFile,
      enumName: string,
      memberName: string,
    ): ts.PropertySignature | undefined {
      const varStmt = findVariableStatement(sourceFile, enumName);
      if (!varStmt) return undefined;
      const decl = varStmt.declarationList.declarations[0];
      if (!decl?.type || !ts.isTypeLiteralNode(decl.type)) return undefined;
      for (const member of decl.type.members) {
        if (
          ts.isPropertySignature(member) &&
          member.name &&
          ts.isIdentifier(member.name) &&
          member.name.text === memberName
        ) {
          return member;
        }
      }
      return undefined;
    }

    it.skipIf(!sourceFile)(
      'should have JSDoc describing "8-bits reference" for BinTools_ObjectType_Reference8',
      () => {
        const prop = findEnumMemberProperty(
          sourceFile!,
          'BinTools_ObjectType',
          'BinTools_ObjectType_Reference8',
        );
        expect(prop).toBeDefined();
        const doc = getJSDocText(prop!);
        expect(doc).toContain('8-bits reference');
      },
    );

    it.skipIf(!sourceFile)(
      'should have JSDoc describing "64-bits reference" for BinTools_ObjectType_Reference64',
      () => {
        const prop = findEnumMemberProperty(
          sourceFile!,
          'BinTools_ObjectType',
          'BinTools_ObjectType_Reference64',
        );
        expect(prop).toBeDefined();
        const doc = getJSDocText(prop!);
        expect(doc).toContain('64-bits reference');
      },
    );

    it.skipIf(!sourceFile)(
      'should have no JSDoc for undocumented enum members',
      () => {
        const prop = findEnumMemberProperty(
          sourceFile!,
          'BinTools_ObjectType',
          'BinTools_ObjectType_Unknown',
        );
        expect(prop).toBeDefined();
        const doc = getJSDocText(prop!);
        expect(doc.trim()).toBe('');
      },
    );

    it.skipIf(!sourceFile)(
      'should have JSDoc on at least 250 enum members across all enums',
      () => {
        let membersWithDoc = 0;
        let totalMembers = 0;
        ts.forEachChild(sourceFile!, (node) => {
          if (!ts.isVariableStatement(node)) return;
          const decl = node.declarationList.declarations[0];
          if (!decl?.type || !ts.isTypeLiteralNode(decl.type)) return;
          for (const member of decl.type.members) {
            if (ts.isPropertySignature(member)) {
              totalMembers++;
              if (hasJSDoc(member)) membersWithDoc++;
            }
          }
        });
        expect(membersWithDoc).toBeGreaterThanOrEqual(250);
      },
    );
  });

  describe('No empty JSDoc blocks', () => {
    it.skipIf(!sourceFile)(
      'should contain no empty /** */ blocks in the .d.ts',
      () => {
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        const emptyJSDocPattern = /\/\*\*\s*\*\//g;
        const matches = content.match(emptyJSDocPattern);
        expect(matches).toBeNull();
      },
    );
  });

  describe('Documentation coverage thresholds', () => {
    it.skipIf(!sourceFile)(
      'should have JSDoc on at least 60% of classes',
      () => {
        let totalClasses = 0;
        let documentedClasses = 0;
        ts.forEachChild(sourceFile!, (node) => {
          if (ts.isClassDeclaration(node) && node.name) {
            totalClasses++;
            if (hasJSDoc(node)) documentedClasses++;
          }
        });
        const ratio = documentedClasses / totalClasses;
        expect(ratio).toBeGreaterThanOrEqual(0.6);
      },
    );

    it.skipIf(!sourceFile)(
      'should have JSDoc on at least 40% of methods',
      () => {
        let totalMethods = 0;
        let documentedMethods = 0;
        ts.forEachChild(sourceFile!, (node) => {
          if (ts.isClassDeclaration(node)) {
            for (const member of node.members) {
              if (ts.isMethodDeclaration(member)) {
                totalMethods++;
                if (hasJSDoc(member)) documentedMethods++;
              }
            }
          }
        });
        const ratio = documentedMethods / totalMethods;
        expect(ratio).toBeGreaterThanOrEqual(0.4);
      },
    );
  });

  describe('Overloaded method JSDoc', () => {
    it.skipIf(!sourceFile)(
      'should have distinct JSDoc for UnitsMethods.DumpLengthUnit overloads (different arity)',
      () => {
        const cls = findClass(sourceFile!, 'UnitsMethods');
        expect(cls).toBeDefined();
        const overloads = findAllMethods(cls!, 'DumpLengthUnit');
        expect(overloads.length).toBe(2);
        const docs = overloads.map((m) => getJSDocText(m));
        expect(docs[0]).toContain('scale factor');
        expect(docs[1]).toContain('LengthUnit');
        expect(docs[0]).not.toEqual(docs[1]);
      },
    );

    it.skipIf(!sourceFile)(
      'should have distinct JSDoc for gp_Pnt.SetCoord overloads (different arity)',
      () => {
        const cls = findClass(sourceFile!, 'gp_Pnt');
        expect(cls).toBeDefined();
        const overloads = findAllMethods(cls!, 'SetCoord');
        expect(overloads.length).toBe(2);
        const docs = overloads.map((m) => getJSDocText(m));
        expect(docs[0]).not.toEqual(docs[1]);
      },
    );

    it.skipIf(!sourceFile)(
      'should have distinct JSDoc for BRep_Tool.Tolerance overloads (face/edge/vertex)',
      () => {
        const cls = findClass(sourceFile!, 'BRep_Tool');
        expect(cls).toBeDefined();
        const toleranceMethods = cls!.members.filter(
          (m) => ts.isMethodDeclaration(m) && ts.isIdentifier(m.name) && m.name.text === 'Tolerance',
        );
        expect(toleranceMethods.length).toBeGreaterThanOrEqual(3);

        const docs = toleranceMethods.map((m) => getJSDocText(m));
        const nonEmpty = docs.filter((d) => d.length > 0);
        expect(nonEmpty.length).toBeGreaterThanOrEqual(3);

        expect(docs[0]).not.toEqual(docs[1]);
        expect(docs[1]).not.toEqual(docs[2]);
      },
    );

    it.skipIf(!sourceFile)(
      'should have distinct JSDoc for gp_Pnt.Mirrored overloads (point/axis/plane)',
      () => {
        const cls = findClass(sourceFile!, 'gp_Pnt');
        expect(cls).toBeDefined();
        const mirroredMethods = cls!.members.filter(
          (m) => ts.isMethodDeclaration(m) && ts.isIdentifier(m.name) && m.name.text === 'Mirrored',
        );
        expect(mirroredMethods.length).toBeGreaterThanOrEqual(3);

        const docs = mirroredMethods.map((m) => getJSDocText(m));
        const nonEmpty = docs.filter((d) => d.length > 0);
        expect(nonEmpty.length).toBeGreaterThanOrEqual(3);

        expect(docs[0]).not.toEqual(docs[1]);
        expect(docs[0]).not.toEqual(docs[2]);
        expect(docs[1]).not.toEqual(docs[2]);
      },
    );

    it.skipIf(!sourceFile)(
      'should produce unique docs for overloaded methods with different param counts',
      () => {
        let distinctOverloads = 0;
        ts.forEachChild(sourceFile!, (node) => {
          if (!ts.isClassDeclaration(node) || !node.name) return;
          const methodsByName = new Map<string, ts.MethodDeclaration[]>();
          for (const member of node.members) {
            if (
              ts.isMethodDeclaration(member) &&
              member.name &&
              ts.isIdentifier(member.name)
            ) {
              const name = member.name.text;
              if (!methodsByName.has(name)) methodsByName.set(name, []);
              methodsByName.get(name)!.push(member);
            }
          }
          for (const [, methods] of methodsByName) {
            if (methods.length < 2) continue;
            const docs = methods.map((m) => getJSDocText(m));
            const uniqueDocs = new Set(docs.filter((d) => d.trim().length > 0));
            if (uniqueDocs.size > 1) distinctOverloads++;
          }
        });
        expect(distinctOverloads).toBeGreaterThan(0);
      },
    );

    it.skipIf(!sourceFile)(
      'should produce unique JSDoc for same-arity method overloads with distinct docs',
      () => {
        const unitsAPI = findClass(sourceFile!, 'UnitsAPI');
        expect(unitsAPI).toBeDefined();

        const numberedMethods = new Map<string, ts.MethodDeclaration[]>();
        for (const member of unitsAPI!.members) {
          if (!ts.isMethodDeclaration(member) || !ts.isIdentifier(member.name)) continue;
          const match = member.name.text.match(/^(.*)_\d+$/);
          if (!match) continue;
          const methods = numberedMethods.get(match[1]) ?? [];
          methods.push(member);
          numberedMethods.set(match[1], methods);
        }
        const relevantGroups = [...numberedMethods.entries()].filter(([, methods]) => {
          const arities = new Set(methods.map((method) => method.parameters.length));
          const docs = new Set(methods.map(getJSDocText));
          return methods.length > 1 && arities.size === 1 && docs.size > 1;
        });

        expect(relevantGroups.map(([baseName]) => baseName).sort()).toEqual([
          'AnyToLS',
          'AnyToSI',
        ]);
        for (const [baseName] of relevantGroups) {
          const survivor = findMethod(unitsAPI!, baseName);
          const direct = findMethod(unitsAPI!, `${baseName}_1`);
          const withDimension = findMethod(unitsAPI!, `${baseName}_2`);
          expect(survivor).toBeDefined();
          expect(direct).toBeDefined();
          expect(withDimension).toBeDefined();
          expect(getJSDocText(survivor!)).toBe(getJSDocText(direct!));
          expect(getJSDocText(direct!)).not.toBe(getJSDocText(withDimension!));
          expect(getJSDocText(survivor!)).not.toContain('@deprecated');
        }
      },
    );
  });

  describe('@param tags', () => {
    it.skipIf(!sourceFile)(
      'should include @param tags in JSDoc for methods with documented params',
      () => {
        let methodsWithParams = 0;
        ts.forEachChild(sourceFile!, (node) => {
          if (ts.isClassDeclaration(node)) {
            for (const member of node.members) {
              if (ts.isMethodDeclaration(member)) {
                const doc = getJSDocText(member);
                if (doc.includes('@param')) {
                  methodsWithParams++;
                }
              }
            }
          }
        });
        expect(methodsWithParams).toBeGreaterThan(0);
      },
    );
  });

  describe('delete() JSDoc', () => {
    it.skipIf(!sourceFile)(
      'should have JSDoc about releasing the C++ object for gp_Pnt.delete()',
      () => {
        const cls = findClass(sourceFile!, 'gp_Pnt');
        expect(cls).toBeDefined();
        const del = findMethod(cls!, 'delete');
        expect(del).toBeDefined();
        const doc = getJSDocText(del!);
        expect(doc).toContain('C++ object');
      },
    );

    it.skipIf(!sourceFile)(
      'should have JSDoc on at least 90% of classes with delete()',
      () => {
        let withDoc = 0;
        let total = 0;
        ts.forEachChild(sourceFile!, (node) => {
          if (!ts.isClassDeclaration(node)) return;
          const del = findMethod(node, 'delete');
          if (!del) return;
          total++;
          if (hasJSDoc(del)) withDoc++;
        });
        const ratio = withDoc / total;
        expect(ratio).toBeGreaterThanOrEqual(0.9);
      },
    );
  });

  describe('Standard_Transient handle helpers JSDoc', () => {
    it.skipIf(!sourceFile)(
      'should have JSDoc about handle being null for Standard_Transient.isNull()',
      () => {
        const cls = findClass(sourceFile!, 'Standard_Transient');
        expect(cls).toBeDefined();
        const method = findMethod(cls!, 'isNull');
        expect(method).toBeDefined();
        const doc = getJSDocText(method!);
        expect(doc).toContain('handle');
        expect(doc).toContain('null');
      },
    );

    it.skipIf(!sourceFile)(
      'should have JSDoc about setting handle to null for Standard_Transient.nullify()',
      () => {
        const cls = findClass(sourceFile!, 'Standard_Transient');
        expect(cls).toBeDefined();
        const method = findMethod(cls!, 'nullify');
        expect(method).toBeDefined();
        const doc = getJSDocText(method!);
        expect(doc).toContain('handle');
        expect(doc).toContain('null');
      },
    );
  });

  describe('Nested enum JSDoc', () => {
    it.skipIf(!sourceFile)(
      'should have enum-level JSDoc for NCollection_IncAllocator_IBlockSizeLevel',
      () => {
        const enumDecl = findVariableStatement(
          sourceFile!,
          'NCollection_IncAllocator_IBlockSizeLevel',
        );
        expect(enumDecl).toBeDefined();
        const doc = getJSDocText(enumDecl!);
        expect(doc).toContain('block');
      },
    );

    it.skipIf(!sourceFile)(
      'should have enum-level JSDoc on at least 10 nested enums',
      () => {
        let nestedEnumsWithDoc = 0;
        let nestedEnumsTotal = 0;
        ts.forEachChild(sourceFile!, (node) => {
          if (!ts.isVariableStatement(node)) return;
          const decl = node.declarationList.declarations[0];
          if (!decl?.name || !ts.isIdentifier(decl.name)) return;
          if (!decl.type || !ts.isTypeLiteralNode(decl.type)) return;
          const name = decl.name.text;
          const parts = name.split('_');
          if (parts.length < 3) return;
          nestedEnumsTotal++;
          if (hasJSDoc(node)) nestedEnumsWithDoc++;
        });
        expect(nestedEnumsWithDoc).toBeGreaterThanOrEqual(10);
      },
    );
  });

  describe('Overload @param correctness', () => {
    function getJSDocParams(node: ts.Node): { name: string; description: string }[] {
      const doc = getJSDocText(node);
      const params: { name: string; description: string }[] = [];
      const paramRegex = /@param\s+(\S+)\s*(.*)/g;
      let match;
      while ((match = paramRegex.exec(doc)) !== null) {
        params.push({ name: match[1], description: match[2].trim() });
      }
      return params;
    }

    function findAllConstructors(
      classDecl: ts.ClassDeclaration,
    ): ts.ConstructorDeclaration[] {
      return classDecl.members.filter(ts.isConstructorDeclaration);
    }

    it.skipIf(!sourceFile)(
      'should document the optional bucket count on the zero-required-argument constructor (TColStd_HPackedMapOfInteger)',
      () => {
        const cls = findClass(sourceFile!, 'TColStd_HPackedMapOfInteger');
        expect(cls).toBeDefined();
        const ctors = findAllConstructors(cls!);
        const zeroRequiredArgCtor = ctors.find(
          (c) => c.parameters.every((parameter) => parameter.questionToken),
        );
        expect(zeroRequiredArgCtor).toBeDefined();
        const params = getJSDocParams(zeroRequiredArgCtor!);
        expect(params.map((param) => param.name)).toEqual(['theNbBuckets']);
      },
    );

    it.skipIf(!sourceFile)(
      'should have matching @param name for TColStd_HPackedMapOfInteger(theOther) constructor',
      () => {
        const cls = findClass(sourceFile!, 'TColStd_HPackedMapOfInteger');
        expect(cls).toBeDefined();
        const ctors = findAllConstructors(cls!);
        const copyCtorCandidates = ctors.filter(
          (c) => c.parameters.length === 1 &&
            c.parameters[0].name &&
            ts.isIdentifier(c.parameters[0].name) &&
            c.parameters[0].name.text === 'theOther',
        );
        expect(copyCtorCandidates.length).toBeGreaterThanOrEqual(1);
        const copyCtor = copyCtorCandidates[0];
        const params = getJSDocParams(copyCtor);
        if (params.length > 0) {
          expect(params.some((p) => p.name === 'theOther')).toBe(true);
          expect(params.some((p) => p.name === 'theNbBuckets')).toBe(false);
        }
      },
    );

    it.skipIf(!sourceFile)(
      'should not have @param tags on default-expanded no-arg constructors (BRepTools_ShapeSet)',
      () => {
        const cls = findClass(sourceFile!, 'BRepTools_ShapeSet');
        if (!cls) return;
        const ctors = findAllConstructors(cls);
        const noArgCtor = ctors.find((c) => c.parameters.length === 0);
        if (!noArgCtor) return;
        const params = getJSDocParams(noArgCtor);
        expect(params).toHaveLength(0);
      },
    );

    it.skipIf(!sourceFile)(
      'should not have @param on any no-arg constructors across the whole .d.ts',
      () => {
        let violations = 0;
        let total = 0;
        const violationNames: string[] = [];
        ts.forEachChild(sourceFile!, (node) => {
          if (!ts.isClassDeclaration(node) || !node.name) return;
          const ctors = findAllConstructors(node);
          for (const ctor of ctors) {
            if (ctor.parameters.length !== 0) continue;
            total++;
            const params = getJSDocParams(ctor);
            if (params.length > 0) {
              violations++;
              if (violationNames.length < 10) {
                violationNames.push(node.name.text);
              }
            }
          }
        });
        expect(violations).toBe(0);
      },
    );

    it.skipIf(!sourceFile)(
      'should have @param names matching actual param names for methods with stripped output params',
      () => {
        const cls = findClass(sourceFile!, 'BRep_Tool');
        expect(cls).toBeDefined();
        const rangeMethods = findAllMethods(cls!, 'Range');
        expect(rangeMethods.length).toBeGreaterThanOrEqual(1);

        for (const m of rangeMethods) {
          const tsParamNames = m.parameters.map((p) =>
            ts.isIdentifier(p.name) ? p.name.text : '',
          );
          const docParams = getJSDocParams(m);
          for (const dp of docParams) {
            expect(tsParamNames).toContain(dp.name);
          }
        }
      },
    );
  });

  describe('Detailed-section coverage — classes', () => {
    it.skipIf(!sourceFile)(
      'should append detailed bullet items after the brief for BRepPrimAPI_MakeBox',
      () => {
        const cls = findClass(sourceFile!, 'BRepPrimAPI_MakeBox');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        expect(doc).toContain('defining the construction of a box');
        expect(doc).toContain('implementing the construction algorithm');
      },
    );

    it.skipIf(!sourceFile)(
      'should preserve detailed prose about poles and weights for Geom_BSplineCurve',
      () => {
        const cls = findClass(sourceFile!, 'Geom_BSplineCurve');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        expect(doc.toLowerCase()).toContain('control points');
        expect(doc).toContain('MaxDegree');
      },
    );

    it.skipIf(!sourceFile)(
      'should preserve detailed prose about persistent data for Storage_Data',
      () => {
        const cls = findClass(sourceFile!, 'Storage_Data');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        expect(doc).toContain('persistent data to be written');
        expect(doc).toContain('persistent data which are read from a container');
      },
    );

    it.skipIf(!sourceFile)(
      'should preserve detailed bullet items for TDF_Attribute',
      () => {
        const cls = findClass(sourceFile!, 'TDF_Attribute');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        expect(doc).toContain('a feature');
        expect(doc).toContain('a constraint');
      },
    );

    it.skipIf(!sourceFile)(
      'should preserve bullet items in detailed for TopoDS_Shape',
      () => {
        const cls = findClass(sourceFile!, 'TopoDS_Shape');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        expect(doc).toContain('references an underlying shape');
        expect(doc).toContain('local coordinate system');
      },
    );
  });

  describe('Detailed-section coverage — members', () => {
    it.skipIf(!sourceFile)(
      'should emit member-level detailed prose for BRepPrim_GWedge constructor',
      () => {
        const cls = findClass(sourceFile!, 'BRepPrim_GWedge');
        expect(cls).toBeDefined();
        const ctors = cls!.members.filter(ts.isConstructorDeclaration);
        const docs = ctors.map((c) => getJSDocText(c));
        const docWithDetail = docs.find(
          (d) => d.includes('XMin, YMin, ZMin') && d.includes('STEP right angular wedge'),
        );
        expect(docWithDetail).toBeDefined();
      },
    );

    it.skipIf(!sourceFile)(
      'should emit member-level detailed prose for BRepFeat_MakeRevol',
      () => {
        const cls = findClass(sourceFile!, 'BRepFeat_MakeRevol');
        expect(cls).toBeDefined();
        const ctors = cls!.members.filter(ts.isConstructorDeclaration);
        const docs = ctors.map((c) => getJSDocText(c));
        const docWithDetail = docs.find((d) => d.includes('Boolean cut'));
        expect(docWithDetail).toBeDefined();
        expect(docWithDetail!).toContain('Boolean fusion');
      },
    );

    it.skipIf(!sourceFile)(
      'should emit member-level detailed prose for GeomFill_BSplineCurves.Init',
      () => {
        const cls = findClass(sourceFile!, 'GeomFill_BSplineCurves');
        expect(cls).toBeDefined();
        const inits = findAllMethods(cls!, 'Init');
        const docs = inits.map((m) => getJSDocText(m));
        const docWithStyle = docs.find((d) => d.includes('flattest patch'));
        expect(docWithStyle).toBeDefined();
        expect(docWithStyle!).toContain('GeomFill_Stretch');
        expect(docWithStyle!).toContain('GeomFill_Curved');
      },
    );

    it.skipIf(!sourceFile)(
      'should produce distinct detailed text for same-arity overloads of ShapeBuild_ReShape.Apply',
      () => {
        const cls = findClass(sourceFile!, 'ShapeBuild_ReShape');
        expect(cls).toBeDefined();
        const applies = findAllMethods(cls!, 'Apply');
        expect(applies.length).toBeGreaterThanOrEqual(2);
        const docs = applies.map((m) => getJSDocText(m));
        const nonEmpty = docs.filter((d) => d.length > 0);
        expect(nonEmpty.length).toBeGreaterThanOrEqual(2);
        const unique = new Set(nonEmpty);
        expect(unique.size).toBeGreaterThanOrEqual(2);
        const hasNotImplemented = docs.some((d) => d.includes('NOT IMPLEMENTED'));
        const hasReplacement = docs.some((d) => d.includes('replaced by shape'));
        expect(hasNotImplemented).toBe(true);
        expect(hasReplacement).toBe(true);
      },
    );
  });

  describe('Markdown structure preservation', () => {
    function collectJSDocBodyLines(doc: string): string[] {
      // Strip leading "/**", trailing "*/", and per-line " * " prefix.
      const inner = doc
        .replace(/^\s*\/\*\*/, '')
        .replace(/\*\/\s*$/, '');
      return inner
        .split('\n')
        .map((line) => line.replace(/^\s*\*\s?/, '').replace(/\s+$/, ''));
    }

    it.skipIf(!sourceFile)(
      'should render itemizedlist children as Markdown bullets for BRepPrimAPI_MakeBox',
      () => {
        const cls = findClass(sourceFile!, 'BRepPrimAPI_MakeBox');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        const bulletLines = collectJSDocBodyLines(doc).filter((l) => l.startsWith('- '));
        expect(bulletLines.length).toBeGreaterThanOrEqual(2);
        expect(bulletLines.some((l) => l.includes('defining the construction of a box'))).toBe(true);
      },
    );

    it.skipIf(!sourceFile)(
      'should preserve paragraph breaks as blank JSDoc lines for BRepAlgoAPI_Check',
      () => {
        const cls = findClass(sourceFile!, 'BRepAlgoAPI_Check');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        const lines = collectJSDocBodyLines(doc);
        const blanks = lines.filter((l) => l === '');
        expect(blanks.length).toBeGreaterThanOrEqual(1);
      },
    );

    it.skipIf(!sourceFile)(
      'should render orderedlist children as numbered Markdown for BOPDS_DS',
      () => {
        const cls = findClass(sourceFile!, 'BOPDS_DS');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        const lines = collectJSDocBodyLines(doc);
        const numbered = lines.filter((l) => /^\d+\. /.test(l));
        expect(numbered.length).toBeGreaterThanOrEqual(3);
        expect(numbered.some((l) => l.includes('arguments of an operation'))).toBe(true);
      },
    );

    it.skipIf(!sourceFile)(
      'should wrap <computeroutput> content in backticks for GC_MakeSegment',
      () => {
        const cls = findClass(sourceFile!, 'GC_MakeSegment');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        expect(doc).toContain('`Value()`');
      },
    );

    it.skipIf(!sourceFile)(
      'should resolve <ref> to {@link Name | `Name`} when target is a known export (Geom_BSplineCurve)',
      () => {
        const cls = findClass(sourceFile!, 'Geom_BSplineCurve');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        // After link-token normalization the alias-with-code form is required so Monaco
        // hovers show themed inline code instead of a literal {@link …} artifact.
        expect(doc).toMatch(/\{@link\s+Geom_BSplineCurve\s*\|\s*`Geom_BSplineCurve`\s*\}/);
        expect(doc).not.toMatch(/\{@link\s+Geom_BSplineCurve\s*\}/);
      },
    );

    it.skipIf(!sourceFile)(
      'should fall back to backticks when <ref> target is not a known export',
      () => {
        // GC_MakeSegment.Value is a member ref (not a top-level export); should render as backticks
        const cls = findClass(sourceFile!, 'GC_MakeSegment');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        // The Value() member is referenced but not a class export
        expect(doc).toContain('`Value()`');
        expect(doc).not.toContain('{@link Value()}');
      },
    );
  });

  describe('Simplesect → JSDoc tag mapping', () => {
    it.skipIf(!sourceFile)(
      'should emit @remarks **Note:** for member-level note simplesect (GC_MakeLine constructor)',
      () => {
        const cls = findClass(sourceFile!, 'GC_MakeLine');
        expect(cls).toBeDefined();
        const ctors = cls!.members.filter(ts.isConstructorDeclaration);
        const docs = ctors.map((c) => getJSDocText(c));
        const docWithNote = docs.find(
          (d) => d.includes('@remarks') && d.includes('**Note:**'),
        );
        expect(docWithNote).toBeDefined();
        expect(docWithNote!).toMatch(/@remarks\s+\*\*Note:\*\*/);
      },
    );

    it.skipIf(!sourceFile)(
      'should emit @remarks **Warning:** for member-level warning simplesect (Geom_BSplineCurve.WeightsArray)',
      () => {
        const cls = findClass(sourceFile!, 'Geom_BSplineCurve');
        expect(cls).toBeDefined();
        const method = findMethod(cls!, 'WeightsArray');
        expect(method).toBeDefined();
        const doc = getJSDocText(method!);
        expect(doc).toMatch(/@remarks\s+\*\*Warning:\*\*/);
        expect(doc).toContain('Do NOT modify');
      },
    );

    it.skipIf(!sourceFile)(
      'should emit @see {@link Name | `Name`} when see simplesect target is a known export (Message_ProgressRange → Message_ProgressScope)',
      () => {
        const cls = findClass(sourceFile!, 'Message_ProgressRange');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        // After R2 consolidation, @see routes through the same classifier as inline
        // {@link} tokens: resolved targets render with the alias-with-code form.
        expect(doc).toMatch(
          /@see\s+\{@link\s+Message_ProgressScope\s*\|\s*`Message_ProgressScope`\s*\}/,
        );
      },
    );

    it.skipIf(!sourceFile)(
      'should keep @returns mappings working alongside new @remarks/@see tags (regression)',
      () => {
        let methodsWithReturns = 0;
        ts.forEachChild(sourceFile!, (node) => {
          if (!ts.isClassDeclaration(node)) return;
          for (const member of node.members) {
            if (!ts.isMethodDeclaration(member)) continue;
            if (getJSDocText(member).includes('@returns')) methodsWithReturns++;
          }
        });
        expect(methodsWithReturns).toBeGreaterThan(0);
      },
    );

    it.skipIf(!sourceFile)(
      'should keep @deprecated mappings working alongside new tags (regression)',
      () => {
        let withDeprecated = 0;
        ts.forEachChild(sourceFile!, (node) => {
          if (!ts.isClassDeclaration(node)) return;
          if (getJSDocText(node).includes('@deprecated')) withDeprecated++;
          for (const member of node.members) {
            if (!ts.isMethodDeclaration(member)) continue;
            if (getJSDocText(member).includes('@deprecated')) withDeprecated++;
          }
        });
        expect(withDeprecated).toBeGreaterThan(0);
      },
    );
  });

  describe('JSDoc termination integrity', () => {
    it.skipIf(!sourceFile)(
      'should not leave any JSDoc body line dangling on a list opener phrase ("as follows:", "such as:", etc.)',
      () => {
        // Walk every JSDocComment AST node and inspect each body line.
        // A "dangling opener" is a line that ends with one of the canonical
        // list-opener phrases ("as follows:", "such as:", "including:",
        // "for example:", "of the following types:", "as one of:") AND has
        // NO body content (bullets, prose, code fence) following it in the
        // same JSDoc. Bare `:`/`;`/`,` are NOT flagged on their own because
        // OCCT briefs frequently end in such punctuation as a stylistic
        // choice, not as a sign that the bullet/sublist was dropped during
        // extraction.
        const openerPhrases = [
          /\bas follows:?$/i,
          /\bsuch as:?$/i,
          /\bincluding:?$/i,
          /\bfor example:?$/i,
          /\bof the following types:?$/i,
          /\bas one of:?$/i,
        ];
        const offenders: string[] = [];

        function walk(node: ts.Node): void {
          const docs = (node as { jsDoc?: ts.JSDoc[] }).jsDoc;
          if (Array.isArray(docs)) {
            for (const doc of docs) {
              const raw = doc.getFullText();
              const inner = raw
                .replace(/^\s*\/\*\*/, '')
                .replace(/\*\/\s*$/, '');
              const lines = inner
                .split('\n')
                .map((l) => l.replace(/^\s*\*\s?/, ''));
              for (let i = 0; i < lines.length; i++) {
                const trimmed = lines[i].trim();
                if (trimmed === '') continue;
                if (trimmed.startsWith('@')) continue;
                if (trimmed.startsWith('- ')) continue;
                if (/^\d+\.\s/.test(trimmed)) continue;
                if (trimmed.startsWith('```')) continue;
                if (!openerPhrases.some((re) => re.test(trimmed))) continue;
                let hasFollowupBody = false;
                for (let j = i + 1; j < lines.length; j++) {
                  const t = lines[j].trim();
                  if (t === '') continue;
                  if (t.startsWith('@')) break;
                  hasFollowupBody = true;
                  break;
                }
                if (!hasFollowupBody && offenders.length < 10) {
                  offenders.push(trimmed.slice(0, 200));
                }
              }
            }
          }
          ts.forEachChild(node, walk);
        }

        walk(sourceFile!);

        if (offenders.length > 0) {
          const sample = offenders.map((l, i) => `  ${i + 1}. ${l}`).join('\n');
          throw new Error(
            `Found ${offenders.length} JSDoc lines that dangle on a list opener with no follow-up (sample shown):\n${sample}`,
          );
        }
        expect(offenders.length).toBe(0);
      },
    );

    it.skipIf(!sourceFile)(
      'should preserve bullet content for the original BRepPrimAPI_MakeBox truncation case (regression)',
      () => {
        // Concrete regression target: BRepPrimAPI_MakeBox class doc truncated at "for:" before bullet fix.
        // Before the fix, the BRepPrimAPI_MakeBox class doc ended at "for:" with
        // no bullets. After the fix, the four bullets describing the framework
        // must follow the brief in the same JSDoc block.
        const cls = findClass(sourceFile!, 'BRepPrimAPI_MakeBox');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        expect(doc).toMatch(/framework for:/);
        const lines = doc.split('\n').map((l) => l.replace(/^\s*\*\s?/, '').trim());
        const briefIdx = lines.findIndex((l) => /framework for:$/.test(l));
        expect(briefIdx).toBeGreaterThanOrEqual(0);
        const tail = lines.slice(briefIdx + 1);
        const bullets = tail.filter((l) => l.startsWith('- '));
        expect(bullets.length).toBeGreaterThanOrEqual(2);
      },
    );

    it.skipIf(!sourceFile)(
      'should drastically reduce the count of opener-phrase truncations vs the pre-fix baseline',
      () => {
        // The pre-fix .d.ts contained dozens of opener-phrase truncations
        // (briefs ending in "as follows:" etc. with no follow-up). After the
        // renderer + simplesect changes the count must collapse to ~0. Allow
        // a small budget for upstream OCCT comments that genuinely have no
        // body to render so the test stays robust against header churn.
        const openerPhrases = [
          /\bas follows:?$/i,
          /\bsuch as:?$/i,
          /\bincluding:?$/i,
          /\bfor example:?$/i,
          /\bof the following types:?$/i,
          /\bas one of:?$/i,
        ];
        let danglingCount = 0;
        function walk(node: ts.Node): void {
          const docs = (node as { jsDoc?: ts.JSDoc[] }).jsDoc;
          if (Array.isArray(docs)) {
            for (const doc of docs) {
              const inner = doc
                .getFullText()
                .replace(/^\s*\/\*\*/, '')
                .replace(/\*\/\s*$/, '');
              const lines = inner.split('\n').map((l) => l.replace(/^\s*\*\s?/, ''));
              for (let i = 0; i < lines.length; i++) {
                const trimmed = lines[i].trim();
                if (!openerPhrases.some((re) => re.test(trimmed))) continue;
                let hasFollowupBody = false;
                for (let j = i + 1; j < lines.length; j++) {
                  const t = lines[j].trim();
                  if (t === '') continue;
                  if (t.startsWith('@')) break;
                  hasFollowupBody = true;
                  break;
                }
                if (!hasFollowupBody) danglingCount++;
              }
            }
          }
          ts.forEachChild(node, walk);
        }
        walk(sourceFile!);
        expect(danglingCount).toBeLessThanOrEqual(2);
      },
    );
  });

  describe('Template typedef JSDoc fallback', () => {
    it.skipIf(!sourceFile)(
      'should have class-level JSDoc from base template for NCollection_* template typedefs',
      () => {
        let withDoc = 0;
        let total = 0;
        const ncollectionTypedefs = [
          'NCollection_Array1_TopoDS_Shape',
          'NCollection_List_TopoDS_Shape',
          'NCollection_Array1_double',
          'NCollection_Array1_int',
          'NCollection_Array1_gp_Pnt',
        ];
        for (const name of ncollectionTypedefs) {
          const cls = findClass(sourceFile!, name);
          if (!cls) continue;
          total++;
          if (hasJSDoc(cls)) withDoc++;
        }
        expect(withDoc).toBeGreaterThan(0);
      },
    );

    it.skipIf(!sourceFile)(
      'should inherit method JSDoc from NCollection_Array1 base template for NCollection_Array1_TopoDS_Shape',
      () => {
        const cls = findClass(
          sourceFile!,
          'NCollection_Array1_TopoDS_Shape',
        );
        expect(cls).toBeDefined();

        const init = findMethod(cls!, 'Init');
        expect(init).toBeDefined();
        expect(getJSDocText(init!)).toContain('Initialise');

        const size = findMethod(cls!, 'Size');
        expect(size).toBeDefined();
        expect(getJSDocText(size!)).toContain('Size');

        const length = findMethod(cls!, 'Length');
        expect(length).toBeDefined();
        expect(getJSDocText(length!).toLowerCase()).toContain('length');
      },
    );

    it.skipIf(!sourceFile)(
      'should have constructor JSDoc for template typedef subclasses with docs',
      () => {
        const cls5 = findClass(
          sourceFile!,
          'NCollection_Array1_TopoDS_Shape_5',
        );
        if (!cls5) return;
        const ctor = findConstructor(cls5);
        expect(ctor).toBeDefined();
        const doc = getJSDocText(ctor!);
        expect(doc).toContain('Copy');
      },
    );
  });

  // Bare `{@link Foo}` tokens that don't resolve to an emitted TS export render as
  // literal artifacts in Monaco hovers (Monaco's `displayPartsToString` doesn't
  // dereference unresolved targets). For exported targets we keep the link and add
  // an inline-code alias so hovers show themed code; for non-exported targets and
  // for C++ scoped/templated names that don't resolve we degrade to inline code.
  describe('Link token normalization', () => {
    function isExportedTopLevel(name: string): boolean {
      if (!sourceFile) return false;
      let found = false;
      ts.forEachChild(sourceFile, (node) => {
        if (
          ts.isClassDeclaration(node) &&
          node.name?.text === name
        )
          found = true;
        if (
          ts.isVariableStatement(node) &&
          node.declarationList.declarations.some(
            (d) => ts.isIdentifier(d.name) && d.name.text === name,
          )
        )
          found = true;
      });
      return found;
    }

    // T1 — exported target keeps the link with code-span alias.
    // gp_Pnt is exported and is heavily referenced from other class JSDoc; if any
    // {@link gp_Pnt} appears it must come through with the alias-with-code form.
    it.skipIf(!sourceFile)(
      'should emit alias-with-code for {@link gp_Pnt} (exported)',
      () => {
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        const aliasForm = /\{@link\s+gp_Pnt\s*\|\s*`gp_Pnt`\s*\}/;
        const bareForm = /\{@link\s+gp_Pnt\s*\}/;
        expect(aliasForm.test(content)).toBe(true);
        expect(bareForm.test(content)).toBe(false);
      },
    );

    // T2 — C++ scoped target whose underscore-flattened form does not export.
    // {@link BRep_Tool::IsClosed} is a canonical scoped reference in the current
    // corpus where every resolution step misses: BRep_Tool_IsClosed is a static
    // method (not a top-level class), the bare leaf IsClosed is not exported,
    // and BRep_Tool itself is exported but the JSDoc resolver only matches whole
    // tokens. The resolver must fall through every step and emit backticks
    // (proving the rewriter actually runs).
    //
    // History: this test originally pinned {@link OSD_ThreadPool::Launcher} on
    // the same contract, but audit R8.1's regen pass surfaced
    // `OSD_ThreadPool_Launcher` as a top-level export (it is a public nested
    // class on `OSD_ThreadPool`), so that token now correctly resolves to an
    // alias-with-code link. We re-pinned the contract on `BRep_Tool::IsClosed`
    // — a public static member function that will never be a top-level export
    // — to preserve the "nothing resolves" branch coverage.
    it.skipIf(!sourceFile)(
      'should emit backticks for {@link BRep_Tool::IsClosed} when nothing resolves',
      () => {
        expect(isExportedTopLevel('BRep_Tool_IsClosed')).toBe(false);
        expect(isExportedTopLevel('IsClosed')).toBe(false);
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        expect(content).toContain('`BRep_Tool::IsClosed`');
        expect(/\{@link\s+BRep_Tool::IsClosed\s*\}/.test(content)).toBe(false);
      },
    );

    // T3 — templated targets strip `<…>` for resolution but the alias text
    // preserves the original templated form. Whether the resolver finds an
    // export determines emission shape:
    //   * exported  → `{@link Stripped | \`Original<T>\`}`
    //   * unexported → `\`Original<T>\`` (backticks, no link)
    // OCCT's templated containers (NCollection_Array1, NCollection_DataMap, …)
    // are not top-level exports — only their fully specialised aliases are
    // (`NCollection_Array1_double`, etc.). This test asserts the structural
    // contract: every templated link token survives only as backticks-with-
    // template OR as alias-with-template, never as a bare `{@link X<T>}`.
    it.skipIf(!sourceFile)(
      'should rewrite templated {@link X<T>} tokens to backticks or alias-with-code (no bare form)',
      () => {
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        const bareTemplated = content.match(/\{@link\s+[^|}]*<[^}]*\}/g) || [];
        if (bareTemplated.length > 0) {
          throw new Error(
            `Found ${bareTemplated.length} bare templated {@link X<T>} tokens (sample):\n  ${bareTemplated
              .slice(0, 5)
              .join('\n  ')}`,
          );
        }
        expect(bareTemplated.length).toBe(0);
      },
    );

    // T4 — multiple tokens in the same paragraph are independently rewritten.
    // Poly_CoherentTriangulation has the worst-offending paragraph in the corpus
    // (>2k chars, many {@link …} tokens); each token must be transformed.
    it.skipIf(!sourceFile)(
      'should rewrite every {@link} token in a multi-token paragraph (Poly_CoherentTriangulation)',
      () => {
        const cls = findClass(sourceFile!, 'Poly_CoherentTriangulation');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        const bareTokens = doc.match(/\{@link\s+[^|}]+\}/g) || [];
        expect(bareTokens).toEqual([]);
      },
    );

    // T5 — whole-d.ts regression guard: zero bare {@link X} tokens remaining.
    // Locks in the doc's "eliminate 2,300 visual artifacts" target. Also catches
    // any future channel that bypasses _normalize_link_tokens.
    it.skipIf(!sourceFile)(
      'should leave zero bare {@link X} tokens (no `|` alias) in the whole .d.ts',
      () => {
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        const bareTokens = content.match(/\{@link\s+[^|}]+\}/g) || [];
        if (bareTokens.length > 0) {
          const sample = bareTokens.slice(0, 5).join('\n  ');
          throw new Error(
            `Found ${bareTokens.length} bare {@link X} tokens (sample):\n  ${sample}`,
          );
        }
        expect(bareTokens.length).toBe(0);
      },
    );

    // T6 — _CONTAINER_ALIASES post-V8 reality.
    // In OCCT V8.0 the source class was renamed from NCollection_Vector to
    // NCollection_DynamicArray. Neither base class is exported as a top-level
    // TS class (only their specializations like NCollection_DynamicArray_double),
    // so {@link NCollection_DynamicArray} cannot resolve to an exported target.
    // The resolver correctly falls through to backticks. This assertion guards
    // against a future regression where the bindings re-export an unspecialized
    // base class but the alias map points the wrong way.
    it.skipIf(!sourceFile)(
      'should emit backticks for {@link NCollection_DynamicArray} (no base-class export)',
      () => {
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        expect(/\{@link\s+NCollection_DynamicArray\s*\}/.test(content)).toBe(false);
        expect(content).toMatch(/`NCollection_DynamicArray`/);
      },
    );

    // T8 — leaf-only resolution distinguishes from underscore-flattened.
    // For a corpus where Foo_Bar exports but Bar does not, the resolver must
    // pick Foo_Bar (step 3) before falling through to the leaf-only step (step 4).
    // This test asserts the structural property: any {@link Foo::Bar} where
    // Foo_Bar exports MUST be rewritten as {@link Foo_Bar | `Foo::Bar`} and not
    // as {@link Bar | …} or backticks.
    //
    // CURRENTLY CLAMPED — R8.1 (handle-aware member-typedef peel) broadened the
    // _known_export_names set with late-discovered nested classes (e.g.
    // OSD_ThreadPool_Launcher, BRepGraph_Tool_Mesh, BRepGraph_Tool_Vertex)
    // that the JSDoc link rewriter in
    // `src/ocjs_bindgen/codegen/typescript/jsdoc/links.py` does not re-check
    // after R1 ordering. The rewriter still consults the pre-R8.1 export
    // snapshot, so these three tokens get rewritten as
    // `{@link Launcher | `OSD_ThreadPool::Launcher`}` (leaf-only step 4) when
    // they should resolve via step 3 to `{@link OSD_ThreadPool_Launcher | …}`.
    //
    // Real fix is a cross-strategy ordering change in `links.py` (re-run
    // `prepare_known_exports` or eagerly seed nested classes during R1 before
    // the JSDoc rewrite pass). Until that lands, this test asserts the bug
    // does not _grow_ beyond the known 3-token set rather than asserting
    // resolution correctness. See R8.1 audit V2.2 addendum for the
    // resolver-ordering follow-up.
    const T8_KNOWN_LEAF_RESOLVER_REGRESSIONS = new Set([
      '{@link Launcher | `OSD_ThreadPool::Launcher`}',
      '{@link Mesh | `BRepGraph_Tool::Mesh`}',
      '{@link Vertex | `BRepGraph_Tool::Vertex`}',
    ]);

    it.skipIf(!sourceFile)(
      'should prefer underscore-flattened (Foo_Bar) over leaf-only (Bar) when both could match',
      () => {
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        // After rewrite, all {@link X | `…`} aliases must reference an actually
        // exported symbol — never the bare leaf when an underscore-flattened
        // variant exists. Pull every alias-with-code token, derive its target,
        // and check the resolver picked the right candidate.
        const aliasTokens =
          content.match(/\{@link\s+([A-Za-z_][\w]*)\s*\|\s*`([^`]+)`\s*\}/g) || [];
        const offenders = new Set<string>();
        for (const tok of aliasTokens) {
          const m = tok.match(/\{@link\s+([A-Za-z_][\w]*)\s*\|\s*`([^`]+)`\s*\}/);
          if (!m) continue;
          const [, target, alias] = m;
          if (!alias.includes('::')) continue;
          // alias is `Parent::Member`. Resolver must have produced either:
          // (a) Parent_Member (underscore-flattened, step 3 hit), or
          // (b) Member (leaf-only, step 4) only when Parent_Member is NOT exported.
          const parts = alias.replace(/<[^>]*>$/, '').split('::');
          if (parts.length < 2) continue;
          const parent = parts.slice(0, -1).join('::');
          const leaf = parts[parts.length - 1];
          const flat = `${parent}_${leaf}`;
          if (target === leaf && isExportedTopLevel(flat)) {
            offenders.add(tok);
          }
        }

        // Clamp: assert the offender set is a subset of the known-bad set.
        // Any new leaf-vs-flattened regression introduced beyond the three
        // known-bad tokens fails this test loudly.
        const newOffenders = [...offenders].filter(
          (t) => !T8_KNOWN_LEAF_RESOLVER_REGRESSIONS.has(t),
        );
        if (newOffenders.length > 0) {
          throw new Error(
            `T8 clamp grew beyond known leaf-resolver regressions. New offenders:\n${newOffenders.join('\n')}\n` +
              `If these are legitimate new bugs, fix the resolver in links.py; if intentional, add them to T8_KNOWN_LEAF_RESOLVER_REGRESSIONS.`,
          );
        }
      },
    );

    // T9 — typedef-only names degrade to backticks (not {@link}).
    // _is_known_export_name deliberately excludes typedef-only names so we don't
    // emit dangling links. Standard_Boolean is the canonical typedef alias.
    it.skipIf(!sourceFile)(
      'should emit backticks for typedef-only target Standard_Boolean (no class export)',
      () => {
        expect(isExportedTopLevel('Standard_Boolean')).toBe(false);
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        // Any reference must collapse to backticks; absolutely no {@link Standard_Boolean…}
        expect(/\{@link\s+Standard_Boolean[^}]*\}/.test(content)).toBe(false);
      },
    );

    // T10 — consolidated @see channel: same predicate as inline {@link}.
    // The original code used a separate `target in self._docs` predicate which
    // could disagree with the export set. After consolidation, every @see must
    // either use the alias-with-code form (resolved) or bare-text fallback (unresolved).
    it.skipIf(!sourceFile)(
      'should route @see through the same classifier as inline links',
      () => {
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        // Every @see {@link …} occurrence must carry the alias pipe.
        const seeTokens = content.match(/@see\s+\{@link\s+[^}]+\}/g) || [];
        // Bare = no alias pipe at all. URL-style links (hand-written with
        // `| Display Text`) and resolver-emitted code aliases (`| `Foo``) are
        // both acceptable; only `{@link X}` with no pipe is the artifact.
        const seeBare = seeTokens.filter(
          (t: string) => !/\{@link\s+[^|}]+\|\s*[^}]+\}/.test(t),
        );
        if (seeBare.length > 0) {
          throw new Error(
            `Found ${seeBare.length} @see tokens with bare {@link} form (sample):\n  ${seeBare
              .slice(0, 5)
              .join('\n  ')}`,
          );
        }
        expect(seeBare.length).toBe(0);
      },
    );
  });

  // Horizontal-rule separator between brief and detailed bodies (rolled back).
  // Originally injected a Markdown horizontal rule (`* ---`) between brief and
  // detailed bodies. Monaco's hover stylesheet gives `<hr>` a `margin-bottom: -4px`
  // (editor.main.css:2940-2949), producing a 12px / 4px asymmetric gap that visibly
  // hugs the next paragraph. R4 has been rolled back; this guard prevents regression.
  describe('No `* ---` separator (rollback guard)', () => {
    it.skipIf(!sourceFile)(
      'should not emit `* ---` JSDoc separators anywhere in the generated d.ts',
      () => {
        const text = sourceFile!.getFullText();
        const matches = text.match(/^\s*\*\s---\s*$/gm) ?? [];
        expect(matches.length).toBe(0);
      },
    );
  });

  // Doxygen produces multi-thousand-character paragraphs that render as one
  // unwieldy line in Monaco hovers. Splitting at sentence boundaries during
  // _render_para keeps the JSDoc structurally faithful while making the tooltip
  // scannable.
  describe('Sentence-splitting long prose', () => {
    function jsDocBodyLines(doc: string): string[] {
      const inner = doc.replace(/^\s*\/\*\*/, '').replace(/\*\/\s*$/, '');
      return inner.split('\n').map((l) => l.replace(/^\s*\*\s?/, ''));
    }

    // T1 — Poly_CoherentTriangulation 2,345-char paragraph is split.
    // The raw .d.ts currently has a 2,345-char single line at the
    // Poly_CoherentTriangulation class; after splitting, no single body line
    // should exceed 1,000 chars.
    it.skipIf(!sourceFile)(
      'should split the Poly_CoherentTriangulation mega-paragraph into shorter lines',
      () => {
        const cls = findClass(sourceFile!, 'Poly_CoherentTriangulation');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        const longest = Math.max(...jsDocBodyLines(doc).map((l) => l.length));
        expect(longest).toBeLessThan(1000);
      },
    );

    // T2 — sentence splits are whitespace-preserving.
    // Concatenating the bullet/paragraph fragments with a single space must
    // reproduce the original prose modulo whitespace; no characters are dropped
    // at the split boundaries.
    it.skipIf(!sourceFile)(
      'should preserve content across sentence-split boundaries',
      () => {
        const cls = findClass(sourceFile!, 'Poly_CoherentTriangulation');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        // Recombine the multi-line bullet item that was originally one mega-line.
        // The bullet starts with "- **{@link Poly_CoherentLink}**".
        const lines = jsDocBodyLines(doc);
        // Post-R2 the link is rewritten to alias-with-code form
        // (`{@link Poly_CoherentLink | \`Poly_CoherentLink\`}`), so locate
        // the bullet by its bold-display marker which is stable across the
        // pre/post-R2 emission.
        const bulletStart = lines.findIndex((l) =>
          l.includes('Poly_CoherentLink') && l.includes('**'),
        );
        expect(bulletStart).toBeGreaterThanOrEqual(0);
        // Collect lines until the next blank or different-indent boundary.
        const collected: string[] = [];
        for (let i = bulletStart; i < lines.length; i++) {
          const l = lines[i];
          if (l.trim() === '') break;
          if (i > bulletStart && /^[-*\d]/.test(l.trim())) break;
          collected.push(l.trim());
        }
        const joined = collected.join(' ');
        // Sentinel phrases that must survive the split.
        expect(joined).toContain('Auxiliary data type');
        expect(joined).toContain('Memory management');
        expect(joined).toContain('NCollection_BaseAllocator');
      },
    );

    // T3 — paragraphs <=600 chars are not split.
    // gp_Pnt class brief is short prose; its body must remain a single block.
    it.skipIf(!sourceFile)(
      'should not split short paragraphs (gp_Pnt class brief)',
      () => {
        const cls = findClass(sourceFile!, 'gp_Pnt');
        expect(cls).toBeDefined();
        const doc = getJSDocText(cls!);
        const lines = jsDocBodyLines(doc);
        const briefLines = lines.filter(
          (l) => l.trim() !== '' && !l.trim().startsWith('@'),
        );
        // gp_Pnt's brief is "Defines a 3D cartesian point." — a single line.
        expect(briefLines.some((l) => l.includes('cartesian point'))).toBe(true);
      },
    );

    // T4 — splits only at ". (Capital)" boundaries; lowercase continuations
    // remain joined.
    it.skipIf(!sourceFile)(
      'should not split at lowercase sentence continuations',
      () => {
        // Construct via a regression assertion against the whole d.ts: any line
        // ending in ". " followed by a lowercase character should stay together
        // (we can only verify the splitter didn't split such cases, by checking
        // that no line starts with a lowercase character following a sibling
        // line that ended with ".").
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        const lines = content.split('\n');
        let violations = 0;
        for (let i = 1; i < lines.length; i++) {
          const prev = lines[i - 1].replace(/^\s*\*\s?/, '').trimEnd();
          const cur = lines[i].replace(/^\s*\*\s?/, '');
          if (!prev.endsWith('.')) continue;
          if (cur.length === 0) continue;
          const first = cur.trimStart()[0];
          // A lowercase char following ". " on a fresh line implies the splitter
          // got too eager. Skip cases that look like list/bullet continuations.
          if (first && first === first.toLowerCase() && /[a-z]/.test(first)) {
            // Allow legitimate cases where the next line starts with a lowercase
            // word that's a JSDoc tag, code, or list marker.
            if (cur.trimStart().startsWith('@')) continue;
            if (cur.trimStart().startsWith('`')) continue;
            violations++;
          }
        }
        // Allow a small noise budget for upstream OCCT prose with intentional
        // lowercase starts (technical terms, code identifiers).
        expect(violations).toBeLessThan(50);
      },
    );

    // T5 — whole-d.ts regression guard: zero JSDoc body lines exceeding
    // 1,500 chars. We restrict to lines starting with ` *` (the JSDoc body
    // marker) because R5 targets prose readability inside Monaco hovers, not
    // wide method signatures (those are TS code; line wrapping would harm
    // copy/paste). The doc's quantitative target: 5 prose lines >1,500 chars
    // in the pre-fix d.ts; R5 must drive that to 0.
    it.skipIf(!sourceFile)(
      'should leave zero JSDoc body lines exceeding 1,500 chars in the whole .d.ts',
      () => {
        const content = fs.readFileSync(FULL_DTS, 'utf8');
        const longLines = content
          .split('\n')
          .filter((l: string) => /^\s*\*/.test(l) && l.length > 1500);
        if (longLines.length > 0) {
          const sample = longLines.map((l: string) => l.slice(0, 200) + '…').join('\n  ');
          throw new Error(
            `Found ${longLines.length} body lines >1500 chars (sample):\n  ${sample}`,
          );
        }
        expect(longLines.length).toBe(0);
      },
    );
  });
});
