module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/auth/login");
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/reminders");
  },
  ensureAdmin: (req, res, next) => {
    user = req.user;
    if(req.isAuthenticated()){
      if(user.role === "admin"){
        return next();
      }
      res.redirect("/reminders");
    }
    res.redirect("/auth/login");
  }
};
