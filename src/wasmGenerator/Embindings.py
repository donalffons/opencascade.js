import clang.cindex
import os

from .Common import shouldProcessClass, isAbstractClass, SkipException, getMethodOverloadPostfix, ignoreDuplicateTypedef, overloadedConstrutorObject

def getClassEmbindings(theClass):
  children = theClass.get_children()
  className = theClass.spelling

  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))

  if len(baseSpec) > 0:
    baseClassBinding = ", base<" + baseSpec[0].type.spelling + ">"
  else:
    baseClassBinding = ""

  return "  class_<" + className + baseClassBinding + ">(\"" + className + "\")" + os.linesep

def getMethodsEmbindings(theClass, filterMethod):
  methodsBinding = ""
  for child in theClass.get_children():
    if not filterMethod(theClass, child):
      continue
    try:
      methodsBinding += getSingleMethodBinding(theClass, child)
    except SkipException as e:
      print(str(e))
  return methodsBinding

def getSingleMethodBinding(theClass, method):
  className = theClass.spelling
  if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD and not method.spelling.startswith("operator"):
    [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, method)

    if numOverloads == 1:
      functor = "&" + className + "::" + method.spelling
    else:
      returnType = method.result_type.spelling
      const = "const" if method.is_const_method() else ""
      args = ", ".join(list(map(lambda x: x.type.spelling + " " + x.spelling, list(method.get_arguments()))))
      functor = "(" + returnType + " (" + ((className + "::") if not method.is_static_method() else "") + "*)(" + args + ") " + const + ") &" + className + "::" + method.spelling

    if method.is_static_method():
      functionCommand = "class_function"
    else:
      functionCommand = "function"

    cast = getCastMethodBindings(theClass, method)
    return "    ." + functionCommand + "(\"" + method.spelling + overloadPostfix + "\", " + cast[0] + functor + cast[1] + ", allow_raw_pointers())" + os.linesep

  return ""

def getCastMethodBindings(theClass, method):
  className = theClass.spelling
  args = list(method.get_arguments())
  hasConstCharArg = any(any(x.spelling == "Standard_CString" for x in a.get_tokens()) for a in args)
  hasRefArg = any(x.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE for x in args)
  needReinterpretCast = hasConstCharArg or hasRefArg
  returnType = method.result_type.spelling
  const = "const" if method.is_const_method() else ""
  classQualifier = (className + "::" if not method.is_static_method() else "" ) + "*"

  returnTypeHasNonPublicCopyConstructor = any(x.is_copy_constructor() and not x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC for x in method.result_type.get_pointee().get_declaration().get_children())

  if returnTypeHasNonPublicCopyConstructor:
    needReinterpretCast = True
    returnType = method.result_type.get_pointee().get_declaration().spelling + "*"

  if needReinterpretCast:
    castedArgResults = list(map(getSingleArgumentBinding(False), args))
    somethingChanged = any(map(lambda x: x[1], castedArgResults))
    castedArgTypes = list(map(lambda x: x[0], castedArgResults))
    if somethingChanged or returnTypeHasNonPublicCopyConstructor:
      return ["reinterpret_cast<" + returnType + " (" + classQualifier + ") (" + ", ".join(castedArgTypes) + ") " + const + ">(", ")"]
    else:
      return ["static_cast<" + returnType + " (" + classQualifier + ") (" + ", ".join(castedArgTypes) + ") " + const + ">(", ")"]
  return ["", ""]

def getSingleArgumentBinding(argNames = True, isConstructor = False):
  def f(arg):
    argChildren = list(arg.get_children())
    argBinding = ""
    hasDefaultValue = any(x.spelling == "=" for x in list(arg.get_tokens()))
    isArray = not hasDefaultValue and len(argChildren) > 1 and argChildren[1].kind == clang.cindex.CursorKind.INTEGER_LITERAL
    changed = False
    if isArray:
      const = "const " if list(arg.get_tokens())[0].spelling == "const" else ""
      arrayCount = list(argChildren[1].get_tokens())[0].spelling
      argBinding = const + argChildren[0].type.spelling + " (&" + (arg.spelling if argNames else "") + ")[" + arrayCount + "]"
      changed = True
    else:
      typename = arg.type.spelling
      if arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
        tokenList = list(arg.get_tokens())
        isConstRef = len(tokenList) > 0 and tokenList[0].spelling == "const"
        if not isConstRef:
          if arg.type.spelling[-2] == "*" or "".join(arg.type.spelling.rsplit("&", 1)).strip() in ["Standard_Boolean", "Standard_Real", "Standard_Integer"]: # types that can be copied
            typename = "".join(arg.type.spelling.rsplit("&", 1))
            changed = True
          else:
            if isConstructor:
              typename = arg.type.spelling
              changed = True
            else:
              typename = "const " + arg.type.spelling
              changed = True
      if any(x.spelling == "Standard_CString" for x in arg.get_tokens()):
        typename = "std::string"
        changed = True
      argBinding = typename + ((" " + arg.spelling) if argNames else "")
    return [argBinding, changed]
  return f

