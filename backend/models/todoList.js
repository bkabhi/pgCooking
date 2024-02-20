const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({ 
	task: { type: String, required: true },
	price: { type: Number, required: true },
	paidBy: { type: String, required: true },
	createdBy: { type: String, required: false},
}, {
	timestamps: true,
	versionKey: false,
});

const todoList = mongoose.model("todo", todoSchema);

module.exports = todoList;
