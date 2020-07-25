const fs = require("fs");
const file = fs.readFileSync("types/opencascade.d.ts", "utf8").replace(/UnderscoresCanCauseProblems/g, "_");
fs.writeFileSync("dist/opencascade.d.ts", file);
