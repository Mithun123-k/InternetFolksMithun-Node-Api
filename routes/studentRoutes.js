const express = require('express');
const { registerStudent, getAllStudent } = require('../controllers/studentControllers');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route("/student").post(isAuthenticatedUser, authorizeRoles("student"), registerStudent)
router.route("/student").get(isAuthenticatedUser, authorizeRoles("student"), getAllStudent)



module.exports = router;