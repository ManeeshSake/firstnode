var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
 let a = Math.log2(req.query.param) 
 let b = Math.cosh(req.query.param) 
 let c = Math.cosh(req.query.param) 
  res.send(`Values are ${a}, ${b} and ${c}`);
});

module.exports = router;
