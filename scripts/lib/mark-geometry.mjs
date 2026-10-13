/**
 * The libcascade brandmark, built with libcascade.
 *
 * The mark is an offset family: a C profile of straight arms joined by two
 * fillets, offset outward twice. OCCT builds the profiles and reports their
 * exact curves, so the emitted SVG carries real arcs rather than sampled
 * polylines — the kernel this project ships draws its own logo.
 *
 * Both generators (`generate-logo.mjs`, `generate-banner.mjs`) read the mark
 * from here so a change to the geometry reaches every asset at once.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createInstance } from 'libcascade/single/init';

export const YELLOW = '#ffde00';
export const BLACK = '#323330';
export const BOX = 512;

/** Two bands sharing the span three used, so the silhouette never moved. */
const TOTAL_SPAN = 34 * 3 + 30 * 2;
const RATIO = 34 / 30;
const BAND = TOTAL_SPAN / (2 + 1 / RATIO);
const GAP = BAND / RATIO;

/** Inner and outer offset of each yellow band. */
export const BANDS = [
  [0, BAND],
  [BAND + GAP, BAND + GAP + BAND],
];

const oc = await createInstance();

/** The profile's extent at a given offset, which also fixes its terminals. */
const geometry = (offset) => ({
  halfHeight: 74 + offset,
  radius: Math.min(36 + offset, 74 + offset),
  backX: 150 - offset,
  endX: 330 + offset,
  top: 256 - (74 + offset),
  bottom: 256 + (74 + offset),
});

/**
 * One C profile as an OCCT wire: arm, fillet, back, fillet, arm. The corner
 * radius grows with the offset, which is what makes the family a true offset
 * rather than three separately drawn C's.
 */
const profileWire = (offset) => {
  const { radius, backX, endX, top, bottom } = geometry(offset);
  const point = (x, y) => new oc.gp_Pnt(x, y, 0);
  const wire = new oc.BRepBuilderAPI_MakeWire();
  const add = (maker) => {
    using made = maker;
    wire.Add(made.Edge());
  };
  /** Quarter arc through its own midpoint, so the sense is unambiguous. */
  const quarter = (from, mid, to) =>
    new oc.BRepBuilderAPI_MakeEdge(new oc.GC_MakeArcOfCircle(from, mid, to).Value());

  add(new oc.BRepBuilderAPI_MakeEdge(point(endX, top), point(backX + radius, top)));
  add(
    quarter(
      point(backX + radius, top),
      point(backX + radius - radius * Math.SQRT1_2, top + radius - radius * Math.SQRT1_2),
      point(backX, top + radius),
    ),
  );
  add(new oc.BRepBuilderAPI_MakeEdge(point(backX, top + radius), point(backX, bottom - radius)));
  add(
    quarter(
      point(backX, bottom - radius),
      point(backX + radius - radius * Math.SQRT1_2, bottom - radius + radius * Math.SQRT1_2),
      point(backX + radius, bottom),
    ),
  );
  add(new oc.BRepBuilderAPI_MakeEdge(point(backX + radius, bottom), point(endX, bottom)));

  return wire.Wire();
};

const round = (value) => Number(value.toFixed(3));

/**
 * A profile's edges in contour order.
 *
 * `TopExp_Explorer` yields edges in storage order, which is not the order they
 * connect in; `BRepTools_WireExplorer` follows the wire and reports the sense
 * each edge is used at, so a reversed edge is read end-first.
 */
const profileSegments = (offset) => {
  const explorer = new oc.BRepTools_WireExplorer(profileWire(offset));
  const segments = [];

  for (; explorer.More(); explorer.Next()) {
    const edge = explorer.Current();
    // v3 returns OCCT out-params as named fields, and hands back a
    // dereferenced curve rather than a handle.
    const { returnValue: curve, First, Last } = oc.BRep_Tool.Curve(edge, {}, {});
    const flipped = edge.Orientation() === oc.TopAbs_Orientation.TopAbs_REVERSED;
    const [from, to] = flipped ? [Last, First] : [First, Last];
    const at = (parameter) => {
      const p = curve.Value(parameter);
      return [round(p.X()), round(p.Y())];
    };

    segments.push(
      curve.constructor.name === 'Geom_Circle'
        ? { arc: true, radius: round(curve.Circ().Radius()), sweep: flipped ? 1 : 0, from: at(from), to: at(to) }
        : { arc: false, from: at(from), to: at(to) },
    );
  }

  return segments;
};

