const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
	Name: {type: String,
		required: true},
	RegNumber: {type: Number,
		required: true,
		unique: true}
	/*
	RollNumber: Number,
	Class: String,
	Department: String,
	Address: String*/
});

module.exports = mongoose.model("Student", StudentSchema);