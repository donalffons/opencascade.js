---
ocjs: minor
---

`delete()` and `using` now free the C++ object for every class. Previously about 2,100 classes, including `gp_*`, `TopoDS_Shape`, every `BRep*API` builder and the `NCollection_*` containers, were bound with an empty destructor, so their memory was never released. ([#40](https://github.com/taucad/opencascade.js/issues/40))

Handles returned as raw pointers (for example `BRepAlgoAPI_Cut.Builder()`, map `Seek()` results, or `ExtremaPC_*.Perform()` results) are now borrowed: deleting one releases the JS handle without freeing memory its owner still uses. Previously some of these freed memory the owning object went on to use or free again.

**Upgrade note:** since `delete()` now frees memory, a handle must not be deleted while another OCCT object still uses it, and a handle to an object you deleted must not be used. For example, keep a curve adaptor alive while an `Extrema_*` object that was built from it is still in use, since the extrema object keeps a reference to the adaptor. Code that called `Clear()` before `delete()` as a leak workaround can drop that call.
