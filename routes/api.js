const express = require('express');
const router = express.Router();

router.get('/server', function(req, res){
	res.render('server');
});

module.exports = router;
