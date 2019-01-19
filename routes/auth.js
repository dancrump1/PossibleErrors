var authController = require("./authcontroller.js");

module.exports = function (app, passport) {

  app.get("/signup", authController.signup);

  app.get("/signin", authController.signin);

  app.get("/dashboard",authController.dashboard);

  app.get("/logout",authController.logout);

  app.get("/dashboard",isLoggedIn, authController.dashboard);



  app.post("/signup", passport.authenticate("local-signup",{

    successRedirect: "/dashboard",
    failureRedirect: "/signup"
  }));


  app.post("/signin", passport.authenticate("local-signin", {
    successRedirect: "/dashboard"

    
  }

  ));

};

function isLoggedIn(req, res, next) {
 
  if (req.isAuthenticated()){
     
    return next();
         
 
  }else{    
    res.redirect("/signin");
  }
}