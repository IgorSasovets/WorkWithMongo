{
	/*var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/testing";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.createCollection("customers", function(err, res) {
	    if (err) throw err;
	    console.log("Table created!");
	    db.close();
	  });
	}); */
}

{
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var UserSchema = new Schema({
		FirstName: {
			type: String,
			unique: true
		},

		LastName: {
			type: String,
			unique: true
		},

		Email: {
			type: String,
			required: true,
			unique: true
		},

		DateOfBirth: {
			type: Date,
		},

		Password: {

		},

		Role: {
			type: String,

		}
	});

	module.exports = mongoose.model('User', UserSchema);
}