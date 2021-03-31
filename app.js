const express = require('express');

const app = express();

//ROUTES
app.get("/", (req, res) => {
	res.send("Home page");
});

//LISTENING
app.listen(3000);