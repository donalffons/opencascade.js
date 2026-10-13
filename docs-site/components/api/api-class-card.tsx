import { Fragment } from 'react';
import type { ReactNode } from 'react';
import { ApiSignature } from './api-signature';
import { ApiInheritanceChip } from './api-inheritance-chip';
import { ApiProse } from './api-prose';
import { ApiTypeLink } from './api-type-link';
import { ApiAnchor } from './api-anchor';
import { parseComment, type ParsedComment } from './parse-comment';
import { buildClassAnchorMap } from './types';
import type { ApiClass, ApiMethod, ApiProperty } from './types';

const IDENT_RE = /([A-Za-z_]\w*)/g;

/**
 * Same renderer as `ApiSignature.renderTypeTokens` but inlined so property
 * rows can linkify their type strings without depending on the signature
 * module. Punctuation gets the muted foreground; the identifier itself runs
 * through `ApiTypeLink` (keywords take the keyword hue, types take the type
 * hue), matching VSCode's default TypeScript semantic highlighting.
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

const isOverload = (arr: readonly ApiMethod[], i: number): boolean => {
  const name = arr[i]?.name;
  if (!name) return false;
  const before = i > 0 && arr[i - 1]?.name === name;
  const after = i < arr.length - 1 && arr[i + 1]?.name === name;
  return before || after;
};

const collectChain = (cls: ApiClass): string[] => {
  const seen = new Set<string>();
  const out: string[] = [];
  const push = (t: string | undefined): void => {
    if (!t) return;
    const norm = t.trim();
    if (!norm || seen.has(norm)) return;
    seen.add(norm);
    out.push(norm);
  };
  for (const t of cls.extends ?? []) push(t);
  const anc = cls.ancestors;
  if (Array.isArray(anc)) {
    for (const a of anc) push(typeof a === 'string' ? a : undefined);
  } else if (anc && typeof anc === 'object') {
    for (const key of Object.keys(anc)) push(key);
  }
  return out;
};

/**
 * Member names that are TypeScript keywords (rather than identifiers) take
 * the keyword hue; every other member name is a plain identifier and renders
 * in the foreground colour — matching VSCode's semantic highlighting, where
 * `constructor`/`new` are keywords but method/property names are not.
 */
const KEYWORD_MEMBER_NAMES = new Set(['constructor', 'new']);

const memberNameClass = (name: string): string =>
  KEYWORD_MEMBER_NAMES.has(name) ? 'text-api-keyword' : 'text-fd-foreground';

const DefList = ({
  label,
  children,
}: {
  readonly label: string;
  readonly children: ReactNode;
}): ReactNode => (
  <div className="mt-2 grid grid-cols-[max-content_minmax(0,1fr)] gap-x-3 gap-y-1 text-xs">
    <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-fd-muted-foreground">
      {label}
    </div>
    <div>{children}</div>
  </div>
);

const ParametersList = ({
  parameters,
  parsed,
}: {
  readonly parameters: readonly ApiMethod['parameters'][number][];
  readonly parsed: ParsedComment;
}): ReactNode => {
  if (parameters.length === 0) return undefined;
  return (
    <DefList label={`Parameters (${parameters.length})`}>
      <ul className="space-y-1">
        {parameters.map((p) => {
          const description = parsed.params.get(p.name);
          return (
            <li key={p.name} className="leading-relaxed">
              <code className="font-mono text-fd-foreground">{p.name}</code>
              {description ? (
                <>
                  <span className="text-fd-muted-foreground"> — </span>
                  <ApiProse inline text={description} className="inline text-fd-muted-foreground" />
                </>
              ) : undefined}
            </li>
          );
        })}
      </ul>
    </DefList>
  );
};

const ReturnsBlock = ({
  returnType,
  text,
}: {
  readonly returnType: string;
  readonly text: string | null;
}): ReactNode => {
  if (!text && (returnType === 'void' || returnType === 'undefined')) return undefined;
  if (!text) return undefined;
  return (
    <DefList label="Returns">
      <ApiProse text={text} className="text-fd-muted-foreground" />
    </DefList>
  );
};

