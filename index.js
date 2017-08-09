// var express = require("express");
// var dbConfig = require("./config/db");
// var Connection = require("tedious").Connection;
// var tp = require("tedious-promises");
// var TYPES = require("tedious").TYPES;
// var ConnectionPool = require("tedious-connection-pool");
// var poolConfig = {}; // see tedious-connection-pool documentation
// var pool = new ConnectionPool(poolConfig, dbConfig.dev);
// var ClientService = require("./services/ClientService");
// tp.setConnectionPool(pool); // global scope
// var app = express();

// const passport = require("passport");
// const Auth0Strategy = require("passport-auth0");

// // Configure Passport to use Auth0
// const strategy = new Auth0Strategy(
//   {
//     domain: "remarkablehealth-temp.auth0.com",
//     clientID: "vMkuKEcVCDbMqsfeKK08__ARC0Z4DsZB",
//     clientSecret:
//       "s0THL5Po2LGXIWqDk_qA2IURKlWf2EPGHLEovo-HKzA73U7M1-wXCDjjti2iKiir",
//     callbackURL: "http://localhost:3000/callback"
//   },
//   (accessToken, refreshToken, extraParams, profile, done) => {
//     return done(null, profile);
//   }
// );

// passport.use(strategy);

// // This can be used to keep a smaller payload
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

// // ...
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(function(req, res, next) {
//   req.tp = tp;
//   next();
// });

// app.get("/", function(req, res) {
//   res.json(false);
// });

// app.get("/clients", function(req, res) {
//   var cs = ClientService(req.tp);
//   cs.getAll(function(err, data) {
//     if (err) {
//       res.status(500).json(err);
//     }

//     res.send(data);
//   });
// });
var app = require("./app");

app.listen(3000, function() {
  console.log("🌎 Example app listening on port 3000!");
});
