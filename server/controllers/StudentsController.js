const Attachments = require("../models/Attachments");
const Attendence = require("../models/Attendence");
const Marks = require("../models/Marks");
const Payment = require("../models/Payment");

// Get subject wise PYQ files
exports.getPYQfiles = async (req, res) => {
	try {
		const {subject} = req.query;
		console.log("subject: ", subject);

		const pyqfileDetails = await Attachments.find({ 
			subjectName: subject,
			category: "PYQ"
		})

		// if file are not found 
		if(!pyqfileDetails) {
			return res.status(404).json({
				success: false,
				message: "File's details not found"
			})
		}

		console.log("pyqFile: ", pyqfileDetails);

		return res.status(200).json({
			success: true,
			data: pyqfileDetails,
			message: "successfully fetched all file's details"
		})
	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching PYQ Files"
		})
	}
}

// Get subject wise notes
exports.getNotesFiles = async (req, res) => {
	try {
		const {subject} = req.query;

		const notesDetails = await Attachments.find({ 
			subjectName: subject,
			category: "Notes"
		})

		// if file are not found 
		if(!notesDetails) {
			return res.status(404).json({
				success: false,
				message: "Notes's details not found"
			})
		}
		
		console.log("notes: ", notesDetails);

		return res.status(200).json({
			success: true,
			data: notesDetails,
			message: "successfully fetched all notes details"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching Notes files"
		})
	}
}

// Get my marks details, subject wise
exports.getSubjectMarks = async (req, res) => {
	try {
		const {subject, email} = req.query;

		const marksDetails = await Marks.find({ 
			subject: subject,
			email: email
		})

		// if file are not found 
		if(!marksDetails) {
			return res.status(404).json({
				success: false,
				message: "Marks details not found"
			})
		}
		
		console.log("Marks Details: ", marksDetails);

		return res.status(200).json({
			success: true,
			data: marksDetails,
			message: "successfully fetched all marks details"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching marks details"
		})
	}
}

// add attendence
exports.addAttendence = async (req, res) => {
	try {
		// Destructure fields from the request body
		const {
			email,
			faculty,
			student,
			subject,
			batch,
			semester,
			rollNo,
			dept
		} = req.body;

		console.log("req.body: ", req.body);

		// Check if All Details are there or not
		if (
			!email ||
			!faculty ||
			!student ||
			!subject ||
			!batch ||
			!rollNo ||
			!semester ||
			!dept
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}

		var today = new Date();
		var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

		// console.log(date);

        // add attendence
		const user = await Attendence.create({
			email: email,
			facultyName: faculty,
			studentName: student,
			subjectName: subject,
			batch: batch,
			rollNo: rollNo,
			semester: semester,
			attendenceDate: date,
			dept: dept
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User attencence successfully add",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "User attendence can not added. Please try again.",
		});
	}
};

// Get my Attendence details subject wise 
exports.getMyAttendence = async (req, res) => {
	try {
		const {semester, dept, subject, email} = req.query;
		// console.log("req.query", req.query);

		const myAttendence = await Attendence.find({
			email: email, 
			semester: semester,
			dept: dept,
			subjectName: subject
		})

		// if file are not found 
		if(!myAttendence) {
			return res.status(404).json({
				success: false,
				message: "attendence's details not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: myAttendence,
			message: "successfully fetched all attendence details"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching my attendence"
		})
	}
}


// add Payment details 
exports.addPaymentDetails = async (req, res) => {
	try {
		// Destructure fields from the request body
		const {
			email,
			student,
			batch,
			semester,
			dept
		} = req.body;

		// console.log("req.body: ", req.body);

		// Check if All Details are there or not
		if (
			!email ||
			!student ||
			!batch ||
			!semester ||
			!dept
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}

		var today = new Date();
		var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

		// console.log(date);

        // add attendence
		const user = await Payment.create({
			email: email,
			studentName: student,
			batch: batch,
			semester: semester,
			paymentDate: date,
			dept: dept
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User payment successfully add",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "User Payment can not added. Please try again.",
		});
	}
};

exports.getPaymentDetails = async (req, res) => {
	try {
		const {email} = req.query;
		// console.log("req.query", req.query);

		const myPayment = await Payment.find({
			email: email, 
		})

		// if file are not found 
		if(!myPayment) {
			return res.status(404).json({
				success: false,
				message: "payment's details not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: myPayment,
			message: "successfully fetched all payment details"
		})

	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching my payment details"
		})
	}
}

