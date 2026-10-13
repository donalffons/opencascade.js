// Stub element types mirroring OCCT's most common payload shapes used as
// NCollection element/key/value types. Kept deliberately small so the POC
// focuses on the binding architecture, not on faithful OCCT semantics.
//
// Mirrors:
//   - gp_Pnt    -> Pnt3
//   - gp_Vec    -> Vec3
//   - TopoDS_Shape (opaque)        -> ShapeStub (id only)
//   - TCollection_AsciiString      -> OString (alias for std::string)
//   - opencascade::handle<T>       -> HandleStub<T> (refcounted)
//   - hash key for Map/IndexedMap  -> EdgeKey (struct + hash specialization)

#pragma once

#include <atomic>
#include <cstddef>
#include <cstdint>
#include <functional>
#include <string>

// ── Value-object element types ─────────────────────────────────────────

struct Pnt3 {
  double x{0.0}, y{0.0}, z{0.0};
  Pnt3() = default;
  Pnt3(double xv, double yv, double zv) : x(xv), y(yv), z(zv) {}
  double X() const { return x; }
  double Y() const { return y; }
  double Z() const { return z; }
  bool operator==(Pnt3 const& o) const { return x == o.x && y == o.y && z == o.z; }
};

struct Vec3 {
  double x{0.0}, y{0.0}, z{0.0};
  Vec3() = default;
  Vec3(double xv, double yv, double zv) : x(xv), y(yv), z(zv) {}
  bool operator==(Vec3 const& o) const { return x == o.x && y == o.y && z == o.z; }
};

// Opaque (large) shape stub — mirrors TopoDS_Shape's "id + flags" footprint.
struct ShapeStub {
  std::int64_t id{0};
  std::int32_t kind{0};
  std::int32_t flags{0};
  ShapeStub() = default;
  ShapeStub(std::int64_t i, std::int32_t k = 0, std::int32_t f = 0)
    : id(i), kind(k), flags(f) {}
  bool operator==(ShapeStub const& o) const { return id == o.id && kind == o.kind && flags == o.flags; }
};

using OString = std::string;

// EdgeKey — composite hashable key, mirrors TopTools_OrientedShapeMapHasher
// shape (a struct of two ids + an orientation tag).
struct EdgeKey {
  std::int64_t a{0};
  std::int64_t b{0};
  std::int32_t orientation{0};
  EdgeKey() = default;
  EdgeKey(std::int64_t aa, std::int64_t bb, std::int32_t o = 0)
    : a(aa), b(bb), orientation(o) {}
  bool operator==(EdgeKey const& o) const {
    return a == o.a && b == o.b && orientation == o.orientation;
  }
};

namespace std {
template <>
struct hash<EdgeKey> {
  std::size_t operator()(EdgeKey const& k) const noexcept {
    // FNV-ish mix; sufficient for the POC.
    std::size_t h = static_cast<std::size_t>(k.a) * 1469598103934665603ULL;
    h ^= static_cast<std::size_t>(k.b) + 0x9e3779b97f4a7c15ULL + (h << 6) + (h >> 2);
    h ^= static_cast<std::size_t>(k.orientation) + 0x9e3779b97f4a7c15ULL + (h << 6) + (h >> 2);
    return h;
  }
};
template <>
struct hash<ShapeStub> {
  std::size_t operator()(ShapeStub const& s) const noexcept {
    return std::hash<std::int64_t>{}(s.id) ^ (std::size_t(s.kind) << 17);
  }
};
}  // namespace std

// ── HandleStub<T> — mimics opencascade::handle<T> (refcounted smart ptr)

namespace ocstub {

struct Transient {
  // Refcount lives on the wrapped object so HandleStub can be copied without
  // breaking aliasing — same contract as opencascade::handle<T>.
  mutable std::atomic<std::int64_t> _refcount{0};
  virtual ~Transient() = default;
};

template <typename T>
class HandleStub {
public:
  HandleStub() noexcept : ptr_(nullptr) {}
  explicit HandleStub(T* p) noexcept : ptr_(p) {
    if (ptr_) ptr_->_refcount.fetch_add(1, std::memory_order_relaxed);
  }
  HandleStub(HandleStub const& o) noexcept : ptr_(o.ptr_) {
    if (ptr_) ptr_->_refcount.fetch_add(1, std::memory_order_relaxed);
  }
  HandleStub(HandleStub&& o) noexcept : ptr_(o.ptr_) { o.ptr_ = nullptr; }
  HandleStub& operator=(HandleStub const& o) noexcept {
    if (this == &o) return *this;
    release();
    ptr_ = o.ptr_;
    if (ptr_) ptr_->_refcount.fetch_add(1, std::memory_order_relaxed);
    return *this;
  }
  HandleStub& operator=(HandleStub&& o) noexcept {
    if (this == &o) return *this;
    release();
    ptr_ = o.ptr_;
    o.ptr_ = nullptr;
    return *this;
  }
  ~HandleStub() noexcept { release(); }

  T* get()              const noexcept { return ptr_; }
  T* operator->()       const noexcept { return ptr_; }
  T& operator*()        const noexcept { return *ptr_; }
  bool IsNull()         const noexcept { return ptr_ == nullptr; }
  std::int64_t UseCount() const noexcept {
    return ptr_ ? ptr_->_refcount.load(std::memory_order_relaxed) : 0;
  }

private:
  void release() noexcept {
    if (ptr_ && ptr_->_refcount.fetch_sub(1, std::memory_order_acq_rel) == 1) {
      delete ptr_;
    }
    ptr_ = nullptr;
  }
  T* ptr_;
};

}  // namespace ocstub
