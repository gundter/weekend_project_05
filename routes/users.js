var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(req.isAuthenticated());
});

module.exports = router;
