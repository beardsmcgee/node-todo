var mongoose = require('mongoose');
var todoSchema = new mongoose.Schema({
	todo: String
});
mongoose.model('Todo', todoSchema);