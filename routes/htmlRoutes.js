var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/survey", function (req, res) {
    db.Survey.findAll({}).then(function (surveys) {
      console.log("HELLO WORLD");
      res.render("survey", {
        msg: "FetPinder",
        surveys: surveys
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/survey/:id", function (req, res) {
    db.Survey.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/starter", function (req, res) {
    res.render("starter", {
      msg: "Fill out your initial survey!"
    });
  });

  //Search History
  app.get("/history", function(req, res){
    db.Survey.findAll({}).then(function(surveys){
      res.render("history", {
        msg: "FetPinder",
        surveys: surveys
      });

    });
  });

  app.get("/searchall", function(req, res){
    res.render("searchall", {
      msg: "Search History"
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
