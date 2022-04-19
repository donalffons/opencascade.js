---
sidebar_position: 2
---

# Let's catch Some Exceptions

Several OpenCascade APIs perform basic sanity checks on input parameters, like `BRepPrimAPI_MakeCone`. When calling it's constructor with a height of zero for example, OpenCascade would throw a exception of type `Standard_Failure` with additional information about the error.

```js title="Input:"
const disc = new oc.BRepPrimAPI_MakeCone_1(1, 0, 0);
```
```_ title="Output:"
thrown: 18476736
```

We can catch this exception in JavaScript, simple by wrapping it with a `try...catch` block. However, the thrown value is represented as a number and does not contain any meaningful information about the error.

## Extracting Exception Data

What gets thrown is actually a pointer into a point into memory that contains the actual exception data. To extract this information, we have to convert the pointer into a real object. OpenCascade.js provides a helper function `OCJS.getStandard_FailureData` which takes the exception pointer as an argument and returns an instance of `Standard_Failure`, which is generally used by OpenCascade when throwing exceptions.

```js title="Input:"
try {
  const disc = new oc.BRepPrimAPI_MakeCone_1(1, 0, 0);
} catch (e) {
  if(typeof e === "number") {
    const exceptionData = oc.OCJS.getStandard_FailureData(e);
    console.log(`That didn't work because: ${exceptionData.GetMessageString()}`);
  } else {
    console.log("Unkown error");
  }
}
```
```_ title="Output:"
That didn't work because: cone with negative or null height
```

You can now react to the error, show it to your user and potentially retry the execution.

:::info You can disable exception support

Because of it's impact on file size and runtime performance, exception catching can be disabled if it is not required in your app. Check out the note in the [docs on file size](/docs/getting-started/file-size#what-if-thats-still-too-much).

:::

## Additional Resources

* [Emscripten Docs: General information on exceptions](https://emscripten.org/docs/porting/exceptions.html)
* [Emscripten Docs: How to catch and convert exception pointers](https://emscripten.org/docs/porting/Debugging.html#handling-c-exceptions-from-javascript)