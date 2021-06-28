const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { userinitialData, userData } = require('../controller/userinitialdata');
const router = express.Router();


router.get('/userinitialdata', userinitialData);
router.get('/userData',requireSignin,userMiddleware,userData);

module.exports = router;