const RemarksBlock = ({ text }: { readonly text: string | null }): ReactNode => {
  if (!text) return undefined;
  return (
    <DefList label="Remarks">
      <ApiProse text={text} className="text-fd-muted-foreground" />
    </DefList>
  );
};

const SeeBlock = ({ items }: { readonly items: readonly string[] }): ReactNode => {
  if (items.length === 0) return undefined;
  return (
    <DefList label="See also">
      <ul className="space-y-0.5">
        {items.map((entry, idx) => (
          <li key={`see-${idx}`} className="leading-relaxed">
            <ApiProse inline text={entry} className="inline text-fd-muted-foreground" />
          </li>
        ))}
      </ul>
    </DefList>
  );
};

const DeprecatedBanner = ({ text }: { readonly text: string | null }): ReactNode => {
  if (text === null) return undefined;
  return (
    <div className="mt-2 flex items-baseline gap-2 rounded-md border border-amber-700/30 bg-amber-500/5 px-2.5 py-1.5 text-xs dark:border-amber-300/30">
      <span className="rounded bg-amber-700/15 px-1.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-amber-800 dark:bg-amber-300/15 dark:text-amber-200">
        Deprecated
      </span>
      {text ? (
        <ApiProse inline text={text} className="inline text-amber-900/80 dark:text-amber-100/80" />
      ) : undefined}
    </div>
  );
};

const renderMemberRow = (
  anchorId: string,
  arr: readonly ApiMethod[],
  i: number,
): ReactNode => {
  const member = arr[i]!;
  const overload = isOverload(arr, i);
  const parsed = parseComment(member.comment);
  const isDeprecated = parsed.deprecated !== null;
  return (
    <li
      key={anchorId}
      id={anchorId}
      className={`group scroll-mt-24 rounded-md border px-3 py-2.5 transition-colors hover:border-fd-border ${
        overload ? 'border-dashed border-fd-border/40' : 'border-fd-border/40'
      }`}
    >
      <div className="flex flex-wrap items-baseline gap-x-1 gap-y-1 font-mono text-sm">
        <a
          href={`#${anchorId}`}
          className={`font-semibold no-underline decoration-fd-muted-foreground/50 underline-offset-4 hover:underline ${memberNameClass(member.name)} ${
            isDeprecated ? 'line-through decoration-amber-700/50 decoration-1' : ''
          }`}
        >
          {member.name}
        </a>
        <ApiAnchor anchorId={anchorId} label={member.name} />
        <ApiSignature method={member} />
      </div>
      {parsed.description ? (
        <div className="mt-1.5 text-xs text-fd-foreground/80">
          <ApiProse text={parsed.description} />
        </div>
      ) : undefined}
      <DeprecatedBanner text={parsed.deprecated} />
      <ParametersList parameters={member.parameters ?? []} parsed={parsed} />
      <ReturnsBlock returnType={member.returnType ?? 'void'} text={parsed.returns} />
      <RemarksBlock text={parsed.remarks} />
      <SeeBlock items={parsed.see} />
    </li>
  );
};

