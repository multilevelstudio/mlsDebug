import * as express from 'express';
import * as l2Debug from './L2Debug.js';
import * as l1Debug from './L1Debug.js';

var router = express.Router();

router.post('/l2save', function (req: express.Request, res: express.Response) {

    try {
        let origin: string = req.headers.origin ? <string>req.headers.origin : "";
        if ((origin !== "https://multilevelstudio.com") && (!origin.startsWith("http://localhost"))) {
            res.status(500).send("error, invalid origin");
            return;
        }

        let rc: string = l2Debug.apiUpdateTs(
            req.body.fileName,
            req.body.ts,
            req.body.js,
            req.body.map
        );
        console.log("return 200: ", rc);
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send(rc);
    } catch (e) {
        console.log("return 500: " , e);
        res.status(500).send(e);
    }

});

router.post('/l1save', function (req: express.Request, res: express.Response) {

    try {
        let origin: string = req.headers.origin ? <string>req.headers.origin : "";
        if ((origin !== "https://multilevelstudio.com") && (!origin.startsWith("http://localhost"))) {
            res.status(500).send("error, invalid origin");
            return;
        }

        let rc: string = l1Debug.apiUpdateTs(
            req.body.prjID,
            req.body.fileName,
            req.body.ts,
            req.body.js,
            req.body.map
        );
        console.log("return 200: ", rc);
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send(rc);
    } catch (e) {
        console.log("return 500: ", e);
        res.status(500).send(e);
    }

});


module.exports = router;
