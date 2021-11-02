const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");

const session = require("express-session"); //Using express session

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

// const authRoute = require('./routes/authRoute'); //Auth routes for users who are logged in.
// const indexRoute = require('./routes/indexRoute'); //routes for non-logged in users.


app.get("/reminders", reminderController.list);
app.get("/reminder/new", reminderController.new);
app.get("/reminder/:id", reminderController.listOne);
app.get("/reminder/:id/edit", reminderController.edit);
app.post("/reminder/", reminderController.create);
app.post("/reminder/update/:id", reminderController.update);
app.post("/reminder/delete/:id", reminderController.delete);

// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
app.get("/register", authController.register);
app.get("/login", authController.login);
app.post("/register", authController.registerSubmit);
app.post("/login", authController.loginSubmit);


 //Will implement this later.
// app.use("/", indexRoute);
// app.use("/auth", authRoute); 

app.listen(3001, function () {
  console.log(
    "Server running. Visit: localhost:3001/reminders in your browser 🚀"
  );
});
