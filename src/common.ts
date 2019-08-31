import fs = require('fs');
import path = require('path');

export function createDirRecursively(dir: string) {
    if ((dir.length > 2) && (!fs.existsSync(dir))) {
        createDirRecursively(path.join(dir, ".."));
        fs.mkdirSync(dir);
    }
}