var express = require('express');
var router = express.Router();
const Questions = require('../models/questions');
let indexControllers = require('../controllers/index-controllers');

router.get('/', indexControllers.get);

router.post('/', indexControllers.post)

module.exports = router;
