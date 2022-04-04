const express = require('express');
const { createSchool, getAllSchool, getAllSchoolStudent } = require('../controllers/schoolControllers');
const { isAuthenticatedUser } = require('../middleware/auth');

const router = express.Router();

router.route("/school/create").post(isAuthenticatedUser, createSchool)

router.route("/school/get").get(isAuthenticatedUser, getAllSchool)


router.route("/school/student").get(isAuthenticatedUser, getAllSchoolStudent)


module.exports = router;