def getEpilogEmbindings(theClass):
  nonPublicDestructor = any(x.kind == clang.cindex.CursorKind.DESTRUCTOR and not x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC for x in theClass.get_children())
  placementDelete = next((x for x in theClass.get_children() if x.spelling == "operator delete" and len(list(x.get_arguments())) == 2), None) is not None
  if nonPublicDestructor or placementDelete:
    return "namespace emscripten { namespace internal { template<> void raw_destructor<" + theClass.spelling + ">(" + theClass.spelling + "* ptr) { /* do nothing */ } } }" + os.linesep
  return ""

def getSimpleConstructorBinding(theClass):
  children = list(theClass.get_children())
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR, children))

  if len(constructors) == 0:
    return "    .constructor<>()" + os.linesep
  publicConstructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(publicConstructors) == 0 or len(publicConstructors) > 1:
    return ""
  standardConstructor = publicConstructors[0]
  if not standardConstructor:
    return ""

  argTypesBindings = ", ".join(list(map(lambda x: x.type.spelling, list(standardConstructor.get_arguments()))))
  
  return "    .constructor<" + argTypesBindings + ">()" + os.linesep

def getOverloadedConstructorsBinding(theClass, children = None):
  if children is None:
    children = list(theClass.get_children())
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(constructors) == 1:
    return ""
  constructorBindings = ""
  allOverloads = [m for m in children if m.kind == clang.cindex.CursorKind.CONSTRUCTOR and m.access_specifier == clang.cindex.AccessSpecifier.PUBLIC]
  if len(allOverloads) == 1:
    raise Exception("Something weird happened")
  for constructor in constructors:
    overloadPostfix = "" if (not len(allOverloads) > 1) else "_" + str(allOverloads.index(constructor) + 1)

    args = ", ".join(list(map(lambda x: getSingleArgumentBinding(True, True)(x)[0], list(constructor.get_arguments()))))
    argNames = ", ".join(list(map(lambda x: x.spelling if not any(y.spelling == "Standard_CString" for y in x.get_tokens()) else x.spelling + ".c_str()", list(constructor.get_arguments()))))
    argTypes = ", ".join(list(map(lambda x: getSingleArgumentBinding(False, True)(x)[0], list(constructor.get_arguments()))))

    constructorBindings += "    struct " + constructor.spelling + overloadPostfix + " : public " + constructor.spelling + " {" + os.linesep
    constructorBindings += "      " + constructor.spelling + overloadPostfix + "(" + args + ") : " + constructor.spelling + "(" + argNames + ") {}" + os.linesep
    constructorBindings += "    };" + os.linesep
    constructorBindings += "    class_<" + constructor.spelling + overloadPostfix + ", base<" + constructor.spelling + ">>(\"" + constructor.spelling + overloadPostfix + "\")" + os.linesep
    constructorBindings += "      .constructor<" + argTypes + ">()" + os.linesep
    constructorBindings += "    ;" + os.linesep

  return constructorBindings

def getEnumBindings(enum):
  bindingsOutput = "  enum_<" + enum.spelling + ">(\"" + enum.spelling + "\")" + os.linesep
  for enumChild in list(enum.get_children()):
    bindingsOutput += "    .value(\"" + enumChild.spelling + "\", " + enum.spelling + "::" + enumChild.spelling + ")" + os.linesep
  bindingsOutput += "  ;" + os.linesep
  return bindingsOutput

