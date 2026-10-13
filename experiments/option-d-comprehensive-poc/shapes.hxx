// Stub NCollection container shapes mirroring OCCT's public surface enough
// to drive Strategy A (one class_<> per permutation) and Strategy D (per-API
// adapter + register_type). Each container preserves the `reference` /
// `const_reference` / `value_type` member typedefs that triggered audit V2's
// R8 recommendation, so the POC exercises the same resolver paths.

#pragma once

#include "element-types.hxx"

#include <cstddef>
#include <list>
#include <unordered_map>
#include <unordered_set>
#include <utility>
#include <vector>

// ── Sequence-shaped containers ─────────────────────────────────────────

template <typename TheItemType>
class NCollection_Array1_Stub {
public:
  using value_type      = TheItemType;
  using reference       = TheItemType&;
  using const_reference = const TheItemType&;

  NCollection_Array1_Stub() : lower_(0), upper_(-1) {}
  NCollection_Array1_Stub(int lower, int upper)
    : lower_(lower), upper_(upper),
      data_(static_cast<std::size_t>(upper - lower + 1)) {}

  int  Lower()  const { return lower_; }
  int  Upper()  const { return upper_; }
  int  Length() const { return upper_ - lower_ + 1; }
  bool IsEmpty() const { return data_.empty(); }

  const_reference Value(int i)        const { return data_[idx(i)]; }
  reference       ChangeValue(int i)        { return data_[idx(i)]; }
  void            SetValue(int i, const TheItemType& v) { data_[idx(i)] = v; }

  // Raw pointer accessor enables the typed_memory_view fast-path. OCCT
  // exposes this via `&Array1.First()` semantics; we model it directly.
  TheItemType*       data()       { return data_.data(); }
  TheItemType const* data() const { return data_.data(); }

private:
  std::size_t idx(int i) const { return static_cast<std::size_t>(i - lower_); }
  int lower_;
  int upper_;
  std::vector<TheItemType> data_;
};

template <typename TheItemType>
class NCollection_Array2_Stub {
public:
  using value_type      = TheItemType;
  using reference       = TheItemType&;
  using const_reference = const TheItemType&;

  NCollection_Array2_Stub(int rl, int ru, int cl, int cu)
    : rl_(rl), ru_(ru), cl_(cl), cu_(cu),
      data_(static_cast<std::size_t>((ru - rl + 1) * (cu - cl + 1))) {}

  int LowerRow() const { return rl_; }
  int UpperRow() const { return ru_; }
  int LowerCol() const { return cl_; }
  int UpperCol() const { return cu_; }
  int NbRows()   const { return ru_ - rl_ + 1; }
  int NbCols()   const { return cu_ - cl_ + 1; }

  const_reference Value(int r, int c)        const { return data_[idx(r, c)]; }
  reference       ChangeValue(int r, int c)        { return data_[idx(r, c)]; }
  void            SetValue(int r, int c, const TheItemType& v) { data_[idx(r, c)] = v; }

  TheItemType*       data()       { return data_.data(); }
  TheItemType const* data() const { return data_.data(); }

private:
  std::size_t idx(int r, int c) const {
    return static_cast<std::size_t>((r - rl_) * NbCols() + (c - cl_));
  }
  int rl_, ru_, cl_, cu_;
  std::vector<TheItemType> data_;
};

template <typename TheItemType>
class NCollection_DynamicArray_Stub {
public:
  using value_type      = TheItemType;
  using reference       = TheItemType&;
  using const_reference = const TheItemType&;

  void            Append(const TheItemType& v) { data_.push_back(v); }
  reference       Appended()                   { return data_.back(); }
  std::size_t     Size()  const                { return data_.size(); }
  std::size_t     Length() const               { return data_.size(); }
  const_reference Value(std::size_t i)  const  { return data_[i]; }
  reference       ChangeValue(std::size_t i)   { return data_[i]; }
  void            Clear()                      { data_.clear(); }

  TheItemType*       data()       { return data_.data(); }
  TheItemType const* data() const { return data_.data(); }

private:
  std::vector<TheItemType> data_;
};

