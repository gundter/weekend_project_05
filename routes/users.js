var express = require('express');
var router = express.Router();
var path = require('path');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.isAuthenticated(res.sendFile(path.resolve(__dirname, '../views/users.html')));
});

router.get('/data', function(req, res, next) {
  if(req.user.username == 'master'){
    User.find({}, "username firstName lastName email", function (err, user) {
      if (err) return next(err);
      req.isAuthenticated(res.json(user));
    });
  }else{
    User.find({username: new RegExp(req.user.username, "i")}, "username firstName lastName email", function(err, user){
      if (err) return next(err);
      req.isAuthenticated(res.json(user));
    });
  }
});

module.exports = router;
