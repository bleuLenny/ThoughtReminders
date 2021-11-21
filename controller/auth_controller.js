const passport = require("../middleware/passport");
const {database} = require("../models/userModel");
const fetch = require("node-fetch");


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

  loginTest: (req, res, next) => {
    next();
  },

  loginSubmit: passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
  }),

  logout: (req, res) => {
    req.logout();
    res.redirect("/auth/login");
  },

  registerSubmit: (req, res,) => {
    // implement
    userInput = req.body;
    fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=cats&per_page=1`)
    .then(val => val.json())
    .then(val => {
      const image = val.results[0];
      const profile_img = image.urls.small;
      console.log(userInput.email)
      database.push({
        id: database.length + 1,
        name: userInput.email.split("@")[0],
        email: userInput.email,
        password: userInput.password,
        profile_img: profile_img,
      });
  
      res.redirect("/auth/login");
    })
    .catch((err) => console.log(err));
  },

  gitLogin: passport.authenticate("github"),
  githubCB: passport.authenticate('github', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/login',
  }),

};

module.exports = authController;