const renderPropertyRow = (
  anchorId: string,
  arr: readonly ApiProperty[],
  i: number,
): ReactNode => {
  const prop = arr[i]!;
  const parsed = parseComment(prop.comment);
  const isDeprecated = parsed.deprecated !== null;
  return (
    <li
      key={anchorId}
      id={anchorId}
      className="group scroll-mt-24 rounded-md border border-fd-border/40 px-3 py-2.5 transition-colors hover:border-fd-border"
    >
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-sm">
        <a
          href={`#${anchorId}`}
          className={`font-semibold no-underline decoration-fd-muted-foreground/50 underline-offset-4 hover:underline ${memberNameClass(prop.name)} ${
            isDeprecated ? 'line-through decoration-amber-700/50 decoration-1' : ''
          }`}
        >
          {prop.name}
        </a>
        <ApiAnchor anchorId={anchorId} label={prop.name} />
        <span className="text-fd-muted-foreground">:</span>
        <span className="font-mono text-sm">{renderTypeTokens(prop.type)}</span>
        {prop.readonly ? (
          <span className="ml-1 rounded bg-fd-muted/50 px-1.5 py-0.5 text-[0.6875rem] font-medium text-fd-muted-foreground">
            readonly
          </span>
        ) : undefined}
      </div>
      {parsed.description ? (
        <div className="mt-1.5 text-xs text-fd-foreground/80">
          <ApiProse text={parsed.description} />
        </div>
      ) : undefined}
      <DeprecatedBanner text={parsed.deprecated} />
      <RemarksBlock text={parsed.remarks} />
      <SeeBlock items={parsed.see} />
    </li>
  );
};

const Section = ({
  title,
  count,
  children,
}: {
  readonly title: string;
  readonly count: number;
  readonly children: ReactNode;
}): ReactNode => (
  <section className="mt-5">
    <h4 className="mb-2 flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-fd-muted-foreground">
      <span>{title}</span>
      <span className="tabular-nums opacity-70">({count})</span>
    </h4>
    <ul className="space-y-2">{children}</ul>
  </section>
);

export type ApiClassCardProps = {
  readonly cls: ApiClass;
};

/**
 * Render one OCCT class with constructor, method, and property sections.
 * Parsed member documentation receives dedicated parameter, return, remark,
 * and reference blocks. Overloads share visual grouping and deterministic
 * anchors from `buildClassAnchorMap`.
 */
export const ApiClassCard = ({ cls }: ApiClassCardProps): ReactNode => {
  const chain = collectChain(cls);
  const classDoc = parseComment(cls.summary);
  const anchors = buildClassAnchorMap(cls);
  return (
    <article
      id={cls.name}
      className="not-prose scroll-mt-24 rounded-xl border border-fd-border bg-fd-card p-5 shadow-sm"
    >
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="group flex items-baseline font-mono text-lg font-semibold tracking-tight text-fd-foreground">
          <a
            href={`#${cls.name}`}
            className="text-fd-foreground no-underline decoration-fd-muted-foreground/50 underline-offset-4 hover:underline"
          >
            {cls.name}
          </a>
          <ApiAnchor anchorId={cls.name} label={cls.name} />
        </h3>
        {chain.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {chain.map((t) => (
              <Fragment key={t}>
                <ApiInheritanceChip type={t} />
              </Fragment>
            ))}
          </div>
        ) : undefined}
      </header>

      {classDoc.description ? (
        <div className="mt-2.5 text-sm text-fd-muted-foreground">
          <ApiProse text={classDoc.description} />
        </div>
      ) : undefined}

      {cls.constructors.length > 0 ? (
        <Section title="Constructors" count={cls.constructors.length}>
          {cls.constructors.map((_, i) => renderMemberRow(anchors.get(`ctor:${i}`)!, cls.constructors, i))}
        </Section>
      ) : undefined}

      {cls.staticMethods.length > 0 ? (
        <Section title="Static methods" count={cls.staticMethods.length}>
          {cls.staticMethods.map((_, i) => renderMemberRow(anchors.get(`static:${i}`)!, cls.staticMethods, i))}
        </Section>
      ) : undefined}

      {cls.instanceMethods.length > 0 ? (
        <Section title="Instance methods" count={cls.instanceMethods.length}>
          {cls.instanceMethods.map((_, i) => renderMemberRow(anchors.get(`inst:${i}`)!, cls.instanceMethods, i))}
        </Section>
      ) : undefined}

      {cls.properties.length > 0 ? (
        <Section title="Properties" count={cls.properties.length}>
          {cls.properties.map((_, i) => renderPropertyRow(anchors.get(`prop:${i}`)!, cls.properties, i))}
        </Section>
      ) : undefined}
    </article>
  );
};
