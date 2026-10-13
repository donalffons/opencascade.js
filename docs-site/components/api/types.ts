export { buildClassAnchorMap } from '../../scripts/lib/api-anchors.mjs';

export type ApiParameter = {
  readonly name: string;
  readonly type: string;
  readonly optional: boolean;
  readonly rest: boolean;
};

export type ApiMethod = {
  readonly name: string;
  readonly signature: string;
  readonly parameters: readonly ApiParameter[];
  readonly returnType: string;
  readonly comment: string;
};

export type ApiProperty = {
  readonly name: string;
  readonly type: string;
  readonly comment: string;
  readonly readonly?: boolean;
};

export type ApiClass = {
  readonly name: string;
  readonly kind: 'class' | 'interface';
  readonly summary: string;
  readonly extends: readonly string[];
  readonly ancestors: readonly string[] | Record<string, unknown>;
  readonly constructors: readonly ApiMethod[];
  readonly staticMethods: readonly ApiMethod[];
  readonly instanceMethods: readonly ApiMethod[];
  readonly properties: readonly ApiProperty[];
};

export type ApiShard = {
  readonly schema: number;
  readonly shard: string;
  readonly generatedAt: string;
  readonly classes: readonly ApiClass[];
};

export type ApiManifest = {
  readonly wasm_bytes?: number;
  readonly validation_passed?: boolean;
  readonly requested?: number;
  readonly compiled?: number;
  readonly built_at?: string;
};

export type ApiIndexPackage = {
  readonly name: string;
  readonly shard: string;
  readonly classes: ReadonlyArray<{
    readonly name: string;
    readonly kind: string;
    readonly extends: readonly string[];
    readonly summary: string;
    readonly members: { readonly constructors: number; readonly staticMethods: number; readonly instanceMethods: number; readonly properties: number };
  }>;
};

export type ApiIndexToolkit = {
  readonly name: string;
  readonly headline: string;
  readonly classCount: number;
  readonly packages: readonly ApiIndexPackage[];
};

export type ApiIndexModule = {
  readonly name: string;
  readonly headline: string;
  readonly classCount: number;
  readonly toolkitCount: number;
  readonly toolkits: readonly ApiIndexToolkit[];
};

export type ApiIndex = {
  readonly schema: number;
  readonly manifest: ApiManifest;
  readonly totals: {
    readonly modules: number;
    readonly toolkits: number;
    readonly packages: number;
    readonly classes: number;
    readonly searchEntries: number;
  };
  readonly quickLinks: ReadonlyArray<{
    readonly name: string;
    readonly kind: string;
    readonly p: string;
    readonly s: string;
  }>;
  readonly modules: readonly ApiIndexModule[];
  readonly searchIndex: ReadonlyArray<{
    readonly n: string;
    readonly k: string;
    readonly p: string;
    readonly s: string;
    readonly a: string;
    readonly q: string;
  }>;
};

export type ApiSearchEntry = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly tag: string;
  readonly structured: { contents: ReadonlyArray<{ heading: string; content: string }> };
};
