import { Fragment } from 'react';
import type { ReactNode } from 'react';
import { ApiTypeLink } from './api-type-link';
import type { ApiMethod, ApiParameter } from './types';

const IDENT_RE = /([A-Za-z_]\w*)/g;

/**
 * Splits a raw type string into linkified tokens. Identifiers run through
 * `ApiTypeLink` (keywords take the keyword hue, types take the type hue);
 * everything else (punctuation, generics, whitespace) is preserved verbatim
 * and tinted with the muted foreground, matching VSCode's treatment of
 * punctuation in a type annotation.
 */
const renderTypeTokens = (raw: string): ReactNode[] => {
  const out: ReactNode[] = [];
  let cursor = 0;
  for (const match of raw.matchAll(IDENT_RE)) {
    if (match.index === undefined) continue;
    if (match.index > cursor) {
      out.push(
        <span key={`t-${cursor}`} className="text-fd-muted-foreground">
          {raw.slice(cursor, match.index)}
        </span>,
      );
    }
    out.push(<ApiTypeLink key={`l-${match.index}`} name={match[1]!} />);
    cursor = match.index + match[0].length;
  }
  if (cursor < raw.length) {
    out.push(
      <span key={`t-${cursor}`} className="text-fd-muted-foreground">
        {raw.slice(cursor)}
      </span>,
    );
  }
  return out;
};

const renderParameter = (param: ApiParameter, idx: number): ReactNode => {
  const prefix = param.rest ? '...' : '';
  const opt = param.optional ? '?' : '';
  return (
    <span key={`p-${idx}-${param.name}`} className="whitespace-nowrap">
      {prefix ? <span className="text-fd-muted-foreground">{prefix}</span> : undefined}
      <span className="text-fd-foreground">{param.name}</span>
      {opt ? <span className="text-fd-muted-foreground">{opt}</span> : undefined}
      <span className="text-fd-muted-foreground">: </span>
      {renderTypeTokens(param.type)}
    </span>
  );
};

export type ApiSignatureProps = {
  readonly method: ApiMethod;
};

/**
 * Overload-aware signature renderer. Tokens are coloured to match VSCode's
 * default TypeScript semantic highlighting:
 *
 *   keyword        magenta     (keywords, via `ApiTypeLink`)
 *   type / class   teal        (OCCT class identifiers, primitive types)
 *   variable       foreground  (parameter names)
 *   punctuation    muted       (brackets, `:`, `,`, `?`, `...`, separators)
 */
export const ApiSignature = ({ method }: ApiSignatureProps): ReactNode => {
  const params = (method.parameters ?? []).map(renderParameter);
  const ret = method.returnType ?? 'void';
  return (
    <span className="font-mono text-sm">
      <span className="text-fd-muted-foreground">(</span>
      {params.map((node, idx) => (
        <Fragment key={`p-${idx}`}>
          {idx > 0 ? <span className="text-fd-muted-foreground">, </span> : undefined}
          {node}
        </Fragment>
      ))}
      <span className="text-fd-muted-foreground">)</span>
      <span className="text-fd-muted-foreground">: </span>
      {renderTypeTokens(ret)}
    </span>
  );
};
