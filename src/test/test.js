const main = require("./main.js")

new main({
  dynamicLibraries: [
    "./A.wasm",
    "./B.wasm"
  ]
}).then(x => {
  const b = new x.B();
  b.world();
});
