var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Survey.findAll({}).then(function (surveyData) {
      res.json(surveyData);
    });
  });

  // This logs the survey.handlebars input
  app.post("/api/examples", function (req, res) {
    console.log(req.body);
    db.Survey.create(req.body).then(function (survey) {
      res.json(survey);
    });
  });

  // This shows the data on /api/starter
  app.get("/api/starter", function (req, res) {
    db.Starter.findAll({}).then(function (surveyData) {
      res.json(surveyData);
    });
  });

  //This logs the starter survey input
  app.post("/api/starter", function (req, res) {
    console.log(req.body);
    db.Starter.create(req.body).then(function (starter) {
      console.log(starter);
      res.json(starter);
    });
  });

  app.get("/api/history", function (req, res) {
    db.Survey.findAll({}).then(function (history) {
      res.json(history);
    });

  });

  app.get("/api/displayall", function (req, res) {
    res.json("Search for a pet!");
    

  });


  // Delete an example by id
  app.delete("/api/examples", function (req, res) {
    console.log(req.body);
    db.Survey.destroy({ where: { id: req.body.id } }).then(function (survey) {
      console.log(survey);
      res.json(survey);
    });
  });


  app.get("/api/examples/:id", function (req, res) {
    console.log(req.body);
    db.Survey.destroy({ where: { id: req.body.id } }).then(function (survey) {
      console.log(survey);
      res.json(survey);
    });
  });


  app.post("/api/recs", function (req, res) {
    var id = req.body.surveyId;
    for (i = 0; i < req.body.recommendations.length; i++) {
      db.Recommendation.create({ StarterId: id, recommendation: req.body.recommendations[i] });
    }
    res.end();
  });

};


