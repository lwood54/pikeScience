const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.handlebars', {
    pageTitle: 'Using pageTitle variable!'
  });
});

module.exports = router;
