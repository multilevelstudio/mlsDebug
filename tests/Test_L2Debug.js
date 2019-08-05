"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test = require("tape");
const l2Debug = require("../dist/L2Debug");
const request = require("request");
test("Unit: Saving L2Debug", function (t) {
    t.plan(1);
    let rc = l2Debug.apiUpdateTs("test.ts", "// a ts file", "// a js file", "// a map file");
    t.equal(rc, "ok;", "Return ok;");
    t.end();
});
test("Integration: Sending Post L2Debug", function (t) {
    t.plan(2);
    let options = {
        url: 'http://localhost:5015/l2save',
        form: {
            fileName: "test2.ts",
            ts: "// test2",
            js: "// test2",
            map: "// test2"
        },
        method: "POST"
    };
    request(options, function (err, response, body) {
        if (err) {
            t.ok(false, "error " + err);
        }
        else {
            if (response.statusCode !== 200) {
                t.ok(false, "error, statusCode " + response.statusCode);
            }
            else {
                t.ok(response.body === "ok;", "Return 'ok' dont found from html send;\n" + response.statusCode.toString() + ", " + response.body);
            }
        }
        t.end();
    });
});
test("Integration: Sending Post L2Debug, Err", function (t) {
    t.plan(3);
    let options = {
        url: 'http://localhost:5015/l2save',
        form: {
            fileName: "test2.ts2",
            ts: "// test2",
            js: "// test2",
            map: "// test2"
        },
        method: "POST"
    };
    request(options, function (err, response, body) {
        if (err) {
            t.ok(false, "error " + err);
        }
        else {
            t.equal(response.statusCode, 500, "error, statusCode " + response.statusCode);
        }
        t.end();
    });
});
