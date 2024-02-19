const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({ 
	task: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
}, {
	timestamps: true,
	versionKey: false,
});

const todoList = mongoose.model("todo", todoSchema);

module.exports = todoList;
