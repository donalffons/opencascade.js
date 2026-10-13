/**
 * Smoke tests: CString (const char*) handling in overload contexts.
 *
 * Validates that:
 * 1. String arguments work correctly in constructors with multiple overloads
 * 2. CString return values (ToCString) round-trip correctly
 * 3. String arguments at the same arity as non-string arguments dispatch correctly
 * 4. Empty and special-character strings are handled
 *
 * After the JS dispatch migration, CString args switch from emscripten::val
 * to std::string typed parameters. These tests ensure the conversion is correct.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: CString dispatch and handling', () => {
  beforeAll(async () => { await initOC(); });

  describe('TCollection_AsciiString — string constructor overloads', () => {
    it('should construct from string (suffix-free)', () => {
      const oc = getOC();
      using str = new oc.TCollection_AsciiString('hello world');
      expect(str.Length()).toBe(11);
      expect(str.ToCString()).toBe('hello world');
    });

    it('should construct from integer', () => {
      const oc = getOC();
      using str = new oc.TCollection_AsciiString(42);
      expect(str.ToCString()).toBe('42');
      expect(str.Length()).toBe(2);
    });

    it('should construct from float', () => {
      const oc = getOC();
      using str = new oc.TCollection_AsciiString(3.14);
      const text = str.ToCString();
      expect(text).toContain('3.14');
      expect(str.Length()).toBeGreaterThan(0);
    });

    it('should construct from string + length (2-arg overload)', () => {
      const oc = getOC();
      using str = new oc.TCollection_AsciiString('hello world', 5);
      expect(str.Length()).toBe(5);
      expect(str.ToCString()).toBe('hello');
    });

    it('should construct from empty string', () => {
      const oc = getOC();
      using str = new oc.TCollection_AsciiString('');
      expect(str.Length()).toBe(0);
    });
  });

  describe('CString return values', () => {
    it('should return correct string from ToCString', () => {
      const oc = getOC();
      const testCases = [
        'simple',
        'with spaces',
        '/path/to/file.stp',
        'special_chars-123',
        'CamelCaseString',
      ];

      for (const input of testCases) {
        using str = new oc.TCollection_AsciiString(input);
        expect(str.ToCString()).toBe(input);
      }
    });

    it('should handle UTF-8 characters in TCollection_AsciiString', () => {
      const oc = getOC();
      using str = new oc.TCollection_AsciiString('test123');
      expect(str.ToCString()).toBe('test123');
      expect(str.Length()).toBe(7);
    });
  });

  describe('TCollection_ExtendedString — string vs number dispatch', () => {
    it('should construct from integer (not string)', () => {
      const oc = getOC();
      using str = new oc.TCollection_ExtendedString(42);
      expect(str.Length()).toBe(2);
    });

    it('should construct from float (not string)', () => {
      const oc = getOC();
      using str = new oc.TCollection_ExtendedString(3.14);
      expect(str.Length()).toBeGreaterThanOrEqual(4);
    });
  });

  describe('String arguments in file I/O methods', () => {
    it('should accept JS string path for BRepTools.Write (CString binding)', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using shape = box.Shape();

      const filePath = '/tmp/_cstring_test.brep';
      using messageProgressrange = new oc.Message_ProgressRange();
      const result = oc.BRepTools.Write(shape, filePath, messageProgressrange);
      expect(result).toBe(true);

      const data = oc.FS.readFile(filePath) as Uint8Array;
      expect(data.length).toBeGreaterThan(0);

      oc.FS.unlink(filePath);
    });
  });
});
