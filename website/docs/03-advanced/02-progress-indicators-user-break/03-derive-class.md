---
sidebar_position: 3
---

# Step 2: Derive a Custom Progress Indicator Class

In this step, we will derive a specialization from `Message_ProgressIndicator_JS` and use it in JS.

Again following [Emscripten's documentation](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html#extend-example), we create `MyProgressIndicator` as a specialization of `Message_ProgressIndicator_JS` (and therefore `Message_ProgressIndicator`) and implement our own logic for `Show`. We can then use it in certain OpenCascade API's like `BRepAlgoAPI_Fuse` in this example.

```js
const MyProgressIndicator = oc.Message_ProgressIndicator_JS.extend("Message_ProgressIndicator_JS", {
  Show: function (theScope, isForce) {
    console.log("Show", this.GetPosition());
  },
});
const p = new MyProgressIndicator();
const box1 = new oc.BRepPrimAPI_MakeBox_3(new oc.gp_Pnt_3(0, 0, 0), 2, 1, 1);
const box2 = new oc.BRepPrimAPI_MakeBox_3(new oc.gp_Pnt_3(1, 0, 0), 2, 1, 1);
const myBody = new oc.BRepAlgoAPI_Fuse_3(box1.Shape(), box2.Shape(), p.Start_1());
```

Note, how you can call `this.GetPosition()` from that method's body, i.e. `this` gives you access to the classes properties, as you would expect. This code gives the following output:

```
Show 0
Show 0.035
...
Show 0.9955000000000034
Show 1
```
