export type AnchorClass = {
  readonly name: string;
  readonly constructors: readonly unknown[];
  readonly staticMethods: ReadonlyArray<{ readonly name: string }>;
  readonly instanceMethods: ReadonlyArray<{ readonly name: string }>;
  readonly properties: ReadonlyArray<{ readonly name: string }>;
};

export const buildClassAnchorMap: (cls: AnchorClass) => ReadonlyMap<string, string>;
