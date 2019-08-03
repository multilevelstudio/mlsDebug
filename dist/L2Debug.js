"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
function apiUpdateTs(fileName, ts, js, map) {
    if ((!fileName) || (fileName.indexOf("..") >= 0)) {
        throw new Error("invalid fileName");
    }
    if (fileName.endsWith(".ts") === false) {
        throw new Error("error, fileName not .ts");
    }
    if ((!ts) || (!js) || (!map)) {
        throw new Error("error, files dont found");
    }
    let tsFileName = path.resolve(__dirname, "../public/mls/" + fileName);
    let noExt = tsFileName.substr(0, tsFileName.lastIndexOf("."));
    let jsFileName = noExt + ".js";
    let mpFileName = noExt + ".map";
    fs.writeFileSync(tsFileName, ts);
    fs.writeFileSync(jsFileName, js);
    fs.writeFileSync(mpFileName, map);
    return "ok;";
}
exports.apiUpdateTs = apiUpdateTs;
//# sourceMappingURL=L2Debug.js.map