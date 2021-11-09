const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../middleware/checkAuth");
const reminderController = require("../controller/reminder_controller");
const authController = require('../controller/auth_controller');

router.get("/reminders", ensureAuthenticated, reminderController.list);
router.get("/reminder/new", ensureAuthenticated, reminderController.new);
router.get("/reminder/:id", ensureAuthenticated, reminderController.listOne);
router.get("/reminder/:id/edit", ensureAuthenticated, reminderController.edit);
router.post("/reminder/", ensureAuthenticated, reminderController.create);
router.post("/reminder/update/:id", ensureAuthenticated, reminderController.update);
router.post("/reminder/delete/:id", ensureAuthenticated, reminderController.delete);
router.get('/dashboard', ensureAuthenticated, authController.dashboard);

module.exports = router