const passport = require('../middleware/passport');
let { userDatabase } = require('../models/usermodel');
const fetch = require('node-fetch');
require('dotenv').config()

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },
  dashboard: (req, res) => {
    res.render("./dashboard", { req });
  },
  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit:
    passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/auth/login",
      session: true
    }),

  registerSubmit: (req, res) => {
    fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&query=cats&per_page=1`)
      .then((val => val.json()))
      .then(val => {
        let profile_picture = val['results'][0].urls.small;
        userDatabase.push({ id: userDatabase.length + 1, name: "test", email: req.body.email, password: req.body.password, profile_pic: profile_picture });
        res.redirect('./login');
      })
      .catch((err) => console.log(err));
  },
  githubLoginSubmit: passport.authenticate("github"),
  githubCB: passport.authenticate('github', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/login',
  }),
  logout: (req, res) => {
    req.logout();
    res.redirect('/auth/login'); //Then redirect user to the login page.
  }
};

module.exports = authController;
