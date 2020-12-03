"use strict";

var express = require("express");

var router = express.Router();

var data = require("../models/data");
/* 
path :  /user
*/


router.get("/", function (req, res) {
  res.render("user", {
    users: data.userList,
    id: ""
  });
});
router.get("/:id", function (req, res) {
  res.render("user", {
    users: data.userList,
    id: req.params.id
  });
});
module.exports = router;