def getHandleTypeBindings(typedefs):
  bindingsOutput = ""
  print("generating bindings for handle types...")

  handleTypedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("opencascade::handle"), typedefs))
  for handleTypedef in handleTypedefs:
    handleName = handleTypedef.spelling
    targetType = handleTypedef.underlying_typedef_type.get_template_argument_type(0).spelling
    bindingsOutput += "  class_<" + handleName + ">(\"" + handleName + "\")" + os.linesep
    bindingsOutput += "    .function(\"Nullify\", &" + handleName + "::Nullify)" + os.linesep
    bindingsOutput += "    .function(\"IsNull\", &" + handleName + "::IsNull)" + os.linesep
    bindingsOutput += "    .function(\"reset\", &" + handleName + "::reset, allow_raw_pointers())" + os.linesep
    bindingsOutput += "    .function(\"operator_assign_1\", select_overload<" + handleName + "&(const " + handleName + "&)>(&" + handleName + "::operator=))" + os.linesep
    bindingsOutput += "    .function(\"operator_assign_2\", select_overload<" + handleName + "&(const " + targetType + "*)>(&" + handleName + "::operator=), allow_raw_pointers())" + os.linesep
    bindingsOutput += "    .function(\"operator_assign_3\", select_overload<" + handleName + "&(" + handleName + "&&)>(&" + handleName + "::operator=))" + os.linesep
    bindingsOutput += "    .function(\"get\", select_overload<" + targetType + "*()const>(&" + handleName + "::get), allow_raw_pointers())" + os.linesep
    bindingsOutput += "    .function(\"operator_dereference\", &" + handleName + "::operator->, allow_raw_pointers())" + os.linesep
    bindingsOutput += "    .function(\"operator_bool\", &" + handleName + "::operator bool)" + os.linesep
    bindingsOutput += "  ;" + os.linesep

    oc1 = overloadedConstrutorObject()
    oc1.spelling = handleName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = handleName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const " + targetType + "*"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "thePtr"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2.arguments = [oc2arg1]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = handleName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + handleName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theHandle"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    bindingsOutput += getOverloadedConstructorsBinding(handleTypedef, [
      oc1, oc2, oc3
    ])

  return bindingsOutput

