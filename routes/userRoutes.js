const express = require('express');
const { registerUser, loginUser, logOut, getAllUser, getsingleUser } = require('../controllers/userControllers');

const router = express.Router();

router.route("/user/signup").post(registerUser)
router.route("/user/signin").post(loginUser)
router.route("/logout").get(logOut)
router.route("/user").get(getAllUser)
router.route("/user/:id").get(getsingleUser)

module.exports = router;