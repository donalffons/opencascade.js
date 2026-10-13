import type { DocEntry, GeneratedDoc, RawTag } from 'fumadocs-typescript';

type MdxJsxAttributeValueExpression = {
  type: 'mdxJsxAttributeValueExpression';
  value: string;
};

type MdxJsxAttributeShape = {
  type: 'mdxJsxAttribute';
  name: string;
  value: string | undefined | MdxJsxAttributeValueExpression;
};

type MdxJsxElementShape = {
  type: 'mdxJsxFlowElement' | 'mdxJsxTextElement';
  name: string | undefined;
  attributes: MdxJsxAttributeShape[];
};

const collapseWhitespace = (value: string): string => value.replaceAll(/\s+/g, ' ').trim();

const relaxMdxCurlyEscapes = (value: string): string => value.replaceAll(/\\([{}])/g, '$1');

const isMdxJsxAttributeShape = (value: unknown): value is MdxJsxAttributeShape => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const attribute = value as Record<string, unknown>;
  return attribute['type'] === 'mdxJsxAttribute' && typeof attribute['name'] === 'string';
};

const isMdxJsxElementShape = (value: unknown): value is MdxJsxElementShape => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const node = value as Record<string, unknown>;
  if (node['type'] !== 'mdxJsxFlowElement' && node['type'] !== 'mdxJsxTextElement') {
    return false;
  }
  if (typeof node['name'] !== 'string') {
    return false;
  }
  return Array.isArray(node['attributes']) && node['attributes'].every(isMdxJsxAttributeShape);
};

const isRawTag = (value: unknown): value is RawTag => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const tag = value as Record<string, unknown>;
  return typeof tag['name'] === 'string' && typeof tag['text'] === 'string';
};

const isDocumentEntry = (value: unknown): value is DocEntry => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const entry = value as Record<string, unknown>;
  if (typeof entry['name'] !== 'string') return false;
  if (typeof entry['description'] !== 'string') return false;
  if (typeof entry['type'] !== 'string') return false;
  if (typeof entry['simplifiedType'] !== 'string') return false;
  if (!Array.isArray(entry['tags']) || !entry['tags'].every(isRawTag)) return false;
  if (typeof entry['required'] !== 'boolean' || typeof entry['deprecated'] !== 'boolean') return false;
  if (entry['typeHref'] !== undefined && typeof entry['typeHref'] !== 'string') return false;
  return true;
};

const isGeneratedDocument = (value: unknown): value is GeneratedDoc => {
  if (typeof value !== 'object' || value === null) return false;
  const documentRecord = value as Record<string, unknown>;
  if (typeof documentRecord['id'] !== 'string' || typeof documentRecord['name'] !== 'string') return false;
  if (documentRecord['description'] !== undefined && typeof documentRecord['description'] !== 'string') return false;
  if (!Array.isArray(documentRecord['entries']) || !documentRecord['entries'].every(isDocumentEntry)) return false;
  return true;
};

const readAttributeString = (attribute: MdxJsxAttributeShape): string | undefined => {
  if (typeof attribute.value === 'string') return attribute.value;
  if (attribute.value?.type === 'mdxJsxAttributeValueExpression' && typeof attribute.value.value === 'string') {
    return attribute.value.value;
  }
  return undefined;
};

const readTypeAttributeJson = (node: MdxJsxElementShape): string | undefined => {
  for (const attribute of node.attributes) {
    if (attribute.name !== 'type') continue;
    const raw = readAttributeString(attribute);
    if (typeof raw === 'string' && raw.length > 0) return raw;
  }
  return undefined;
};

const readGeneratedDocument = (node: MdxJsxElementShape): GeneratedDoc | undefined => {
  const raw = readTypeAttributeJson(node);
  if (raw === undefined) return undefined;
  try {
    const parsed: unknown = JSON.parse(raw);
    return isGeneratedDocument(parsed) ? parsed : undefined;
  } catch {
    return undefined;
  }
};

