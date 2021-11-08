const express = require("express");
const router = express.Router();
const {ensureAuthenticated} = require("../middleware/checkAuth");
const reminderController = require("../controller/reminder_controller");


router.get("/reminders",ensureAuthenticated, reminderController.list);
router.get("/reminder/new", reminderController.new);
router.get("/reminder/:id", reminderController.listOne);
router.get("/reminder/:id/edit", reminderController.edit);
router.post("/reminder/", reminderController.create);
router.post("/reminder/update/:id", reminderController.update);
router.post("/reminder/delete/:id", reminderController.delete);

module.exports = router