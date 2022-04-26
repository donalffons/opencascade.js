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
          "-fexceptions",
          "-sDISABLE_EXCEPTION_CATCHING=0",
          "-O3",
          "-sEXPORT_ES6=1",
          "-sUSE_ES6_IMPORT_META=0",
          "-sEXPORTED_RUNTIME_METHODS=['FS']",
          "-sINITIAL_MEMORY=100MB",
          "-sMAXIMUM_MEMORY=4GB",
          "-sALLOW_MEMORY_GROWTH=1",
          "-sUSE_FREETYPE=1",
          "-sLLD_REPORT_UNDEFINED",
          "--no-entry",
        ],
      },
      "name": {
        "required": True,
        "type": "string",
      },
      "additionalBindCode": {
        "required": False,
        "type": "string",
        "default": "",
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
          "-fexceptions",
          "-sDISABLE_EXCEPTION_CATCHING=0",
          "-O3",
          "-sEXPORT_ES6=1",
          "-sUSE_ES6_IMPORT_META=0",
          "-sEXPORTED_RUNTIME_METHODS=['FS']",
          "-sINITIAL_MEMORY=100MB",
          "-sMAXIMUM_MEMORY=4GB",
          "-sALLOW_MEMORY_GROWTH=1",
          "-sUSE_FREETYPE=1",
          "-sLLD_REPORT_UNDEFINED",
          "--no-entry",
        ],
      },
      "additionalBindCode": {
        "required": False,
        "type": "string",
        "default": "",
      },
      "name": {
        "required": True,
        "type": "string",
      },
    },
    "default": [],
  },
  "additionalCppCode": {
    "required": False,
    "type": "string",
    "default": "",
  },
  "generateTypescriptDefinitions": {
    "required": False,
    "type": "boolean",
    "default": True,
  },
}
