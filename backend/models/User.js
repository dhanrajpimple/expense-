const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	date:{
   type:Date,
    require:false,
	},
	amount: {
		type: Number,
		required: true,
	}
});

module.exports = mongoose.model("User", userSchema);
