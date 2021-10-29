let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    let reminderToFind = req.params.id

    let modifiedReminder = { // Takes the modified reminder
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      completed: Boolean(req.body.completed)
    }

    let searchResult = (database.cindy.reminders.find((reminder) => { //We find the specific reminder that we are updating
      return reminder.id == reminderToFind 
    }))

    let indexOfReminder = database.cindy.reminders.indexOf(searchResult) //Look for the index of the updated reminder
    database.cindy.reminders[indexOfReminder] = modifiedReminder //Replaces the reminder data with the new one.
    res.redirect("/reminders");
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id
    let searchResult = (database.cindy.reminders.find((reminder) => { //We find the specific content of the wanted reminder
      return reminder.id == reminderToFind
    }))

    let indexOfReminder = database.cindy.reminders.indexOf(searchResult) //Look for the index of the specific reminder
    database.cindy.reminders.pop(indexOfReminder) //Push out the reminder
    res.redirect("/reminders");
  },
};

module.exports = remindersController;
