const express = require("express");
const router = express.Router();
const {ensureAuthenticated, isAdmin} = require("../middleware/checkAuth");
const reminderController = require("../controller/reminder_controller");

// Routes start here
router.get("/reminders", ensureAuthenticated, reminderController.list);

router.get("/reminders/new", ensureAuthenticated, reminderController.new);

router.get("/reminders/:id", ensureAuthenticated, reminderController.listOne);

router.get("/reminders/:id/edit", ensureAuthenticated, reminderController.edit);

router.post("/reminders", ensureAuthenticated, reminderController.create);

// Implement this yourself
router.post("reminders/update/:id", ensureAuthenticated, reminderController.update);
// Implement this yourself
router.post("reminders/delete/:id", ensureAuthenticated, reminderController.delete);

router.get("/dashboard", ensureAuthenticated, reminderController.dashboard);

module.exports = router;