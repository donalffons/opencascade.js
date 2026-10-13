const anchorToken = (kind, name) => (kind === 'ctor' ? 'Constructor' : name);

export const buildClassAnchorMap = (cls) => {
  const entries = [
    ...cls.constructors.map((_, index) => ({
      key: `ctor:${index}`,
      token: anchorToken('ctor', 'constructor'),
    })),
    ...cls.staticMethods.map((member, index) => ({
      key: `static:${index}`,
      token: anchorToken('static', member.name),
    })),
    ...cls.instanceMethods.map((member, index) => ({
      key: `inst:${index}`,
      token: anchorToken('inst', member.name),
    })),
    ...cls.properties.map((member, index) => ({
      key: `prop:${index}`,
      token: anchorToken('prop', member.name),
    })),
  ];

  const totalByToken = new Map();
  for (const entry of entries) {
    totalByToken.set(entry.token, (totalByToken.get(entry.token) ?? 0) + 1);
  }

  const ordinalByToken = new Map();
  const anchors = new Map();
  for (const entry of entries) {
    const ordinal = ordinalByToken.get(entry.token) ?? 0;
    ordinalByToken.set(entry.token, ordinal + 1);
    const suffix = (totalByToken.get(entry.token) ?? 1) > 1 ? ordinal : '';
    anchors.set(entry.key, `${cls.name}-${entry.token}${suffix}`);
  }
  return anchors;
};
