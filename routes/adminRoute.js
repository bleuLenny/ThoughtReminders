const express = require("express");
const router = express.Router();
const { isAdmin } = require('../middleware/checkAuth');
const adminController = require('../controller/admin_controller');


router.get('/', isAdmin, adminController.login);

module.exports = router