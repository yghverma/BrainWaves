var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/results', function(req, res, next) {
  res.render('results', { title: 'Results' });
});

module.exports = router;
