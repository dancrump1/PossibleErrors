var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/",function(req,res){
    res.render("index");
  });

  app.get("/survey", function(req, res) {
    db.Survey.findAll({}).then(function(surveys) {
      console.log("HELLO WORLD");
      res.render("survey", {
        msg: "Dog Finder App!",
        surveys: surveys
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/survey/:id", function(req, res) {
    db.Survey.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