const draw = ({ arc, radius, sweep, to }) =>
  arc ? `A ${radius} ${radius} 0 0 ${sweep} ${to[0]} ${to[1]}` : `L ${to[0]} ${to[1]}`;

/** Walking a contour backwards swaps each segment's ends and its arc sense. */
const reversed = (segments) =>
  [...segments].reverse().map((segment) => ({
    ...segment,
    from: segment.to,
    to: segment.from,
    ...(segment.arc ? { sweep: segment.sweep === 1 ? 0 : 1 } : {}),
  }));

/**
 * One band as a single closed contour: out along the outer profile, across the
 * terminal, back along the inner profile, across the other terminal.
 *
 * The inner profile must be walked in reverse. Handing both profiles to
 * `MakeWire` and letting it sequence them produces a loop that crosses itself
 * and fills solid, so the reversal is done explicitly here.
 */
export const bandPath = ([innerOffset, outerOffset]) => {
  const outer = profileSegments(outerOffset);
  const inner = reversed(profileSegments(innerOffset));
  const start = outer[0].from;

  return [
    `M ${start[0]} ${start[1]}`,
    ...outer.map((segment) => draw(segment)),
    `L ${inner[0].from[0]} ${inner[0].from[1]}`,
    ...inner.map((segment) => draw(segment)),
    'Z',
  ].join(' ');
};

/**
 * Places the mark: centres it in a square of `size` at the given safe area, and
 * flips to SVG's y-down convention. The extent is analytic from the outermost
 * offset, so no tessellation is needed to measure it.
 */
export const markTransform = ({ size = BOX, safeArea = 0.66, offsetX = 0, offsetY = 0 } = {}) => {
  const outermost = BANDS.at(-1)[1];
  const { backX, endX, top, bottom } = geometry(outermost);
  const width = endX - backX;
  const height = bottom - top;
  const scale = (size * safeArea) / Math.max(width, height);
  const centre = [(backX + endX) / 2, (top + bottom) / 2];

  return {
    scale,
    width: width * scale,
    height: height * scale,
    transform: `translate(${offsetX + size / 2} ${offsetY + size / 2}) scale(${scale.toFixed(5)} ${(-scale).toFixed(5)}) translate(${-centre[0]} ${-centre[1]})`,
  };
};

/** The mark's bands as SVG paths, already inside their placement transform. */
export const markGroup = (options) =>
  `<g transform="${markTransform(options).transform}">${BANDS.map((band) => `<path fill="${YELLOW}" d="${bandPath(band)}"/>`).join('')}</g>`;

/** Rounded square, drawn with real arcs to match the mark's own construction. */
export const roundedRect = (x, y, width, height, radius) =>
  [
    `M ${x + radius} ${y}`,
    `L ${x + width - radius} ${y}`,
    `A ${radius} ${radius} 0 0 1 ${x + width} ${y + radius}`,
    `L ${x + width} ${y + height - radius}`,
    `A ${radius} ${radius} 0 0 1 ${x + width - radius} ${y + height}`,
    `L ${x + radius} ${y + height}`,
    `A ${radius} ${radius} 0 0 1 ${x} ${y + height - radius}`,
    `L ${x} ${y + radius}`,
    `A ${radius} ${radius} 0 0 1 ${x + radius} ${y}`,
    'Z',
  ].join(' ');

/** Writes generated assets, or verifies they have not drifted. */
export const emit = (targets, { check }) => {
  for (const [path, contents] of targets) {
    if (check) {
      if (readFileSync(path, 'utf8') !== contents) throw new Error(`Generated asset differs: ${path}`);
    } else {
      writeFileSync(path, contents);
    }
  }
};
