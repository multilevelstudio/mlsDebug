'use strict';
var express = require('express');
var router = express.Router();

var l2Debug = require('./../dist/L2Debug.js');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/l2save', function (req, res) {
    res.status(200).send(l2Debug.l2save(req.query.fileName));
});

module.exports = router;
