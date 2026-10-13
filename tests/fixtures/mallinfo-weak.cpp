#include <malloc.h>

extern "C" struct mallinfo mallinfo() __attribute__((weak));

int main()
{
#ifdef EXPECT_MALLINFO
  return mallinfo == nullptr ? 1 : 0;
#else
  return mallinfo == nullptr ? 0 : 1;
#endif
}
