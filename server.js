'use strict';

var express = require('express');
var app = express();
var helper = require('./helper/helper.js');


//Route for valid URL with Date Param
app.use('/:date', function(req, res) {

	// Get date from date param
	var date = req.params.date,
			//Variable to hold Natural Date 
			natural;

	// Check if date is a valid Unix Timestamp or Natual date
	if(helper.dateIsValid(date)) {
		// If date is Natural
		if(isNaN(parseInt(date))) {
			//JSON response with formated dates
			res.end(JSON.stringify({
				unix: Date.parse(date),
				natural: helper.dateFormat(Date.parse(date))
			}));

			// If date is Unix
		} else {
			//JSON response with formated dates
			res.end(JSON.stringify({
				unix: parseInt(date),
				natural: helper.dateFormat(date)
			}));
		}
		// If date param is not a Unix or Natural Date
	} else {
		res.end(JSON.stringify({
			unix: null,
			natural: null
		}));
	}
});

//Respond to any other routes entered
app.use("*", function(req, res) {
	res.end("Please enter a parameter in your URL: '/<date here>'");
});

//Error handler for bad paramters  ie. "%"
app.use(function(err, req, res, next) {
	console.log(err);
	res.end("The URL you entered was invalid. Please enter a URL with a date parameter: '/<date here>'");
});

app.listen(3000);
console.log('Server listening on port 3000');


















