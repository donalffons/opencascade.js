/**
 * Verifies accessors on handle-wrapped NCollection elements return the inner exported class.
 * Coverage spans Array1 and Sequence containers across geometry, document, and STEP types.
 */
import { describe, expectTypeOf, it } from 'vitest';
import type {
  Geom_Curve,
  NCollection_Array1_handle_Geom_Curve,
  NCollection_Array1_handle_StepBasic_Approval,
  NCollection_Sequence_handle_TDF_Attribute,
  StepBasic_Approval,
  TDF_Attribute,
} from '../dist/opencascade_single';

describe('R8.1 — NCollection_Array1<Handle<Geom_Curve>> accessors return Geom_Curve', () => {
  it('Value() returns Geom_Curve (was unknown)', () => {
    expectTypeOf<NCollection_Array1_handle_Geom_Curve['Value']>().returns.toEqualTypeOf<Geom_Curve>();
  });

  it('First() returns Geom_Curve (was unknown)', () => {
    expectTypeOf<NCollection_Array1_handle_Geom_Curve['First']>().returns.toEqualTypeOf<Geom_Curve>();
  });

  it('ChangeValue() returns Geom_Curve (was unknown)', () => {
    expectTypeOf<NCollection_Array1_handle_Geom_Curve['ChangeValue']>().returns.toEqualTypeOf<Geom_Curve>();
  });

  it('At() returns Geom_Curve (was unknown)', () => {
    expectTypeOf<NCollection_Array1_handle_Geom_Curve['At']>().returns.toEqualTypeOf<Geom_Curve>();
  });

  it('No accessor on NCollection_Array1<Handle<Geom_Curve>> resolves to unknown', () => {
    // `toEqualTypeOf<unknown>` is the exact-shape check for the failing
    // pre-R8.1 state. The `.not.` negation passes only when the return
    // type is strictly more specific than `unknown` — i.e. R8.1
    // peeled the handle.
    expectTypeOf<NCollection_Array1_handle_Geom_Curve['Value']>().returns.not.toEqualTypeOf<unknown>();
    expectTypeOf<NCollection_Array1_handle_Geom_Curve['First']>().returns.not.toEqualTypeOf<unknown>();
    expectTypeOf<NCollection_Array1_handle_Geom_Curve['Last']>().returns.not.toEqualTypeOf<unknown>();
    expectTypeOf<NCollection_Array1_handle_Geom_Curve['ChangeFirst']>().returns.not.toEqualTypeOf<unknown>();
    expectTypeOf<NCollection_Array1_handle_Geom_Curve['ChangeLast']>().returns.not.toEqualTypeOf<unknown>();
    expectTypeOf<NCollection_Array1_handle_Geom_Curve['ChangeAt']>().returns.not.toEqualTypeOf<unknown>();
  });
});

describe('R8.1 — NCollection_Sequence<Handle<TDF_Attribute>> proves Sequence carriers also work', () => {
  // The Sequence family uses a different internal representation than
  // Array1 (linked list rather than contiguous buffer) but shares the
  // member-typedef machinery R8 + R8.1 fix. Locking Sequence-side
  // accessors guards against R8.1 silently regressing on non-Array1
  // containers.
  it('Value(theIndex) returns TDF_Attribute (was unknown)', () => {
    expectTypeOf<NCollection_Sequence_handle_TDF_Attribute['Value']>().returns.toEqualTypeOf<TDF_Attribute>();
  });

  it('First() returns TDF_Attribute (was unknown)', () => {
    expectTypeOf<NCollection_Sequence_handle_TDF_Attribute['First']>().returns.toEqualTypeOf<TDF_Attribute>();
  });

  it('ChangeValue() returns TDF_Attribute (was unknown)', () => {
    expectTypeOf<NCollection_Sequence_handle_TDF_Attribute['ChangeValue']>().returns.toEqualTypeOf<TDF_Attribute>();
  });

  it('Sequence<Handle<TDF_Attribute>> accessors are never unknown', () => {
    expectTypeOf<NCollection_Sequence_handle_TDF_Attribute['Last']>().returns.not.toEqualTypeOf<unknown>();
    expectTypeOf<NCollection_Sequence_handle_TDF_Attribute['ChangeFirst']>().returns.not.toEqualTypeOf<unknown>();
    expectTypeOf<NCollection_Sequence_handle_TDF_Attribute['ChangeLast']>().returns.not.toEqualTypeOf<unknown>();
  });
});

describe('R8.1 — NCollection_Array1<Handle<StepBasic_Approval>> cross-checks STEP/DataExchange surface', () => {
  // `StepBasic_Approval` was one of the V2 Appendix A residual targets
  // explicitly called out as a handle-wrapped instantiation whose
  // accessors leaked `unknown`. Picking a STEP/DataExchange class also
  // verifies R8.1 fires uniformly across kernel modules (geometry,
  // document framework, exchange) rather than being scoped to one
  // include subtree.
  it('Value(theIndex) returns StepBasic_Approval (was unknown)', () => {
    expectTypeOf<NCollection_Array1_handle_StepBasic_Approval['Value']>().returns.toEqualTypeOf<StepBasic_Approval>();
  });

  it('First() returns StepBasic_Approval (was unknown)', () => {
    expectTypeOf<NCollection_Array1_handle_StepBasic_Approval['First']>().returns.toEqualTypeOf<StepBasic_Approval>();
  });

  it('NCollection_Array1<Handle<StepBasic_Approval>> accessors are never unknown', () => {
    expectTypeOf<NCollection_Array1_handle_StepBasic_Approval['ChangeValue']>().returns.not.toEqualTypeOf<unknown>();
    expectTypeOf<NCollection_Array1_handle_StepBasic_Approval['ChangeAt']>().returns.not.toEqualTypeOf<unknown>();
    expectTypeOf<NCollection_Array1_handle_StepBasic_Approval['Last']>().returns.not.toEqualTypeOf<unknown>();
  });
});
