const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/checkAuth');
//Checks for a session.


router.get("/", (req, res) => {
  console.log('Home page')
  res.send("Lands page. hello");
});

router.get('/reminders', ensureAuthenticated, (req, res) => {
  console.log('Authenticated')
})

module.exports = router