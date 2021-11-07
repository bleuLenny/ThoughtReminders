const express = require("express");
const router = express.Router();
const {ensureAuthenticated, isAdmin} = require("../middleware/checkAuth");
const reminderController = require("../controller/reminder_controller");

// Routes start here
router.get("/", ensureAuthenticated, reminderController.list);

router.get("/new", reminderController.new);

router.get("/:id", reminderController.listOne);

router.get("/:id/edit", reminderController.edit);

router.post("/", reminderController.create);

// Implement this yourself
router.post("/update/:id", reminderController.update);

// Implement this yourself
router.post("/delete/:id", reminderController.delete);

module.exports = router;