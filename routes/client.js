const express = require("express");
const ClientService = require("../services/ClientService");
const router = express.Router();

router.get("/", function(req, res, next) {
  var cs = ClientService(req.dbConn);
  cs.getAll(function(err, data) {
    if (err) {
      res.status(500).json(err);
    }

    res.json(data);
  });
});

module.exports = router;
