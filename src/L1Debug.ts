import fs = require('fs');
import path = require('path');
import * as common from "./common"


export function apiUpdateTs(prj: string, fileName: string, ts: string, js: string, map: string): string {

    if ((!fileName) || (fileName.indexOf("..") >= 0)) {
        throw new Error("invalid fileName");
    }

    if (fileName.endsWith(".ts") === false) {
        throw new Error("error, fileName not .ts");
    }

    if ((!prj) || (!ts) || (!js) || (!map)) {
        throw new Error("error, files dont found");
    }

    let prjID = +prj;

    let tsFileName = path.resolve(__dirname, "../public/mls/" + prjID + "/" + fileName.replace("_", "/")); // ex: public/mls/100101/api/index.ts
    let noExt = tsFileName.substr(0, tsFileName.lastIndexOf("."));
    let jsFileName = noExt + ".js";
    let mpFileName = noExt + ".js.map";

    common.createDirRecursively( path.dirname(tsFileName) );

    fs.writeFileSync(tsFileName, ts);
    fs.writeFileSync(jsFileName, js);
    fs.writeFileSync(mpFileName, map);

    return "ok;";
}

