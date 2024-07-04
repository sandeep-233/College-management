const mongoose = require("mongoose");

// Define the Profile schema
const profileSchema = new mongoose.Schema({
	student: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},

	gender: {
		type: String,
	},
	about: {
		type: String,
		trim: true,
	},
	contactNumber: {
		type: Number,
		trim: true,
	},
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);