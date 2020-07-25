const fs = require("fs");
const file = fs.readFileSync("opencascade.idl", "utf8").replace(/_/g, "UnderscoresCanCauseProblems");
fs.mkdirSync("types", {recursive: true});
fs.writeFileSync("types/opencascade.idl", file);
