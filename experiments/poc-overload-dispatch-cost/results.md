## Headline numbers

| Metric | Value | Notes |
| --- | --- | --- |
| M1  baseline direct call         | 276.1 ns/op | floor — embind invoker, no dispatcher |
| M1' patched  direct call         | 282.4 ns/op | per-call tax on every method |
| **H1 per-call tax (single overload)** | **6.3 ns/op (2.3% vs floor)** | M1' − M1 |
| M2  patched N=2 (target first)   | 413.7 ns/op | scan cost lower bound |
| M2  patched N=4 (target first)   | 435.6 ns/op | |
| M2  patched N=6 (target first)   | 433.1 ns/op | |
| M2  patched N=8 (target first)   | 442.0 ns/op | |
| M2h patched N=2 (target last)    | 503.5 ns/op | scan cost worst case |
| M2h patched N=4 (target last)    | 590.9 ns/op | |
| M2h patched N=6 (target last)    | 683.9 ns/op | |
| M2h patched N=8 (target last)    | 774.9 ns/op | |
| **H2 scan slope, target-first**  | **4.7 ns/op per extra overload** | (M2 N=8 − M2 N=2) / 6 |
| **H2 scan slope, target-last**   | **45.2 ns/op per extra overload** | worst case |
| M3  baseline JS-instanceof (first) | 303.7 ns/op | consumer escape hatch, best case |
| M3  baseline JS-instanceof (last)  | 393.3 ns/op | consumer escape hatch, worst case |
| M3' patched  JS-instanceof (first) | 324.1 ns/op | control — patched libembind, no same-name dispatch used |
| M3' patched  JS-instanceof (last)  | 403.8 ns/op | control |

## Birdhouse-equivalent workload (10× same-arity MakeEdge per iter)

| Metric | Value | Notes |
| --- | --- | --- |
| M4  patched corpus-A birdhouse 10 calls  | 4985 ns/iter | (498.5 ns/call avg) |
| M5  baseline corpus-B + JS-dispatch      | 3405 ns/iter | (340.5 ns/call avg) |
| M5d baseline corpus-B direct (floor)     | 2941 ns/iter | (294.1 ns/call avg) |
| **H3 patched vs JS-dispatch baseline**   | **1579 ns/iter (46.4%)** | M4 − M5 |
| **H3 patched vs direct floor**           | **2044 ns/iter (69.5%)** | M4 − M5d |

## Bundle and init

| Metric | Value | Notes |
| --- | --- | --- |
| baseline.mjs bytes               | 43075 | |
| patched.mjs  bytes               | 49668  | |
| **H5 bundle delta**              | **6593 bytes** | C1 mechanism contribution to glue (uncompressed) |
| baseline init time               | 4.85 ms | single cold sample |
| patched  init time               | 2.97 ms | single cold sample |

## Total dispatch overhead per birdhouse render

| Metric | Value | Notes |
| --- | --- | --- |
| Tax per same-arity call (avg)    | 264.3 ns | avg(M2 first, last) at N=6 minus direct floor |
| Tax per single-overload call     | 6.3 ns | M1' − M1 |
| Birdhouse call distribution      | 15× 1-arg same-arity + 4× 2-arg same-arity + 10× single-overload | from libs/tau-examples/.../birdhouse/main.ts |
| **Total dispatch overhead/render** | **5085 ns = 0.0051 ms** | additive over the C1 mechanism only |
| OCJS birdhouse render time       | 50–200 ms | bracket from build123d-vs-ocjs OCJS sample data |
| **% of wall time @ 50ms render**  | **0.0102%** | upper bound |
| **% of wall time @ 100ms render** | **0.0051%** | midpoint |
| **% of wall time @ 200ms render** | **0.0025%** | lower bound |