template <typename TheItemType>
class NCollection_Sequence_Stub {
public:
  using value_type      = TheItemType;
  using reference       = TheItemType&;
  using const_reference = const TheItemType&;

  void            Append(const TheItemType& v)  { data_.push_back(v); }
  void            Prepend(const TheItemType& v) { data_.insert(data_.begin(), v); }
  std::size_t     Length() const                { return data_.size(); }
  bool            IsEmpty() const               { return data_.empty(); }
  const_reference First() const                 { return data_.front(); }
  const_reference Last()  const                 { return data_.back(); }
  // OCCT NCollection_Sequence is 1-based.
  const_reference Value(int i)        const     { return data_[static_cast<std::size_t>(i - 1)]; }
  reference       ChangeValue(int i)             { return data_[static_cast<std::size_t>(i - 1)]; }

  // For iteration in adapters (sequence is contiguous internally for the
  // POC; OCCT's true Sequence is a linked-block list).
  auto begin() const { return data_.begin(); }
  auto end()   const { return data_.end(); }

private:
  std::vector<TheItemType> data_;
};

template <typename TheItemType>
class NCollection_List_Stub {
public:
  using value_type      = TheItemType;
  using reference       = TheItemType&;
  using const_reference = const TheItemType&;

  void            Append(const TheItemType& v)  { data_.push_back(v); }
  void            Prepend(const TheItemType& v) { data_.push_front(v); }
  std::size_t     Extent() const                { return data_.size(); }
  bool            IsEmpty() const               { return data_.empty(); }
  const_reference First() const                 { return data_.front(); }
  const_reference Last()  const                 { return data_.back(); }

  auto begin() const { return data_.begin(); }
  auto end()   const { return data_.end(); }

private:
  std::list<TheItemType> data_;
};

// ── Map-shaped containers ──────────────────────────────────────────────

template <typename TheKeyType, typename Hasher = std::hash<TheKeyType>>
class NCollection_Map_Stub {
public:
  using value_type      = TheKeyType;
  using reference       = TheKeyType&;
  using const_reference = const TheKeyType&;

  bool        Add(const TheKeyType& k) { return data_.insert(k).second; }
  bool        Contains(const TheKeyType& k) const { return data_.count(k) != 0; }
  bool        Remove(const TheKeyType& k) { return data_.erase(k) != 0; }
  std::size_t Extent() const { return data_.size(); }
  bool        IsEmpty() const { return data_.empty(); }

  auto begin() const { return data_.begin(); }
  auto end()   const { return data_.end(); }

private:
  std::unordered_set<TheKeyType, Hasher> data_;
};

template <typename TheKeyType, typename TheItemType, typename Hasher = std::hash<TheKeyType>>
class NCollection_DataMap_Stub {
public:
  using value_type      = TheItemType;
  using reference       = TheItemType&;
  using const_reference = const TheItemType&;

  bool Bind(const TheKeyType& k, const TheItemType& v) {
    auto [_, inserted] = data_.insert_or_assign(k, v);
    return inserted;
  }
  bool        IsBound(const TheKeyType& k) const { return data_.count(k) != 0; }
  bool        UnBind(const TheKeyType& k)        { return data_.erase(k) != 0; }
  std::size_t Extent() const { return data_.size(); }

  // Throws if missing — matches OCCT contract.
  const_reference Find(const TheKeyType& k) const { return data_.at(k); }
  reference       ChangeFind(const TheKeyType& k) { return data_.at(k); }

  auto begin() const { return data_.begin(); }
  auto end()   const { return data_.end(); }

private:
  std::unordered_map<TheKeyType, TheItemType, Hasher> data_;
};

// IndexedMap preserves insertion order via parallel vector + set.
template <typename TheKeyType, typename Hasher = std::hash<TheKeyType>>
class NCollection_IndexedMap_Stub {
public:
  using value_type      = TheKeyType;
  using reference       = TheKeyType&;
  using const_reference = const TheKeyType&;

