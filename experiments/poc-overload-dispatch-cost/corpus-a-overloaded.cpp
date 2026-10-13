// Corpus A — same-name same-arity registrations.
//
// All N EdgeMaker(...) 1-arg constructors register under the same JS-side
// name. Compiling this against pristine upstream embind throws at module
// init (libembind detects duplicate-arity ctor registration and refuses);
// the OCJS-patched libembind installs a getSignature-based dispatcher
// instead.
//
// CORPUS_A_N ∈ {2, 4, 6, 8} drives the M2 scan-cost matrix. The set of
// registered ctors is monotonic in N, so an N=8 dispatcher walks a
// superset of the N=2 dispatcher's signaturesArray.

#include <emscripten/bind.h>
#include "mock-occt.hpp"

#ifndef CORPUS_A_N
#define CORPUS_A_N 6
#endif

using namespace emscripten;

EMSCRIPTEN_BINDINGS(corpus_a) {
  class_<gp_Lin>("gp_Lin").constructor<double>().property("a", &gp_Lin::a);
  class_<gp_Circ>("gp_Circ").constructor<double>().property("a", &gp_Circ::a);
#if CORPUS_A_N >= 4
  class_<gp_Elips>("gp_Elips").constructor<double>().property("a", &gp_Elips::a);
  class_<gp_Hypr>("gp_Hypr").constructor<double>().property("a", &gp_Hypr::a);
#endif
#if CORPUS_A_N >= 6
  class_<gp_Parab>("gp_Parab").constructor<double>().property("a", &gp_Parab::a);
  class_<Geom_Curve>("Geom_Curve").constructor<double>().property("a", &Geom_Curve::a);
#endif
#if CORPUS_A_N >= 8
  class_<Geom2d_Curve>("Geom2d_Curve").constructor<double>().property("a", &Geom2d_Curve::a);
  class_<Adaptor3d_Curve>("Adaptor3d_Curve").constructor<double>().property("a", &Adaptor3d_Curve::a);
#endif

  class_<EdgeMaker> em("EdgeMaker");
  em.constructor<>().property("routed", &EdgeMaker::routed);
  em.constructor<const gp_Lin&>();
  em.constructor<const gp_Circ&>();
#if CORPUS_A_N >= 4
  em.constructor<const gp_Elips&>();
  em.constructor<const gp_Hypr&>();
#endif
#if CORPUS_A_N >= 6
  em.constructor<const gp_Parab&>();
  em.constructor<const Geom_Curve&>();
#endif
#if CORPUS_A_N >= 8
  em.constructor<const Geom2d_Curve&>();
  em.constructor<const Adaptor3d_Curve&>();
#endif
}
