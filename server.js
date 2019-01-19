require("dotenv").config();
var models = require("./models");
var passport = require("passport");
var express = require("express");
var app = express();

var exphbs = require("express-handlebars");
var session = require("express-session");
var bodyParser = require("body-parser");
var env = require("dotenv").load();
var db = require("./models");

var PORT = process.env.PORT || 3000;
 
// Middleware
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());
app.use(express.static("public"));

// BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Passport
app.use(session({ secret: "keyboard cat",resave: true, saveUninitialized:true})); 
 
app.use(passport.initialize());
 
app.use(passport.session());

// Handlebars
app.set("views","./views");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  }));
app.set("view engine", "handlebars");


// Routes
require("./config/passport/passport")(passport, models.user);
require("./routes/auth")(app,passport);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
