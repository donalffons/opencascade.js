import 'server-only';
import type { ApiClass, ApiMethod, ApiProperty, ApiShard } from '../components/api/types';

const escapeMd = (value: string | undefined): string =>
  (value ?? '').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();

const renderMethod = (member: ApiMethod, kind: string): string => {
  const params = member.parameters
    .map((p) => `${p.rest ? '...' : ''}${p.name}${p.optional ? '?' : ''}: ${p.type}`)
    .join(', ');
  const lines: string[] = [];
  lines.push(`- **${member.name}** (${kind}) — \`(${params}): ${member.returnType}\``);
  if (member.comment) {
    lines.push(`  ${escapeMd(member.comment)}`);
  }
  return lines.join('\n');
};

const renderProperty = (prop: ApiProperty): string => {
  const lines: string[] = [];
  lines.push(`- **${prop.name}** — \`${prop.type}\`${prop.readonly ? ' (readonly)' : ''}`);
  if (prop.comment) {
    lines.push(`  ${escapeMd(prop.comment)}`);
  }
  return lines.join('\n');
};

const renderClass = (cls: ApiClass): string => {
  const out: string[] = [];
  out.push(`### ${cls.name}`);
  if (cls.extends.length > 0) {
    out.push(`*extends* ${cls.extends.map((t) => `\`${t}\``).join(', ')}`);
  }
  if (cls.summary) {
    out.push('', escapeMd(cls.summary));
  }
  if (cls.constructors.length > 0) {
    out.push('', `**Constructors**`, cls.constructors.map((m) => renderMethod(m, 'ctor')).join('\n'));
  }
  if (cls.staticMethods.length > 0) {
    out.push('', `**Static methods**`, cls.staticMethods.map((m) => renderMethod(m, 'static')).join('\n'));
  }
  if (cls.instanceMethods.length > 0) {
    out.push('', `**Instance methods**`, cls.instanceMethods.map((m) => renderMethod(m, 'instance')).join('\n'));
  }
  if (cls.properties.length > 0) {
    out.push('', `**Properties**`, cls.properties.map(renderProperty).join('\n'));
  }
  return out.join('\n');
};

/** Render a package shard as deterministic Markdown without MDX or React. */
export const shardToMarkdown = (shard: ApiShard, header: { title: string; url: string }): string => {
  const lines: string[] = [];
  lines.push(`# ${header.title}`);
  lines.push(`URL: ${header.url}`, '');
  lines.push(
    `Auto-generated reference for OCCT package **${header.title}** — ${shard.classes.length} bound ${shard.classes.length === 1 ? 'class' : 'classes'}.`,
  );
  if (shard.classes.length === 0) {
    lines.push('', '_No bound classes in this package._');
    return lines.join('\n');
  }
  for (const cls of shard.classes) {
    lines.push('', renderClass(cls));
  }
  return lines.join('\n');
};
