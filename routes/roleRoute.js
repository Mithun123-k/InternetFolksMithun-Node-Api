const express = require('express');
const { roleCreate, getRoles } = require('../controllers/roleController');

const router = express.Router();

router.route("/role").post(roleCreate)

router.route("/role").get(getRoles)


module.exports = router;