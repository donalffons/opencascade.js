import { describe, it, expect } from 'vitest';
import { buildClassAnchorMap } from '../../components/api/types';
import type { ApiClass, ApiMethod, ApiProperty } from '../../components/api/types';

const method = (name: string): ApiMethod => ({
  name,
  signature: '',
  parameters: [],
  returnType: 'void',
  comment: '',
});

const property = (name: string): ApiProperty => ({ name, type: 'number', comment: '' });

const makeClass = (overrides: Partial<ApiClass>): ApiClass => ({
  name: 'X',
  kind: 'class',
  summary: '',
  extends: [],
  ancestors: [],
  constructors: [],
  staticMethods: [],
  instanceMethods: [],
  properties: [],
  ...overrides,
});

describe('buildClassAnchorMap — human-readable anchor scheme', () => {
  it('should build `<Class>-<Member>` anchors and leave unique tokens clean', () => {
    const cls = makeClass({
      name: 'Message_Report',
      instanceMethods: [method('GetAlerts'), method('AddLevel')],
      properties: [property('myStatus')],
    });
    const anchors = buildClassAnchorMap(cls);
    expect(anchors.get('inst:0')).toBe('Message_Report-GetAlerts');
    expect(anchors.get('inst:1')).toBe('Message_Report-AddLevel');
    expect(anchors.get('prop:0')).toBe('Message_Report-myStatus');
  });

  it('should preserve internal underscores (hyphen is the only level separator)', () => {
    const cls = makeClass({
      name: 'Message_Gravity',
      properties: [property('Message_Trace')],
    });
    expect(buildClassAnchorMap(cls).get('prop:0')).toBe('Message_Gravity-Message_Trace');
  });

  it('should 0-index overloaded members directly on the token', () => {
    const cls = makeClass({
      name: 'Message_Report',
      instanceMethods: [method('GetAlerts'), method('Clear'), method('Clear'), method('Clear')],
    });
    const anchors = buildClassAnchorMap(cls);
    expect(anchors.get('inst:0')).toBe('Message_Report-GetAlerts');
    expect(anchors.get('inst:1')).toBe('Message_Report-Clear0');
    expect(anchors.get('inst:2')).toBe('Message_Report-Clear1');
    expect(anchors.get('inst:3')).toBe('Message_Report-Clear2');
  });

  it('should use the `Constructor` token, 0-indexed when multiple constructors exist', () => {
    const single = makeClass({ name: 'gp_Pnt', constructors: [method('constructor')] });
    expect(buildClassAnchorMap(single).get('ctor:0')).toBe('gp_Pnt-Constructor');

    const many = makeClass({
      name: 'Message_ExecStatus',
      constructors: [method('constructor'), method('constructor')],
    });
    const anchors = buildClassAnchorMap(many);
    expect(anchors.get('ctor:0')).toBe('Message_ExecStatus-Constructor0');
    expect(anchors.get('ctor:1')).toBe('Message_ExecStatus-Constructor1');
  });

  it('should disambiguate a token shared across kinds (collision-free)', () => {
    const cls = makeClass({
      name: 'Foo',
      staticMethods: [method('Build')],
      instanceMethods: [method('Build')],
    });
    const anchors = buildClassAnchorMap(cls);
    expect(anchors.get('static:0')).toBe('Foo-Build0');
    expect(anchors.get('inst:0')).toBe('Foo-Build1');
    expect(new Set(anchors.values()).size).toBe(anchors.size);
  });

  it('should keep ordinals stable when an unrelated member is added', () => {
    const before = buildClassAnchorMap(
      makeClass({ name: 'Foo', instanceMethods: [method('Clear'), method('Clear')] }),
    );
    const after = buildClassAnchorMap(
      makeClass({
        name: 'Foo',
        instanceMethods: [method('Clear'), method('Clear')],
        properties: [property('unrelated')],
      }),
    );
    expect(after.get('inst:0')).toBe(before.get('inst:0'));
    expect(after.get('inst:1')).toBe(before.get('inst:1'));
    expect(after.get('inst:0')).toBe('Foo-Clear0');
    expect(after.get('inst:1')).toBe('Foo-Clear1');
  });
});
