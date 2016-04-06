var mongoose = require('mongoose');
var url = "mongodb://user:user@ds015720.mlab.com:15720/temptemplolz";
mongoose.connect(url, function(err){
	if(err)	{ console.log("error! " + err); }
	else 	{ console.log("db connected!"); }
})