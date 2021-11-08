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
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 600000,
    },
  })
);

const passport = require('./middleware/passport');
const indexRoute = require('./routes/indexRoute');
const authRoute = require('./routes/authRoute');
const adminRoute = require('./routes/adminRoute');

//Middlware
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(`User details are: `);
  // console.log(req.user);
  console.log(req.session)
  // console.log('Session time:', req.session['cookie']['originalMaxAge']) //Session cookie. Set this to 0 to revoke session.
  next();
});

app.use("/", indexRoute);
app.use("/auth", authRoute);
app.use("/admin", adminRoute);



app.listen(3001, function () {
  console.log(
    "Server running. Visit: localhost:3001/ in your browser 🚀"
  );
});