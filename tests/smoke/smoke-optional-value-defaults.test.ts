/**
 * Verifies primitive and class-value trailing defaults. `undefined` selects the C++ default,
 * explicit values pass through, and `null` raises the strict-null binding error.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

/**
 * Exact substring carried by the BindingError thrown by the val-default
 * strict-null lambda. See
 * `src/ocjs_bindgen/codegen/val_default.py::_val_unwrap_expr` for the
 * source of truth.
 */
const RULE_5_NULL_ERROR_FRAGMENT = /null is not a valid value/;

describe.skipIf(!wasmExists)('Smoke: value-typed trailing-default routing (rule 5)', () => {
  beforeAll(async () => { await initOC(); });

  describe('BRepMesh_IncrementalMesh ctor — primitive trailing defaults', () => {
    it('explicit undefined for trailing primitives: (shape, 0.1, undefined, undefined, undefined) — succeeds via C++ defaults', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using shape = box.Shape();
      using mesh = new oc.BRepMesh_IncrementalMesh(shape, 0.1, undefined, undefined, undefined);
      using progressRange = new oc.Message_ProgressRange();
      mesh.Perform(progressRange);
      expect(mesh.IsDone()).toBe(true);
    });

    it('explicit null at any trailing slot throws rule-5 BindingError: (shape, 0.1, null, null, null)', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using shape = box.Shape();
      // @ts-expect-error - null is not a valid value for the trailing primitive slots (rule-5 strict null)
      expect(() => new oc.BRepMesh_IncrementalMesh(shape, 0.1, null, null, null)).toThrow(
        RULE_5_NULL_ERROR_FRAGMENT,
      );
    });

    it('mixed explicit/omitted with null at last slot throws rule-5 BindingError: (shape, 0.1, true, undefined, null)', () => {
      const oc = getOC();
      using box = new oc.BRepPrimAPI_MakeBox(10, 20, 30);
      using shape = box.Shape();
      // @ts-expect-error - null is not a valid Standard_Boolean for isInParallel (rule-5 strict null)
      expect(() => new oc.BRepMesh_IncrementalMesh(shape, 0.1, true, undefined, null)).toThrow(
        RULE_5_NULL_ERROR_FRAGMENT,
      );
    });
  });

  /**
   * `Message_Attribute` exposes an observable class-value default. Omission and
   * `undefined` produce an empty name, an explicit name round-trips, and `null` raises
   * the strict-null binding error.
   */
  // Activation gate: flipped true — `Message_Attribute`'s class-value
  // `= TCollection_AsciiString::EmptyString()` ctor default ships as a
  // val_default emission at a non-RBV-blocked, JS-observable site.
  const CLASS_VALUE_DEFAULT_AVAILABLE = true;

  describe.skipIf(!CLASS_VALUE_DEFAULT_AVAILABLE)('class-value defaults via real OCCT migration site (matrix rows 2/36)', () => {
    it.skipIf(!CLASS_VALUE_DEFAULT_AVAILABLE)('omitted recovers the empty-string class default; explicit null throws rule-5', () => {
      const oc = getOC();

      // (a) Omitted `theName` → val_default `isUndefined()` branch
      // materialises `TCollection_AsciiString::EmptyString()`. The
      // recovered default is observable: GetMessageKey() returns "" and
      // GetName() is empty.
      using attrDefault = new oc.Message_Attribute();
      expect(attrDefault.GetMessageKey()).toBe('');
      using defaultName = attrDefault.GetName();
      expect(defaultName.IsEmpty()).toBe(true);

      // Explicit `undefined` resolves through the same default branch.
      using attrUndefined = new oc.Message_Attribute(undefined);
      expect(attrUndefined.GetMessageKey()).toBe('');

      // (a') A supplied name reads back unchanged — proving the
      // `isUndefined() → default` branch is genuinely distinct from the
      // explicit `arg.as<const TCollection_AsciiString&>()` branch (the
      // default-recovery is not a spurious always-empty result).
      using suppliedName = new oc.TCollection_AsciiString('hatch-pattern');
      using attrNamed = new oc.Message_Attribute(suppliedName);
      expect(attrNamed.GetMessageKey()).toBe('hatch-pattern');

      // (b) Explicit `null` rejects via the val_default strict-null lambda
      // (rule 5). The .d.ts types `theName` as `TCollection_AsciiString`
      // (no `| null`), so `null` is a type error here — Pattern B.
      expect(() => {
        // @ts-expect-error - null is not a valid TCollection_AsciiString (rule-5 strict null)
        using bad = new oc.Message_Attribute(null);
        void bad;
      }).toThrow(RULE_5_NULL_ERROR_FRAGMENT);
    });
  });
});