  // Returns 1-based index (OCCT convention). 0 if already present.
  int Add(const TheKeyType& k) {
    auto [it, inserted] = idx_.try_emplace(k, static_cast<int>(order_.size()) + 1);
    if (inserted) order_.push_back(k);
    return it->second;
  }
  bool        Contains(const TheKeyType& k)   const { return idx_.count(k) != 0; }
  std::size_t Extent()                        const { return order_.size(); }
  // 1-based access.
  const_reference FindKey(int i)              const { return order_[static_cast<std::size_t>(i - 1)]; }
  int             FindIndex(const TheKeyType& k) const {
    auto it = idx_.find(k);
    return it == idx_.end() ? 0 : it->second;
  }

  auto begin() const { return order_.begin(); }
  auto end()   const { return order_.end(); }

private:
  std::vector<TheKeyType> order_;
  std::unordered_map<TheKeyType, int, Hasher> idx_;
};

// IndexedDataMap = IndexedMap + parallel value vector.
template <typename TheKeyType, typename TheItemType, typename Hasher = std::hash<TheKeyType>>
class NCollection_IndexedDataMap_Stub {
public:
  using value_type      = TheItemType;
  using reference       = TheItemType&;
  using const_reference = const TheItemType&;

  int Add(const TheKeyType& k, const TheItemType& v) {
    auto [it, inserted] = idx_.try_emplace(k, static_cast<int>(keys_.size()) + 1);
    if (inserted) {
      keys_.push_back(k);
      vals_.push_back(v);
    } else {
      vals_[static_cast<std::size_t>(it->second - 1)] = v;
    }
    return it->second;
  }
  bool            Contains(const TheKeyType& k) const { return idx_.count(k) != 0; }
  std::size_t     Extent()                      const { return keys_.size(); }
  const TheKeyType& FindKey(int i)              const { return keys_[static_cast<std::size_t>(i - 1)]; }
  const_reference   FindFromIndex(int i)        const { return vals_[static_cast<std::size_t>(i - 1)]; }
  reference         ChangeFromIndex(int i)            { return vals_[static_cast<std::size_t>(i - 1)]; }
  const_reference   FindFromKey(const TheKeyType& k) const {
    return vals_[static_cast<std::size_t>(idx_.at(k) - 1)];
  }

  auto begin() const { return keys_.begin(); }
  auto end()   const { return keys_.end(); }

  std::vector<TheKeyType>  const& keys() const { return keys_; }
  std::vector<TheItemType> const& vals() const { return vals_; }

private:
  std::vector<TheKeyType>  keys_;
  std::vector<TheItemType> vals_;
  std::unordered_map<TheKeyType, int, Hasher> idx_;
};

// DoubleMap: bidirectional unique mapping K1 <-> K2.
template <typename TheKey1Type, typename TheKey2Type,
          typename Hasher1 = std::hash<TheKey1Type>,
          typename Hasher2 = std::hash<TheKey2Type>>
class NCollection_DoubleMap_Stub {
public:
  bool Bind(const TheKey1Type& k1, const TheKey2Type& k2) {
    if (forward_.count(k1) || backward_.count(k2)) return false;
    forward_.emplace(k1, k2);
    backward_.emplace(k2, k1);
    return true;
  }
  bool             AreBound(const TheKey1Type& k1, const TheKey2Type& k2) const {
    auto it = forward_.find(k1);
    return it != forward_.end() && it->second == k2;
  }
  TheKey2Type const& Find1(const TheKey1Type& k1) const { return forward_.at(k1); }
  TheKey1Type const& Find2(const TheKey2Type& k2) const { return backward_.at(k2); }
  bool             IsBound1(const TheKey1Type& k1) const { return forward_.count(k1) != 0; }
  bool             IsBound2(const TheKey2Type& k2) const { return backward_.count(k2) != 0; }
  std::size_t      Extent() const { return forward_.size(); }

  auto begin() const { return forward_.begin(); }
  auto end()   const { return forward_.end(); }

private:
  std::unordered_map<TheKey1Type, TheKey2Type, Hasher1> forward_;
  std::unordered_map<TheKey2Type, TheKey1Type, Hasher2> backward_;
};
