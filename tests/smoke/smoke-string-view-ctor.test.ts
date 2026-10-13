/**
 * Verifies OCCT string-view constructors and setters accept JavaScript strings through registered
 * owning-string conversions. ASCII, UTF-16, and multi-character append cases round-trip content.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: string_view → owning-string ctor cast', () => {
  beforeAll(async () => { await initOC(); });

  describe('TCollection_ExtendedString (std::u16string_view → std::u16string)', () => {
    it('constructs from a JS string without a BindingError', () => {
      const oc = getOC();
      expect(() => {
        using s = new oc.TCollection_ExtendedString('Tau');
        s;
      }).not.toThrow();
    });

    it('round-trips ASCII content through Length() and IsEqual()', () => {
      const oc = getOC();
      const input = 'Hello';
      using s = new oc.TCollection_ExtendedString(input);
      expect(s.Length()).toBe(input.length);

      // A sibling built from the same JS string must compare equal; one
      // built from a different string must not — proves the owning cast
      // carried the actual code units, not an empty/garbage buffer.
      using same = new oc.TCollection_ExtendedString(input);
      using different = new oc.TCollection_ExtendedString('Goodbye');
      expect(s.IsEqual(same)).toBe(true);
      expect(s.IsEqual(different)).toBe(false);
    });

    it('round-trips a non-ASCII BMP string (UTF-16 owning cast)', () => {
      const oc = getOC();
      // 'é' (U+00E9) and '×' (U+00D7) are single UTF-16 code units, so the
      // JS .length equals the char16_t length the std::u16string carries.
      const input = 'héllo×2';
      using s = new oc.TCollection_ExtendedString(input);
      expect(s.Length()).toBe(input.length);

      using same = new oc.TCollection_ExtendedString(input);
      expect(s.IsEqual(same)).toBe(true);
    });

    it('dispatches multi-character AssignCat through the full-string overload', () => {
      const oc = getOC();
      using s = new oc.TCollection_ExtendedString('Tau');
      s.AssignCat('CAD');
      using expected = new oc.TCollection_ExtendedString('TauCAD');
      expect(s.IsEqual(expected)).toBe(true);
    });
  });

  describe('TCollection_AsciiString (std::string_view → std::string)', () => {
    it('constructs from a JS string without a BindingError', () => {
      const oc = getOC();
      expect(() => {
        using s = new oc.TCollection_AsciiString('Tau');
        s;
      }).not.toThrow();
    });

    it('round-trips ASCII content through Length() + ToCString()', () => {
      const oc = getOC();
      const input = 'opencascade';
      using s = new oc.TCollection_AsciiString(input);
      expect(s.Length()).toBe(input.length);
      expect(s.ToCString()).toBe(input);
    });

    it('dispatches multi-character AssignCat through the full-string overload', () => {
      const oc = getOC();
      using s = new oc.TCollection_AsciiString('open');
      s.AssignCat('cascade');
      expect(s.ToCString()).toBe('opencascade');
    });
  });
});