def getNCollection_Array1TypeBindings(typedefs):
  bindingsOutput = ""
  print("generating bindings for NCollection_Array1 types...")
  nCollection_Array1Typedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("NCollection_Array1"), typedefs))
  for nCollection_Array1Typedef in nCollection_Array1Typedefs:
    theName = nCollection_Array1Typedef.spelling
    theType = nCollection_Array1Typedef.underlying_typedef_type.get_template_argument_type(0).spelling
    bindingsOutput += "  class_<" + theName + ">(\"" + theName + "\")" + os.linesep
    bindingsOutput += "    .function(\"begin\", &" + theName + "::begin)" + os.linesep
    bindingsOutput += "    .function(\"end\", &" + theName + "::end)" + os.linesep
    bindingsOutput += "    .function(\"cbegin\", &" + theName + "::cbegin)" + os.linesep
    bindingsOutput += "    .function(\"cend\", &" + theName + "::cend)" + os.linesep
    bindingsOutput += "    .function(\"Init\", &" + theName + "::Init)" + os.linesep
    bindingsOutput += "    .function(\"Size\", &" + theName + "::Size)" + os.linesep
    bindingsOutput += "    .function(\"Length\", &" + theName + "::Length)" + os.linesep
    bindingsOutput += "    .function(\"IsEmpty\", &" + theName + "::IsEmpty)" + os.linesep
    bindingsOutput += "    .function(\"Lower\", &" + theName + "::Lower)" + os.linesep
    bindingsOutput += "    .function(\"Upper\", &" + theName + "::Upper)" + os.linesep
    bindingsOutput += "    .function(\"IsDeletable\", &" + theName + "::IsDeletable)" + os.linesep
    bindingsOutput += "    .function(\"IsAllocated\", &" + theName + "::IsAllocated)" + os.linesep
    bindingsOutput += "    .function(\"Assign\", &" + theName + "::Assign)" + os.linesep
    bindingsOutput += "    .function(\"Move\", &" + theName + "::Move)" + os.linesep
    bindingsOutput += "    // .function(\"operator_assign\", &" + theName + "::operator=)" + os.linesep
    bindingsOutput += "    .function(\"First\", &" + theName + "::First)" + os.linesep
    bindingsOutput += "    .function(\"ChangeFirst\", &" + theName + "::ChangeFirst)" + os.linesep
    bindingsOutput += "    .function(\"Last\", &" + theName + "::Last)" + os.linesep
    bindingsOutput += "    .function(\"ChangeLast\", &" + theName + "::ChangeLast)" + os.linesep
    bindingsOutput += "    .function(\"Value\", &" + theName + "::Value)" + os.linesep
    bindingsOutput += "    // .function(\"operator()_1\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"operator[]_1\", ...)" + os.linesep
    bindingsOutput += "    .function(\"ChangeValue\", &" + theName + "::ChangeValue)" + os.linesep
    bindingsOutput += "    // .function(\"operator()_2\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"operator[]_2\", ...)" + os.linesep
    bindingsOutput += "    .function(\"SetValue\", &" + theName + "::SetValue)" + os.linesep
    bindingsOutput += "    .function(\"Resize\", &" + theName + "::Resize)" + os.linesep
    bindingsOutput += "  ;" + os.linesep

    oc1 = overloadedConstrutorObject()
    oc1.spelling = theName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = theName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const Standard_Integer"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "theLower"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2arg2type = overloadedConstrutorObject()
    oc2arg2type.spelling = "const Standard_Integer"
    oc2arg2type.kind = None
    oc2arg2 = overloadedConstrutorObject()
    oc2arg2.type = oc2arg2type
    oc2arg2.spelling = "theUpper"
    oc2arg2.tokens = []
    oc2arg2.children = []
    oc2.arguments = [oc2arg1, oc2arg2]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = theName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + theName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theOther"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    oc4 = overloadedConstrutorObject()
    oc4.spelling = theName
    oc4.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc4.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc4arg1type = overloadedConstrutorObject()
    oc4arg1type.spelling = "const " + theType + "&"
    oc4arg1type.kind = None
    oc4arg1 = overloadedConstrutorObject()
    oc4arg1.type = oc4arg1type
    oc4arg1.spelling = "theBegin"
    oc4arg1.tokens = []
    oc4arg1.children = []
    oc4arg2type = overloadedConstrutorObject()
    oc4arg2type.spelling = "const Standard_Integer"
    oc4arg2type.kind = None
    oc4arg2 = overloadedConstrutorObject()
    oc4arg2.type = oc4arg2type
    oc4arg2.spelling = "theLower"
    oc4arg2.tokens = []
    oc4arg2.children = []
    oc4arg3type = overloadedConstrutorObject()
    oc4arg3type.spelling = "const Standard_Integer"
    oc4arg3type.kind = None
    oc4arg3 = overloadedConstrutorObject()
    oc4arg3.type = oc4arg2type
    oc4arg3.spelling = "theUpper"
    oc4arg3.tokens = []
    oc4arg3.children = []
    oc4.arguments = [oc4arg1, oc4arg2, oc4arg3]

    bindingsOutput += getOverloadedConstructorsBinding(nCollection_Array1Typedef, [
      oc1, oc2, oc3, oc4
    ])
  
  return bindingsOutput

