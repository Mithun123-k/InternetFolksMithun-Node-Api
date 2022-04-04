const express = require('express');
const { createSchool, getAllSchool, getAllSchoolStudent } = require('../controllers/schoolControllers');
const { isAuthenticatedUser } = require('../middleware/auth');

const router = express.Router();

router.route("/school").post(isAuthenticatedUser, createSchool)

router.route("/school").get(isAuthenticatedUser, getAllSchool)


router.route("/school/students").get(isAuthenticatedUser, getAllSchoolStudent)


module.exports = router;