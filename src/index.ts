import * as express from 'express';
import * as l2Debug from './L2Debug.js';

var router = express.Router();

router.post('/l2save', function (req: express.Request, res: express.Response) {
    try {
        let rc: string = l2Debug.apiUpdateTs(
            req.body.fileName,
            req.body.ts,
            req.body.js,
            req.body.map
        );
        console.log("return 200: ", rc);
        res.header("Access-Control-Allow-Origin", "http://localhost:5000");
        res.status(200).send(rc);
    } catch (e) {
        console.log("return 500: " , e);
        res.status(500).send(e);
    }
});

module.exports = router;
