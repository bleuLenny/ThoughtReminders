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
const indexRoute = require('./routes/indexRoute');
const authRoute = require('./routes/authRoute');

//Middlware
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRoute);
app.use("/auth", authRoute);

app.listen(3001, function () {
  console.log(
    "Server running. Visit: localhost:3001/ in your browser 🚀"
  );
});