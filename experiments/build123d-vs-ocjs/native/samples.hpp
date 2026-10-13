#pragma once

#include <string>
#include <vector>

struct Sample {
  std::string name;
  void (*fn)();
};

const std::vector<Sample>& all_samples();
