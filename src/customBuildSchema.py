{
  "mainBuild": {
    "required": True,
    "type": "dict",
    "schema": {
      "bindings": {
        "required": False,
        "type": "list",
        "schema": {
          "type": "dict",
          "schema": {
            "symbol": {
              "required": True,
              "type": "string",
            },
          },
        },
        "default": [],
      },
      "emccFlags": {
        "required": False,
        "type": "list",
        "schema": {
          "type": "string",
        },
        "default": [
          "-flto",
          "-O3",
          "-sMODULARIZE",
          "-sEXPORT_ES6=1",
          "-sEXPORTED_RUNTIME_METHODS=['FS']",
          "-sINITIAL_MEMORY=100MB",
          "-sMAXIMUM_MEMORY=4GB",
          "-sALLOW_MEMORY_GROWTH=1",
          "-sUSE_FREETYPE=1",
          "-sERROR_ON_UNDEFINED_SYMBOLS=1",
          "--no-entry",
        ],
      },
      "name": {
        "required": True,
        "type": "string",
      },
      "additionalBindFiles": {
        "required": False,
        "type": "list",
        "schema": {
          "type": "string",
        },
        "default": [],
      },
    },
  },
  "extraBuilds": {
    "required": False,
    "type": "list",
    "schema": {
      "bindings": {
        "required": False,
        "type": "list",
        "schema": {
          "type": "dict",
          "schema": {
            "symbol": {
              "required": True,
              "type": "string",
            },
          },
        },
        "default": [],
      },
      "emccFlags": {
        "required": False,
        "type": "list",
        "schema": {
          "type": "string",
        },
        "default": [
          "-flto",
          "-O3",
          "-sMODULARIZE",
          "-sEXPORT_ES6=1",
          "-sEXPORTED_RUNTIME_METHODS=['FS']",
          "-sINITIAL_MEMORY=100MB",
          "-sMAXIMUM_MEMORY=4GB",
          "-sALLOW_MEMORY_GROWTH=1",
          "-sUSE_FREETYPE=1",
          "-sERROR_ON_UNDEFINED_SYMBOLS=1",
          "--no-entry",
        ],
      },
      "additionalBindFiles": {
        "required": False,
        "type": "list",
        "schema": {
          "type": "string",
        },
        "default": [],
      },
      "name": {
        "required": True,
        "type": "string",
      },
    },
    "default": [],
  },
  "additionalCppFiles": {
    "required": False,
    "type": "list",
    "schema": {
      "type": "string",
    },
    "default": [],
  },
  "generateTypescriptDefinitions": {
    "required": False,
    "type": "boolean",
    "default": True,
  },
}
