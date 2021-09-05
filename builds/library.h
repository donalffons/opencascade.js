typedef Handle(IMeshTools_Context) Handle_IMeshTools_Context;

class JSTools {
public:
  static std::string ConvertAsciiString(const TCollection_AsciiString& s) {
    return s.ToCString();
  }
  static std::string getExceptionMessage(intptr_t exceptionPtr) {
    return std::string(reinterpret_cast<std::exception *>(exceptionPtr)->what());
  }
};
