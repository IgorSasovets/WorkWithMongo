{
	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
	var mongoose = require('mongoose');
	var User = require('./User.model');

	var db = 'mongodb://localhost:27017/testing/';
	
	mongoose.connect(db, function (err) {
		if (err) return console.error(err);
		console.log('Successfully connected to MongoDB');
	});

	//Template to add new user

 /*	var testUser = new User ({
		firstname: 'Diana',
		lastname: 'Smith',
		email: 'diana@gmail.com',
		dateofbirth: '2012-08-12',
		password: 'diana123',
		role: 'viewer'
	}); */

	//Add new user

/*	testUser.save(function(err) {
		if (err) return console.error(err);
	}); */ 

	//Print out list of all users

	/*	Useful tip
	* Parameter 'data' in the next function - an array of documents.
	* To get all information from db type: console.log(data.toString());
	* To print out some parameter type: 
	* 		console.log(data[i].<parameter_name>.toString());
	*/

    User.find(function(err, data) {
    	if (err) return console.error(err);
    	
    	//Print out names
    	for (let i = 0; i < data.length; i++)
    		console.log(data[i].firstname.toString());  	
    }); 

    //Find one user with defined firstname

	/*User.findOne({ firstname: 'John' }, function (err, user) {
		if (err) return console.error(err);

		//Print out all data about user
		console.log(user.toString());

		//Print out user name only
		console.log(user.firstname.toString());

		//Example of successfull comparing
		user.comparePassword('john123', function (err, isMatch) {
			if (err) return console.error(err);
			console.log('john123: ', isMatch);
		});

		//Unsuccessfull comparing example
		user.comparePassword('123john', function (err, isMatch) {
			if (err) return console.error(err);
			console.log('123john: ', isMatch);
		}); 
	}); */

	var port = 8080;

	app.listen(port, function() {
		console.log(`app listening on port ${port}`);
	});
}