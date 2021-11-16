let database = require("../models/userModel");

let adminController = {
  admin: (req, res) => {
    const user = req.user;
    const sessions = {};
    // username = database.find(user => user.id == se)

    req.sessionStore.all((err, session) => {
      if(err) {
        return console.log(err.message);
      }

      for (const [key, value] of Object.entries(session)) {
        sessions[value.passport.user] = key;
      }
      console.log(sessions);
      console.log(user.id)
      res.render("admindashboard", {user, sessions});
    });
    
  },

  delete: (req, res) => {
    // Implement this code
    // let reminderToFind = req.params.id; //Takes reminder ID of specific reminder
    // database.cindy.reminders.findIndex(reminderIndex => {
    //   if(reminderIndex.id == reminderToFind){ //If the reminder id is found, pop out the specific reminder
    //     database.cindy.reminders.pop(reminderIndex);
    //   }
    // });

    let sessionID = req.params.id;
    req.sessionStore.destroy(sessionID);
    res.redirect("/admin");
  },
};

module.exports = adminController;
