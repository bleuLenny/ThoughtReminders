let database = require("../database");
const imgur = require('imgur');
const path = require('path');
const fs = require('fs');

let remindersController = {
  list: (req, res) => {
    const userName = req.user.name;
    res.render("reminder/index", {
      reminders: database.cindy.reminders,
    });
  },
  dashboard: (req, res) => {
    res.render("./dashboard", { req });
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
    let reminderToFind = req.params.id; // find the id of item need to update

    // update the old data with new data that user typed in
    database.cindy.reminders.find(reminder => {
      if (reminder.id == reminderToFind) {
        reminder.title = req.body.title;
        reminder.description = req.body.description;
        reminder.completed = (req.body.completed === "true");
      }
    });

    res.redirect("/reminders");
  },

  delete: (req, res) => {
    // Implement this code
    let reminderToFind = req.params.id; //Takes reminder ID of specific reminder
    database.cindy.reminders.findIndex(reminderIndex => {
      if (reminderIndex.id == reminderToFind) { //If the reminder id is found, pop out the specific reminder
        database.cindy.reminders.pop(reminderIndex);
      }
    });

    res.redirect("/reminders");
  },

  dashboard: (req, res) => {
    res.render("dashboard", {req});
  },

  admin: (req, res) => {
    res.render("admindashboard", {req});
  },

  upload: (req, res) => {
    res.render("upload_img", {user: req.user});
  },

  uploadImage: async function (req,res) {
    const file = req.file;
    let user = req.user;
    try {
        const url = await imgur.uploadFile(path.resolve(__dirname, '../'+file.path));
        fs.unlinkSync(path.resolve(__dirname, '../'+file.path));
        user.profile_img = url.link;
        user.profile_img_des = url.description;
      } catch (error) {
        console.log("error: ", error);
      }
      
    res.render("upload_img", {user});
  }
};

module.exports = remindersController;