def getNCollection_ListTypeBindings(typedefs):
  bindingsOutput = ""
  print("generating bindings for NCollection_List types...")

  nCollection_ListTypedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("NCollection_List") and not x.underlying_typedef_type.spelling.endswith("::Iterator"), typedefs))
  for nCollection_ListTypedef in nCollection_ListTypedefs:
    theName = nCollection_ListTypedef.spelling
    theType = nCollection_ListTypedef.underlying_typedef_type.get_template_argument_type(0).spelling

    bindingsOutput += "  class_<" + theName + ">(\"" + theName + "\")" + os.linesep
    bindingsOutput += "    .function(\"begin\", &" + theName + "::begin)" + os.linesep
    bindingsOutput += "    .function(\"end\", &" + theName + "::end)" + os.linesep
    bindingsOutput += "    .function(\"cbegin\", &" + theName + "::cbegin)" + os.linesep
    bindingsOutput += "    .function(\"cend\", &" + theName + "::cend)" + os.linesep
    bindingsOutput += "    .function(\"Size\", &" + theName + "::Size)" + os.linesep
    bindingsOutput += "    .function(\"Assign\", static_cast<" + theName + "& (" + theName + "::*) (const " + theName + "&) >((" + theName + "& (" + theName + "::*)(const " + theName + "&) ) &" + theName + "::Assign))" + os.linesep
    bindingsOutput += "    .function(\"operator_assign\", static_cast<" + theName + "& (" + theName + "::*) (const " + theName + "&) >((" + theName + "& (" + theName + "::*)(const " + theName + "&) ) &" + theName + "::operator=))" + os.linesep
    bindingsOutput += "    .function(\"Clear\", &" + theName + "::Clear)" + os.linesep
    bindingsOutput += "    .function(\"First_1\", static_cast<const " + theType + "& (" + theName + "::*) () const>((const " + theType + "& (" + theName + "::*)() const) &" + theName + "::First))" + os.linesep
    bindingsOutput += "    .function(\"First_2\", static_cast<" + theType + "& (" + theName + "::*) () >((" + theType + "& (" + theName + "::*)() ) &" + theName + "::First))" + os.linesep
    bindingsOutput += "    .function(\"Last_1\", static_cast<const " + theType + "& (" + theName + "::*) () const>((const " + theType + "& (" + theName + "::*)() const) &" + theName + "::Last))" + os.linesep
    bindingsOutput += "    .function(\"Last_2\", static_cast<" + theType + "& (" + theName + "::*) () >((" + theType + "& (" + theName + "::*)() ) &" + theName + "::Last))" + os.linesep
    bindingsOutput += "    .function(\"Append_1\", static_cast<" + theType + "& (" + theName + "::*) (const " + theType + "&) >((" + theType + "& (" + theName + "::*)(const " + theType + "&) ) &" + theName + "::Append))" + os.linesep
    bindingsOutput += "    // .function(\"Append_2\", ...)" + os.linesep
    bindingsOutput += "    .function(\"Append_3\", static_cast<void (" + theName + "::*) (" + theName + "&) >((void (" + theName + "::*)(" + theName + "&) ) &" + theName + "::Append))" + os.linesep
    bindingsOutput += "    .function(\"Prepend_1\", static_cast<" + theType + "& (" + theName + "::*) (const " + theType + "&) >((" + theType + "& (" + theName + "::*)(const " + theType + "&) ) &" + theName + "::Prepend))" + os.linesep
    bindingsOutput += "    .function(\"Prepend_2\", static_cast<void (" + theName + "::*) (" + theName + "&) >((void (" + theName + "::*)(" + theName + "&) ) &" + theName + "::Prepend))" + os.linesep
    bindingsOutput += "    .function(\"RemoveFirst\", &" + theName + "::RemoveFirst)" + os.linesep
    bindingsOutput += "    // .function(\"Remove_1\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"Remove_2\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"InsertBefore_1\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"InsertBefore_2\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"InsertAfter_1\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"InsertAfter_2\", ...)" + os.linesep
    bindingsOutput += "    .function(\"Reverse\", &" + theName + "::Reverse)" + os.linesep
    bindingsOutput += "    // .function(\"Contains\", ...)" + os.linesep
    bindingsOutput += "  ;" + os.linesep

    oc1 = overloadedConstrutorObject()
    oc1.spelling = theName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = theName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const Handle_NCollection_BaseAllocator&"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "theAllocator"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2.arguments = [oc2arg1]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = theName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + theName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theOther"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    bindingsOutput += getOverloadedConstructorsBinding(nCollection_ListTypedef, [
      oc1, oc2, oc3
    ])
  
  return bindingsOutput

