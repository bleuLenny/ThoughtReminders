const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const session = require("express-session"); //Using express session
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret", //Will fix this. This is temporariy. (This is to make the cookie that is stored in the browser signed) to avoid it being tampered with.
    resave: true,
    saveUninitialized: false,
  })
)
const passport = require('./middleware/passport');
const { forwardAuthenticated, ensureAuthenticated } = require("./middleware/checkAuth");
const authController = require('./controller/auth_controller');
const reminderController = require('./controller/reminder_controller');
//Middlware
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes start here
app.get("/reminders", ensureAuthenticated, reminderController.list);
app.get("/reminder/new", reminderController.new);
app.get("/reminder/:id", reminderController.listOne);
app.get("/reminder/:id/edit", reminderController.edit);
app.post("/reminder/", reminderController.create);
app.post("/reminder/update/:id", reminderController.update);
app.post("/reminder/delete/:id", reminderController.delete);

// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
app.get("/register", forwardAuthenticated, authController.register);
app.post('/register', authController.registerSubmit);

app.get('/login', forwardAuthenticated, authController.login);
app.post('/login', authController.loginSubmit);
app.get('/logout', ensureAuthenticated, authController.logout);


app.listen(3001, function () {
  console.log(
    "Server running. Visit: localhost:3001/reminders in your browser 🚀"
  );
});
