var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Survey.findAll({}).then(function(surveyData) {
      res.json(surveyData);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    console.log(req.body);
    db.Survey.create(req.body).then(function(survey) {
      res.json(survey);
    });
  });

  // Delete an example by id
  app.delete("/api/examples", function(req, res) {
    console.log(req.body);
    db.Survey.destroy({ where: { id: req.body.id } }).then(function(survey) {
      console.log(survey);
      res.json(survey);
    });
  });
};
