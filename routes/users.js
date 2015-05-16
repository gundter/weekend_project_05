var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.isAuthenticated(res.sendFile(path.resolve(__dirname, '../views/users.html')));
});

router.get('/data', function(req, res, next) {
  User.find(function (err, user) {
    if (err) return next(err);
    req.isAuthenticated(res.json(user));
  });
});

module.exports = router;