const formatPropertyMeta = (entry: DocEntry): string => {
  const parts: string[] = [`\`${collapseWhitespace(entry.type)}\``];
  parts.push(entry.required ? 'required' : 'optional');
  const defaultTag = entry.tags.find((tag) => tag.name === 'default');
  if (defaultTag) {
    parts.push(`default \`${relaxMdxCurlyEscapes(defaultTag.text)}\``);
  }
  return `(${parts.join(', ')})`;
};

const formatPropertyDescription = (entry: DocEntry): string => {
  const paragraphs = entry.description
    .split(/\r?\n\r?\n+/u)
    .map((paragraph) => paragraph.replaceAll(/\r?\n/g, ' ').trim())
    .filter((paragraph) => paragraph.length > 0);
  if (paragraphs.length === 0) return '';
  const [first, ...rest] = paragraphs;
  const head = ` — ${first}`;
  const tail = rest.map((paragraph) => `\n\n  ${paragraph}`).join('');
  return head + tail;
};

const formatPropertyBullet = (entry: DocEntry): string => {
  const name = entry.deprecated ? `~~\`${entry.name}\`~~` : `\`${entry.name}\``;
  const meta = formatPropertyMeta(entry);
  const description = formatPropertyDescription(entry);
  const otherTags = entry.tags.filter((tag) => tag.name !== 'default');
  const tagLine =
    otherTags.length > 0
      ? `\n\n  Tags: ${otherTags
          .map((tag) => (tag.text.length > 0 ? `@${tag.name} ${collapseWhitespace(tag.text)}` : `@${tag.name}`))
          .join(', ')}`
      : '';
  return `- **${name}** ${meta}${description}${tagLine}`;
};

const renderTypeAsPropertyList = (generatedDocument: GeneratedDoc): string => {
  const headerLine: string[] = [`**\`${generatedDocument.name}\`**`];
  if (generatedDocument.description && generatedDocument.description.length > 0) {
    const oneLine = collapseWhitespace(generatedDocument.description);
    if (oneLine.length > 0) headerLine.push(` — ${oneLine}`);
  }
  const sections: string[] = [headerLine.join('')];
  if (generatedDocument.entries.length === 0) {
    sections.push('_No properties._');
    return sections.join('\n\n');
  }
  sections.push(generatedDocument.entries.map(formatPropertyBullet).join('\n'));
  return sections.join('\n\n');
};

const stringifyTypeTable = (node: MdxJsxElementShape): string | undefined => {
  const generatedDocument = readGeneratedDocument(node);
  if (generatedDocument === undefined) return undefined;
  return renderTypeAsPropertyList(generatedDocument);
};

const stringifyMermaid = (node: MdxJsxElementShape): string | undefined => {
  const chart = node.attributes.find((attribute) => attribute.name === 'chart');
  const value = chart ? readAttributeString(chart) : undefined;
  if (value === undefined || value.length === 0) return undefined;
  return `\`\`\`mermaid\n${value.trim()}\n\`\`\``;
};

/**
 * MDAST stringifier hook for Fumadocs `includeProcessedMarkdown`.
 * Renders `<TypeTable>` as a CommonMark prop-bullet list (no GFM tables / `<br>`) and
 * `<Mermaid>` as a fenced mermaid code block. Returns `undefined` for all other nodes
 * so the default stringifier runs unchanged.
 */
export const llmStringifyMdx = (...stringifyArguments: readonly unknown[]): string | undefined => {
  const [maybeNode] = stringifyArguments;
  if (!isMdxJsxElementShape(maybeNode)) return undefined;
  switch (maybeNode.name) {
    case 'TypeTable':
      return stringifyTypeTable(maybeNode);
    case 'Mermaid':
      return stringifyMermaid(maybeNode);
    default:
      return undefined;
  }
};
