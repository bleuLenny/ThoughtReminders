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


// Routes start here
const passport = require("passport");
const indexRoute = require('./routes/indexRoute'); //routes for non-logged in users.
const authRoute = require('./routes/authRoute'); //Auth routes for users who are logged in.

//Middlware
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// app.get("/reminders", reminderController.list);
// app.get("/reminder/new", reminderController.new);
// app.get("/reminder/:id", reminderController.listOne);
// app.get("/reminder/:id/edit", reminderController.edit);
// app.post("/reminder/", reminderController.create);
// app.post("/reminder/update/:id", reminderController.update);
// app.post("/reminder/delete/:id", reminderController.delete);

// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
// app.get("/register", authController.register);
// app.post("/register", authController.registerSubmit);
// app.post("/login", authController.loginSubmit);

app.use((req, res, next) => {
  console.log(`User details are: `);
  console.log(req.user);

  console.log("Entire session object:");
  console.log(req.session);

  console.log(`Session details are: `);
  console.log(req.session.passport);
  next();
});

//Will implement this later.
app.use("/", indexRoute);
app.use("/auth", authRoute);

app.listen(3001, function () {
  console.log(
    "Server running. Visit: localhost:3001/reminders in your browser 🚀"
  );
});
