var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index');
});
router.get('/practioner', function(req, res, next) {
  res.render('user/practioner');
});
router.get('/index', function(req, res, next) {
  res.render('admin/index');
});
router.get('/forgotpassword', function(req, res, next) {
  res.render('user/forgotpassword');
});
router.get('/patient', function(req, res, next) {
  res.render('user/patient');
});





module.exports = router;
