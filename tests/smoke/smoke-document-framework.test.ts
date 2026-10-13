/**
 * Smoke tests: Document/label/attribute framework.
 *
 * Validates TDocStd_Document, TDF_Label, and TDataStd_Name -- the OCCT
 * document framework internals used by XCAF.
 */
import { describe, it, expect, beforeAll } from 'vitest';
import { initOC, getOC, wasmExists } from './helpers.js';

describe.skipIf(!wasmExists)('Smoke: Document framework', () => {
  beforeAll(async () => { await initOC(); });

  it('should store and retrieve a named label with matching string via TDataStd_Name', () => {
    const oc = getOC();
    using tCollectionExtendedstring = new oc.TCollection_ExtendedString();
    using doc = new oc.TDocStd_Document(tCollectionExtendedstring);
    using mainLabel = doc.Main();

    using nameStr = new oc.TCollection_ExtendedString('TestPart', false);
    using nameAttr = oc.TDataStd_Name.Set(mainLabel, nameStr);

    using retrieved = nameAttr.Get();
    expect(retrieved.IsEqual(nameStr)).toBe(true);
  });

  it('should create child labels under Main with incrementing tag numbers', () => {
    const oc = getOC();
    using tCollectionExtendedstring2 = new oc.TCollection_ExtendedString();
    using doc = new oc.TDocStd_Document(tCollectionExtendedstring2);
    using mainLabel = doc.Main();

    using child1 = mainLabel.FindChild(1, true);
    using child2 = mainLabel.FindChild(2, true);
    using child3 = mainLabel.FindChild(3, true);

    expect(child1.Tag()).toBe(1);
    expect(child2.Tag()).toBe(2);
    expect(child3.Tag()).toBe(3);
  });
});
