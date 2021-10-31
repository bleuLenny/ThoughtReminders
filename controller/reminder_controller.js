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

    database.cindy.reminders.find((reminder) => { //We find the specific reminder that we are updating
      if (reminder.id == reminderToFind) {
        reminder.title = req.body.title
        reminder.description = req.body.description;
        reminder.completed = Boolean(req.body.completed);
      };
    });

    res.redirect("/reminders");
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id
    database.cindy.reminders.findIndex(reminderIndex => { //We find the specific index of the reminder
      if (reminderIndex.id == reminderToFind) { //If the reminder id matches, we then pop the specific reminder.
        database.cindy.reminders.pop(reminderIndex)
      };
    });


    res.redirect("/reminders");
  },
};

module.exports = remindersController;
