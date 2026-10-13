import { describe, it, expect } from 'vitest';
import { parseComment } from '../../components/api/parse-comment';

describe('parseComment', () => {
  it('should return empty parts for an empty / whitespace-only comment', () => {
    const empty = parseComment('');
    expect(empty.description).toBe('');
    expect(empty.params.size).toBe(0);
    expect(empty.returns).toBeNull();
    expect(empty.remarks).toBeNull();
    expect(empty.deprecated).toBeNull();
    expect(empty.see).toEqual([]);

    const wsOnly = parseComment('   \n\t  ');
    expect(wsOnly.description).toBe('');
  });

  it('should return everything as description when no tags are present', () => {
    const text = 'Tool for encoding/decoding base64 stream.';
    const out = parseComment(text);
    expect(out.description).toBe(text);
    expect(out.params.size).toBe(0);
    expect(out.returns).toBeNull();
  });

  it('should split description, @param entries, and @returns (real FSD_Base64.Encode comment)', () => {
    const text = [
      'Function encoding a buffer to base64 string.',
      '@param theEncodedStr the place for encoded string. Terminating null is not put. If it is NULL just return the needed size.',
      '@param theStrLen the length of the buffer theEncodedStr in bytes. This value must not be less than value returned when theEncodedStr is NULL.',
      '@param theData the input binary data.',
      '@param theDataLen the length of input data in bytes.',
      '@returns the length of the encoded string not including terminating null. If theStrLen is not enough for storing all data nothing is written and 0 is returned.',
    ].join('\n');

    const out = parseComment(text);
    expect(out.description).toBe('Function encoding a buffer to base64 string.');
    expect(out.params.get('theEncodedStr')).toMatch(/^the place for encoded string\./);
    expect(out.params.get('theStrLen')).toMatch(/^the length of the buffer theEncodedStr/);
    expect(out.params.get('theData')).toBe('the input binary data.');
    expect(out.params.get('theDataLen')).toBe('the length of input data in bytes.');
    expect(out.returns).toMatch(/^the length of the encoded string/);
  });

  it('should preserve {@link} markers inline within each section (handed off to ApiProse downstream)', () => {
    const text = [
      'Builds a face from {@link Geom_Surface}.',
      '@param S the surface',
      '@returns the resulting {@link TopoDS_Face}',
    ].join('\n');

    const out = parseComment(text);
    expect(out.description).toBe('Builds a face from {@link Geom_Surface}.');
    expect(out.params.get('S')).toBe('the surface');
    expect(out.returns).toBe('the resulting {@link TopoDS_Face}');
  });

  it('should capture @remarks, @deprecated, and multiple @see entries', () => {
    const text = [
      'Legacy entry point.',
      '@param x the legacy x',
      '@remarks Internal note about edge cases.',
      '@deprecated Use {@link Foo.bar} instead.',
      '@see Foo.bar',
      '@see Baz.qux',
    ].join('\n');

    const out = parseComment(text);
    expect(out.description).toBe('Legacy entry point.');
    expect(out.params.get('x')).toBe('the legacy x');
    expect(out.remarks).toBe('Internal note about edge cases.');
    expect(out.deprecated).toBe('Use {@link Foo.bar} instead.');
    expect(out.see).toEqual(['Foo.bar', 'Baz.qux']);
  });

  it('should treat @deprecated without a body as a marker (empty string, not null)', () => {
    const text = ['Old.', '@deprecated'].join('\n');
    const out = parseComment(text);
    expect(out.deprecated).toBe('');
  });

  it('should alias @return → @returns and @remark → @remarks and @Returns → @returns', () => {
    const out = parseComment('Body.\n@return r1\n@remark m1');
    expect(out.returns).toBe('r1');
    expect(out.remarks).toBe('m1');

    const out2 = parseComment('Body.\n@Returns capitalised');
    expect(out2.returns).toBe('capitalised');
  });

  it('should ignore @param-looking text inside the description body (only block-level tags trigger sections)', () => {
    const text = 'See @param notation for reference. The real description ends here.';
    const out = parseComment(text);
    expect(out.description).toBe(text);
    expect(out.params.size).toBe(0);
  });

  it('should tolerate leading-asterisk prose (older bindgen output)', () => {
    const text = [
      '* Tool for stream parsing.',
      ' * @param input the input stream',
      ' * @returns parsed result',
    ].join('\n');
    const out = parseComment(text);
    expect(out.description).toBe('* Tool for stream parsing.');
    expect(out.params.get('input')).toBe('the input stream');
    expect(out.returns).toBe('parsed result');
  });

  it('should skip @param entries with no name or malformed bodies without throwing', () => {
    const out = parseComment('Desc.\n@param\n@param   \n@param valid the description');
    expect(out.params.size).toBe(1);
    expect(out.params.get('valid')).toBe('the description');
  });
});
