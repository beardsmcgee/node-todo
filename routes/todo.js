var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");

var router = express.Router();

//REST
router.route('/')
	//get all todo
	.get(function(req, res, next){
		mongoose.model('Todo').find({}, function(err, todos){
			if(err) { return console.error(err) }
			else {
				res.json(todos);
			}
		})
	})
	.post(function(req, res){
		var todo = req.body.todo;
		mongoose.model('Todo').create({
			todo : todo
		}, function(err, todo){
			if(err) { res.send('error'); }
			else {
				console.log("created! " + todo);
				res.send('worked!');
			}
		})
	})
	

module.exports = router;