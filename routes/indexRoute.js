const express = require("express");
const router = express.Router();
const {ensureAuthenticated, isAdmin, ensureAdmin} = require("../middleware/checkAuth");
const reminderController = require("../controller/reminder_controller");
const adminController = require("../controller/admin_controller");

// Routes start here
router.get("/reminders", ensureAuthenticated, reminderController.list);

router.get("/reminder/new", ensureAuthenticated, reminderController.new);

router.get("/reminder/:id", ensureAuthenticated, reminderController.listOne);

router.get("/reminder/:id/edit", ensureAuthenticated, reminderController.edit);

router.post("/reminder", ensureAuthenticated, reminderController.create);

// Implement this yourself
router.post("/reminder/update/:id", ensureAuthenticated, reminderController.update);
// Implement this yourself
router.post("/reminder/delete/:id", ensureAuthenticated, reminderController.delete);

router.get("/dashboard", ensureAuthenticated, reminderController.dashboard);

router.get("/admin", ensureAdmin, adminController.admin);
router.post("/admin/delete/:id", ensureAuthenticated, adminController.delete);

router.get("/upload", ensureAuthenticated, reminderController.upload);
router.post("/upload/", ensureAuthenticated, reminderController.uploadPost)

module.exports = router;

