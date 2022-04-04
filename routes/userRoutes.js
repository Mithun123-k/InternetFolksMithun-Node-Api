const express = require('express');
const { registerUser, loginUser, logOut, getAllUser, getsingleUser } = require('../controllers/userControllers');

const router = express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logOut)
router.route("/getallusers").get(getAllUser)
router.route("/getsingleusers/:id").get(getsingleUser)

module.exports = router;