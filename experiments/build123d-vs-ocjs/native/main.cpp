// Native C++ OCCT benchmark harness, identical CLI shape to:
//   - python/run_bench.py
//   - ocjs/run-bench.mjs
//
// Output JSON has the same schema so ocjs/merge-results.mjs can consume it.

#include "samples.hpp"

#include <algorithm>
#include <chrono>
#include <cstdint>
#include <cstdio>
#include <cstdlib>
#include <cstring>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

namespace {

double median(std::vector<double> v) {
  std::sort(v.begin(), v.end());
  size_t n = v.size();
  if (n == 0) return 0.0;
  return (n % 2) ? v[n / 2] : 0.5 * (v[n / 2 - 1] + v[n / 2]);
}

double mean(const std::vector<double>& v) {
  double s = 0.0;
  for (double x : v) s += x;
  return v.empty() ? 0.0 : s / v.size();
}

struct Args {
  int warmup = 2;
  int iters = 7;
  std::string out;
  std::string engine = "native-cpp-occt";
  bool ltoEnabled = false;  // overridden via CLI from build script
};

Args parse(int argc, char** argv) {
  Args a;
  for (int i = 1; i < argc; ++i) {
    std::string s = argv[i];
    auto next = [&](int& slot) {
      if (i + 1 < argc) slot = std::atoi(argv[++i]);
    };
    auto nextStr = [&](std::string& slot) {
      if (i + 1 < argc) slot = argv[++i];
    };
    if (s == "--warmup") next(a.warmup);
    else if (s == "--iters") next(a.iters);
    else if (s == "--out") nextStr(a.out);
    else if (s == "--engine") nextStr(a.engine);
    else if (s == "--lto") a.ltoEnabled = true;
  }
  return a;
}

std::string esc(const std::string& s) {
  std::string out;
  out.reserve(s.size());
  for (char c : s) {
    if (c == '"' || c == '\\') {
      out.push_back('\\');
      out.push_back(c);
    } else if (c == '\n') {
      out += "\\n";
    } else {
      out.push_back(c);
    }
  }
  return out;
}

}  // namespace

int main(int argc, char** argv) {
  Args a = parse(argc, argv);

  std::ostringstream json;
  json << "{\n";
  json << "  \"engine\": \"" << esc(a.engine) << "\",\n";
  json << "  \"occtVersion\": \"8.0.0\",\n";
  json << "  \"ltoEnabled\": " << (a.ltoEnabled ? "true" : "false") << ",\n";
  json << "  \"warmup\": " << a.warmup << ",\n";
  json << "  \"iterations\": " << a.iters << ",\n";
  json << "  \"samples\": {\n";

  const auto& samples = all_samples();
  std::vector<Sample> sorted(samples.begin(), samples.end());
  std::sort(sorted.begin(), sorted.end(),
            [](const Sample& l, const Sample& r) { return l.name < r.name; });

  bool firstSample = true;
  for (const auto& s : sorted) {
    std::cerr << "[" << a.engine << "] " << s.name << " ..." << std::flush;
    for (int w = 0; w < a.warmup; ++w) s.fn();
    std::vector<double> times;
    times.reserve(a.iters);
    for (int k = 0; k < a.iters; ++k) {
      auto t0 = std::chrono::high_resolution_clock::now();
      s.fn();
      auto t1 = std::chrono::high_resolution_clock::now();
      double ms = std::chrono::duration<double, std::milli>(t1 - t0).count();
      times.push_back(ms);
    }
    double med = median(times);
    double mn = mean(times);
    double lo = *std::min_element(times.begin(), times.end());
    double hi = *std::max_element(times.begin(), times.end());
    std::cerr << " median=" << med << "ms\n";

    if (!firstSample) json << ",\n";
    firstSample = false;
    json << "    \"" << esc(s.name) << "\": {\n";
    json << "      \"medianMs\": " << med << ",\n";
    json << "      \"meanMs\": " << mn << ",\n";
    json << "      \"minMs\": " << lo << ",\n";
    json << "      \"maxMs\": " << hi << ",\n";
    json << "      \"timesMs\": [";
    for (size_t i = 0; i < times.size(); ++i) {
      if (i) json << ", ";
      json << times[i];
    }
    json << "]\n    }";
  }

  json << "\n  }\n}\n";

  std::string payload = json.str();
  if (!a.out.empty()) {
    std::filesystem::path p(a.out);
    if (p.has_parent_path()) std::filesystem::create_directories(p.parent_path());
    std::ofstream f(a.out);
    f << payload;
  }
  std::cout << payload;
  return 0;
}
