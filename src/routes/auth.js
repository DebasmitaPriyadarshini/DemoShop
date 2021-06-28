const express = require('express');
const { signin, signup, edituserProfile } = require('../controller/auth');
const { validateSigninRequest, validateSignupRequest, isRequestVaildated } = require('../validators/auth');
const { userMiddleware, requireSignin } = require('../common-middleware');
const router = express.Router();

router.post('/user/signin',validateSigninRequest,isRequestVaildated,signin);
router.post('/user/signup',validateSignupRequest,isRequestVaildated,signup);
router.post('/user/editprofile',requireSignin,userMiddleware,edituserProfile);

module.exports = router;
