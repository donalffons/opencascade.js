import shell from "shelljs";
import { type OpenCascadeInstance } from "opencascade.js/dist/node";
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { createRequire } from "module";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dockerImageName = process.env.dockerImageName ?? "donalffons/opencascade.js";
const customBuildCmd = `cd customBuilds && docker run --rm -v $(pwd):/src ${dockerImageName}`;

it("can create custom build: testBindings", () => {
  expect(shell.exec(`${customBuildCmd} testBindings.yml`).code).toBe(0);
});

let oc: OpenCascadeInstance = undefined;

it("can initialize custom build: testBindings", async () => {
  const mainJs = await import(path.join(__dirname, "customBuilds", "customBuild.testBindings.js"));
  globalThis.__dirname = __dirname;
  globalThis.require = createRequire(import.meta.url);
  globalThis.FS = fs;
  oc = await mainJs.default({
    locateFile: f => f.endsWith(".wasm") ? path.join(__dirname, "customBuilds", "customBuild.testBindings.wasm") : f,
  });
});

it("correctly binds StaticMethods::StaticMethods", async () => {
  expect(() => {
    new oc.StaticMethods();
  }).toThrow();
  expect(() => {
    new oc.StaticMethods_1();
  }).toThrow();
});

it("correctly binds StaticMethods::intReturn", async () => {
  expect(oc.StaticMethods.intReturn.argCount).toBe(0);
  expect(oc.StaticMethods.intReturn()).toBe(123);
  expect(() => {
    oc.StaticMethods.intReturn("keks");
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intReturn(123);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intReturn(undefined);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intReturn(null);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intReturn({});
  }).toThrow();
});

it("correctly binds StaticMethods::intArgument", async () => {
  expect(oc.StaticMethods.intArgument.argCount).toBe(1);
  expect(() => {
    oc.StaticMethods.intArgument(123);
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.intArgument("123");
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.intArgument(234);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intArgument();
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intArgument("keks");
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intArgument(undefined);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intArgument(null);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intArgument({});
  }).toThrow();
});

it("correctly binds StaticMethods::intRefArgument", async () => {
  expect(oc.StaticMethods.intRefArgument.argCount).toBe(1);
  expect(() => {
    oc.StaticMethods.intRefArgument(123);
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument({ current: 123 });
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument("123");
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument({ current: "123" });
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument(234);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument({ current: 234 });
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument();
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument("keks");
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument({ current: "keks" });
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument(undefined);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument({ current: undefined });
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument(null);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument({ current: null });
  }).toThrow();
  expect(() => {
    oc.StaticMethods.intRefArgument({});
  }).toThrow();

  const intRef = { current: 123 };
  expect(() => {
    oc.StaticMethods.intRefArgument(intRef);
  }).not.toThrow();
  expect(intRef.current).toBe(234);
});

it("correctly binds StaticMethods::notScopedEnumArgument", async () => {
  expect(oc.StaticMethods.notScopedEnumArgument.argCount).toBe(1);
  expect(() => {
    oc.StaticMethods.notScopedEnumArgument(1);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.notScopedEnumArgument(oc.NotScopedEnum.NotScopedEnum_B);
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.notScopedEnumArgument(oc.NotScopedEnum.NotScopedEnum_C);
  }).toThrow();
});

it("correctly binds StaticMethods::notScopedEnumReturn", async () => {
  expect(oc.StaticMethods.notScopedEnumReturn.argCount).toBe(0);
  expect(() => {
    oc.StaticMethods.notScopedEnumReturn(1);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.notScopedEnumReturn(oc.NotScopedEnum.NotScopedEnum_B);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.notScopedEnumReturn();
  }).not.toThrow();
  expect(oc.StaticMethods.notScopedEnumReturn().value).toBe(oc.NotScopedEnum.NotScopedEnum_B.value);
});

it("correctly binds StaticMethods::scopedEnumArgument", async () => {
  expect(oc.StaticMethods.scopedEnumArgument.argCount).toBe(1);
  expect(() => {
    oc.StaticMethods.scopedEnumArgument(1);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.scopedEnumArgument(oc.ScopedEnum.B);
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.scopedEnumArgument(oc.ScopedEnum.C);
  }).toThrow();
});

it("correctly binds StaticMethods::scopedEnumReturn", async () => {
  expect(oc.StaticMethods.scopedEnumReturn.argCount).toBe(0);
  expect(() => {
    oc.StaticMethods.scopedEnumReturn(1);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.scopedEnumReturn(oc.ScopedEnum.B);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.scopedEnumReturn();
  }).not.toThrow();
  expect(oc.StaticMethods.scopedEnumReturn().value).toBe(oc.ScopedEnum.B.value);
});

it("correctly binds StaticMethods::cStringReturn", async () => {
  expect(oc.StaticMethods.cStringReturn.argCount).toBe(0);
  expect(() => {
    oc.StaticMethods.cStringReturn(1);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.cStringReturn();
  }).not.toThrow();
  expect(oc.StaticMethods.cStringReturn()).toBe("Hello, World!");
});

it("correctly binds StaticMethods::cStringNullReturn", async () => {
  expect(oc.StaticMethods.cStringNullReturn.argCount).toBe(0);
  expect(() => {
    oc.StaticMethods.cStringNullReturn(1);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.cStringNullReturn();
  }).not.toThrow();
  expect(oc.StaticMethods.cStringNullReturn()).toBe(null);
});

