const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log("controllers console: ", hbsObject);
      res.render("index", hbsObject);
    })
  });


  router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      res.json({ id: result.insertId });
      console.log('router post boss ' + res);
    });
  });


  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("put is working okay boss", condition);
  
    burger.updateOne(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    )
  });

module.exports = router;