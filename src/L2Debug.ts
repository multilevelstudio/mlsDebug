import fs = require('fs');
import path = require('path');

export function apiUpdateTs(fileName: string, ts: string, js: string, map: string): string {

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
    let mpFileName = noExt + ".js.map";

    fs.writeFileSync(tsFileName, ts);
    fs.writeFileSync(jsFileName, js);
    fs.writeFileSync(mpFileName, map);

    return "ok;";
}