it("correctly binds StaticMethods::cStringArgument", async () => {
  expect(oc.StaticMethods.cStringArgument.argCount).toBe(1);
  expect(() => {
    oc.StaticMethods.cStringArgument();
  }).toThrow();
  expect(() => {
    oc.StaticMethods.cStringArgument(1);
  }).toThrow();
  expect(() => {
    oc.StaticMethods.cStringArgument("keks");
  }).toThrow();
  expect(() => {
    oc.StaticMethods.cStringArgument("Hello, World!");
  }).not.toThrow();
  expect(() => {
    oc.StaticMethods.cStringArgument(null);
  }).not.toThrow();
});

it("correctly binds Instantiable1", async () => {
  expect(() => {
    new oc.Instantiable1();
  }).toThrow();
  expect(() => {
    new oc.Instantiable1(123);
  }).not.toThrow();
  const instance = new oc.Instantiable1(123);
  expect(() => {
    instance.getVal();
  }).toThrow();
  expect(() => {
    instance.getVal_1();
  }).not.toThrow();
  expect(instance.getVal_1()).toBe(123);
  expect(() => {
    instance.getVal_2(1);
  }).not.toThrow();
  expect(instance.getVal_2(1)).toBe(124);
  expect(() => {
    instance.getVal_3(1, 1.234);
  }).not.toThrow();
  expect(instance.getVal_3(1, 1.234)).toBeCloseTo(153.0159912109375);
  expect(instance.intRefArgument.argCount).toBe(1);
  expect(() => {
    instance.intRefArgument();
  }).toThrow();
  expect(() => {
    instance.intRefArgument(122);
  }).toThrow();
  expect(() => {
    instance.intRefArgument(123);
  }).not.toThrow();
  const intRef = { current: 123 };
  expect(() => {
    instance.intRefArgument(intRef);
  }).not.toThrow();
  expect(intRef.current).toBe(234);
  expect(instance.cStringReturn.argCount).toBe(0);
  expect(() => {
    instance.cStringReturn(1);
  }).toThrow();
  expect(() => {
    instance.cStringReturn();
  }).not.toThrow();
  expect(instance.cStringReturn()).toBe("Hello, World!");
  expect(instance.cStringArgument.argCount).toBe(1);
  expect(() => {
    instance.cStringArgument();
  }).toThrow();
  expect(() => {
    instance.cStringArgument(1);
  }).toThrow();
  expect(() => {
    instance.cStringArgument("keks");
  }).toThrow();
  expect(() => {
    instance.cStringArgument("Hello, World!");
  }).not.toThrow();
});

it("correctly binds Instantiable2", async () => {
  expect(() => {
    new oc.Instantiable2();
  }).toThrow();
  expect(() => {
    new oc.Instantiable2_1();
    new oc.Instantiable2_2(123);
    new oc.Instantiable2_3(123, 1);
  }).not.toThrow();
  expect((new oc.Instantiable2_1()).getVal()).toBe(0);
  expect((new oc.Instantiable2_2(123)).getVal()).toBe(123);
  expect((new oc.Instantiable2_3(123, 1)).getVal()).toBe(124);
  const instance1 = new oc.Instantiable2_3(123, 1);
  const instance2 = new oc.Instantiable2_2(123);
  expect(instance1.addInstantiable2(instance2)).toBe(247);
});

it("correctly binds Instantiable3", async () => {
  console.log(oc.Instantiable3);
  expect(() => {
    new oc.Instantiable3();
  }).not.toThrow();
  const i = new oc.Instantiable3();;
  expect(() => {
    i.noop();
  }).not.toThrow();
});

it("correctly binds TemplateClass specializations", async () => {
  expect(() => {
    new oc.TemplateClass();
  }).toThrow();
  expect(() => {
    new oc.TemplateClass_1();
  }).toThrow();
  expect(() => {
    new oc.TemplateClassInt();
  }).toThrow();
  expect(() => {
    new oc.TemplateClassInt_1();
    new oc.TemplateClassInt_2(123);
    new oc.TemplateClassFloat_1();
    new oc.TemplateClassFloat_2(123);
  }).not.toThrow();
  expect((new oc.TemplateClassInt_2(123)).getVal_1()).toBe(123);
  expect((new oc.TemplateClassFloat_2(123)).getVal_1()).toBe(123);
  const intTemplate = new oc.TemplateClassInt_2(123);
  expect(() => {
    intTemplate.getVal_2(122);
  }).not.toThrow();
  expect(() => {
    intTemplate.getVal_2(124);
  }).toThrow();
  const intRef1 = { current: 122 };
  const intRef2 = { current: 124 };
  expect(intTemplate.getVal_2(intRef1)).toBe(165);
  expect(intRef1.current).toBe(42);
  expect(() => {
    intTemplate.get_val_2(intRef2);
  }).toThrow();
});

it("can handle exceptions thrown and caught in C++", async () => {
  expect(() => {
    oc.ExceptionTest.throwingFunc();
  }).toThrow();
  expect(() => {
    oc.ExceptionTest.catchingFunc();
  }).not.toThrow();
  expect(oc.ExceptionTest.catchingFunc()).toBe(true);
});
