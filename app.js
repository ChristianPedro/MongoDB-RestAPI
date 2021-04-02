const express = require('express');
const Mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

//Create express app
const app = express();

//JSON middleware
app.use(bodyParser.json());

//connect to DB
Mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true});
const db = Mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));
console.log('connected to db');

//import student routes
const studentRoute = require('./routes/students');
app.use('/students', studentRoute);

//ROUTES
app.get("/", (req, res) => {
	res.send("Home page");
});

//LISTENING
app.listen(3000);