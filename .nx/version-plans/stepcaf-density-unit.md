---
ocjs: patch
---

Write STEP material densities in gram per cubic centimetre. OCCT's STEPCAF writer labelled the density unit as g³·cm², so other CAD tools read the wrong unit; libcascade now patches the two unit exponents to g·cm⁻³.