def getNCollection_SequenceTypeBindings(typedefs):
  bindingsOutput = ""
  print("generating bindings for NCollection_Sequence types...")

  nCollection_ListTypedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("NCollection_Sequence") and not x.underlying_typedef_type.spelling.endswith("::Iterator"), typedefs))
  for nCollection_ListTypedef in nCollection_ListTypedefs:
    theName = nCollection_ListTypedef.spelling
    theType = nCollection_ListTypedef.underlying_typedef_type.get_template_argument_type(0).spelling

    bindingsOutput += "  class_<" + theName + ">(\"" + theName + "\")" + os.linesep
    bindingsOutput += "    .function(\"begin\", &" + theName + "::begin)" + os.linesep
    bindingsOutput += "    .function(\"end\", &" + theName + "::end)" + os.linesep
    bindingsOutput += "    .function(\"cbegin\", &" + theName + "::cbegin)" + os.linesep
    bindingsOutput += "    .function(\"cend\", &" + theName + "::cend)" + os.linesep
    bindingsOutput += "    .function(\"Size\", &" + theName + "::Size)" + os.linesep
    bindingsOutput += "    .function(\"Length\", &" + theName + "::Length)" + os.linesep
    bindingsOutput += "    .function(\"Lower\", &" + theName + "::Lower)" + os.linesep
    bindingsOutput += "    .function(\"Upper\", &" + theName + "::Upper)" + os.linesep
    bindingsOutput += "    .function(\"IsEmpty\", &" + theName + "::IsEmpty)" + os.linesep
    bindingsOutput += "    .function(\"Reverse\", &" + theName + "::Reverse)" + os.linesep
    bindingsOutput += "    .function(\"Exchange\", &" + theName + "::Exchange)" + os.linesep
    bindingsOutput += "    .function(\"Clear\", &" + theName + "::Clear)" + os.linesep
    bindingsOutput += "    .function(\"Assign\", &" + theName + "::Assign)" + os.linesep
    bindingsOutput += "  ;" + os.linesep

    oc1 = overloadedConstrutorObject()
    oc1.spelling = theName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = theName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const Handle_NCollection_BaseAllocator&"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "theAllocator"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2.arguments = [oc2arg1]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = theName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + theName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theOther"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    bindingsOutput += getOverloadedConstructorsBinding(nCollection_ListTypedef, [
      oc1, oc2, oc3
    ])
  
  return bindingsOutput

def getEmbindings(includeDirectives, name, translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum):
  output = ""

  output += includeDirectives + "\n" + \
    "\n" + \
    "#include <emscripten/bind.h>\n" + \
    "using namespace emscripten;\n" + \
    "\n" + \
    "EMSCRIPTEN_BINDINGS(" + name + ") {\n"

  typedefs = filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL, translationUnit.cursor.get_children())
  sortedTypedefs = {}
  for child in typedefs:
    if child.get_definition() is None or not child == child.get_definition():
      continue
    if not child.extent.start.file.name in headerFiles:
      continue
    if not filterTypedef(child):
      continue
    if not child.underlying_typedef_type.spelling in sortedTypedefs:
      sortedTypedefs[child.underlying_typedef_type.spelling] = []
    sortedTypedefs[child.underlying_typedef_type.spelling].append(child)
  
  filteredTypedefs = []
  for key, children in sortedTypedefs.items():
    skip = False
    for child in children:
      if ignoreDuplicateTypedef(child, sortedTypedefs):
        skip = True
    if skip:
      continue
    if len(children) == 1:
      filteredTypedefs.append(children[0])
    else:
      allNames = map(lambda x: x.spelling, children)
      deDupedCount = len(list(dict.fromkeys(allNames)))
      if deDupedCount == 1 and not any(x.spelling == children[0].spelling for x in filteredTypedefs):
        filteredTypedefs.append(children[0])
      else:
        for child in children:
          filteredTypedefs.append(child)
          
  for child in translationUnit.cursor.get_children():
    if shouldProcessClass(child, headerFiles, filterClass):
      try:
        output += getClassEmbindings(child)
        isAbstract = isAbstractClass(child, translationUnit)
        if not isAbstract:
          output += getSimpleConstructorBinding(child)
        output += getMethodsEmbindings(child, filterMethod)
        output += "  ;" + "\n"
        if not isAbstract:
          output += getOverloadedConstructorsBinding(child)
      except SkipException as e:
        print(str(e))

  output += getHandleTypeBindings(filteredTypedefs)
  output += getNCollection_Array1TypeBindings(filteredTypedefs)
  output += getNCollection_ListTypeBindings(filteredTypedefs)
  output += getNCollection_SequenceTypeBindings(filteredTypedefs)

  for child in translationUnit.cursor.get_children():
    if child.get_definition() is None or not child == child.get_definition():
      continue
    if not child.extent.start.file.name in headerFiles:
      continue
    if not filterEnum(child):
      continue
    if child.kind == clang.cindex.CursorKind.ENUM_DECL:
      output += getEnumBindings(child)

  output += "}" + os.linesep + os.linesep

  for child in translationUnit.cursor.get_children():
    if child.get_definition() is None or not child == child.get_definition():
      continue
    if not child.extent.start.file.name in headerFiles:
      continue
    if not filterClass(child):
      continue
    if child.kind == clang.cindex.CursorKind.CLASS_DECL:
      output += getEpilogEmbindings(child)
  
  return output
