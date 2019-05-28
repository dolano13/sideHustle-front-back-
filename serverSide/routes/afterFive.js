const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/theBlah", (req, res, next) => {
  res.status(200).json("you have called on blah!!");
});

module.exports = router;
