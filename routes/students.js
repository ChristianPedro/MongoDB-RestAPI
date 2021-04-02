const express = require('express');
const router = express.Router();
const Student = require('../models/Students');


//GET students
router.get("/", async (req, res) => {
	try {
		const allStudents = await Student.find();
		res.json(allStudents);
	} catch (err) {
		res.status(500).json({message: err.message});
	}
});

//POST students
router.post('/', async (req, res) => {
	console.log(req.body);
	const newstudent = new Student({
		Name: req.body.Name,
		RegNumber: req.body.RegNumber
	});
	
	try {
		const result = await newstudent.save();
		res.status(201).json(result);
	} catch (err) {
		res.status(400).json({message: err.message});
	}
});


//GET RegNum
router.get("/:regNum", async (req, res) => {
	try {
	const regStudents = await Student.find({RegNumber: req.params.regNum});
	res.status(200).json(regStudents);
	console.log(regStudents);
	} catch (err) {
		res.status(500).json({message: err.message});
	}
});
//Deleting Students
router.delete("/:regNum", async (req, res) => {
	try {
		const deleteStudent = await Student.find({RegNumber: req.params.regNum});
		if (deleteStudent == null) {
			return res.status(404).json({message: 'cannot find Student. This registration number does not exist.'});
		}
		//finish sending back student
		await Student.deleteOne({ RegNumber: req.params.regNum});
		res.json({message: deleteStudent});
	} catch (err) {
		res.status(500).json(err.message);
	}
});


module.exports = router;