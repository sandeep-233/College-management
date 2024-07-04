const User = require("../models/User");
// const Profile = require("../models/Profile");
const bcrypt = require("bcrypt");
const Attachments = require("../models/Attachments");
const {uploadFileToCloudinary} = require("../utils/imageUploader")



// Add new Student or Faculty -> Controller
exports.addMember = async (req, res) => {
	try {
		console.log("user data: ", req.body)
		// Destructure fields from the request body
		const {
			fullName,
			gender,
			email,
			dateOfBirth,
			accountType,
			semester,
			dept,
			joinYear,
			passoutYear,
		} = req.body;

		let password = dateOfBirth;

		// console.log(fullName, gender, email, dateOfBirth, accountType, joinYear, dept)
		// Check if All Details are there or not
		if (
			!fullName ||
			!gender ||
			!email ||
			!dateOfBirth ||
			!accountType ||
			!joinYear ||
			!dept
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
		}

		// Find the most recent OTP for the email
		// const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
		// console.log(response);
		// if (response.length === 0) {
		// 	// OTP not found for the email
		// 	return res.status(400).json({
		// 		success: false,
		// 		message: "The OTP is not valid",
		// 	});
		// } else if (otp !== response[0].otp) {
		// 	// Invalid OTP
		// 	return res.status(400).json({
		// 		success: false,
		// 		message: "The OTP is not valid",
		// 	});
		// }

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);
		// console.log("hashedPassword: ", hashedPassword);

		// Create the user
		// let approved = "";
		// approved === "Instructor" ? (approved = false) : (approved = true);

		// Create the Additional Profile For User
		// const profileDetails = await Profile.create({
		// 	gender: null,
		// 	about: null,
		// 	contactNumber: null,
		// });

		// console.log("ProfileDetails: ", profileDetails);

		// if(!profileDetails) {
		// 	return res.status(400).json({
		// 		success: false,
		// 		message: "User profile details not created",
		// 	});
		// }
        // Create user
		// console.log("User create in Process...")
		const user = await User.create({
			fullName,
			gender,
			email,
			// contactNumber,
			dateOfBirth,
			password: hashedPassword,
			accountType: accountType,
			semester,
			dept: dept,
			joinYear,
			passoutYear,
			image: `https://api.dicebear.com/5.x/initials/svg?seed=${fullName}`,
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered. Please try again.",
		});
	}
};

// Get Student's details based on semester, session and dept 
exports.getAllStudentsDetails = async (req, res) => {
	try {
		
		// console.log("req: ", req.query);
		const {batch, dept, semester} = req.query;

		const studentsDetails = await User.find({ 
			passoutYear: batch,
			dept: dept,
			semester: semester
		})

		// console.log("student details: ", studentsDetails);

		// if user are not found 
		if(!studentsDetails) {
			return res.status(404).json({
				success: false,
				message: "Student's details not found"
			})
		}
	  
		return res.status(200).json({
			success: true,
			data: studentsDetails,
			message: "successfully fetched all students details"
		})
	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching all student details"
		})
	}
}

// Get particular student's details based on their Registration Id
exports.getStudentDetails = async (req, res) => {
	try {
		const {email} = req.query;

		// console.log("email: ", email);

		const studentsDetails = await User.findOne({ 
			email: email
		})

		// console.log("studentDetails: ", studentsDetails);

		// if user are not found 
		if(!studentsDetails) {
			return res.status(404).json({
				success: false,
				message: "Student's details not found"
			})
		}

		return res.status(200).json({
			success: true,
			data: studentsDetails,
			message: "successfully fetched all students details"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching student details"
		})
	}
}

// Get Faculty members details 
exports.getFacultyDetails = async (req, res) => {
	try {
		const {email} = req.query;

		const facultyDetails = await User.findOne({ 
			email: email
		})

		// if user are not found 
		if(!facultyDetails) {
			return res.status(404).json({
				success: false,
				message: "Faculty's details not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: facultyDetails,
			message: "successfully fetched all faculty details"
		})
	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching faculty details"
		})
	}
}

// Get Faculties details 
exports.getFacultiesDetails = async (req, res) => {
	try {

		const facultiesDetails = await User.find({ 
			accountType: "Faculty"
		})

		// if user are not found 
		if(!facultiesDetails) {
			return res.status(404).json({
				success: false,
				message: "Faculty's details not found"
			})
		}
	
		return res.status(200).json({
			success: true,
			data: facultiesDetails,
			message: "successfully fetched all faculties details"
		})
	} catch(error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "Error during, fetching faculties details"
		})
	}
}

// Add PYQ, Notes and Notice
exports.addAttachment = async (req, res) => {
    try {
		console.log("req.body: ", req.body);
		console.log("file: ", req.files)

        // Get all required fields from request body
        let {heading, category, subjectName} = req.body

		// console.log("file: ", req.files)
        const docFile = req.files.file

        // Check if any of the required fields are missing
        if (
            !heading ||
            !docFile ||
			!category
        ) {
            return res.status(400).json({
            success: false,
            message: "All Fields are Mandatory",
            })
        }

		// Check if the user is an instructor
		// const facultyDetails = await User.findById(userId, {
		// 	accountType: "Faculty",
		// })
		// const adminDetails = await User.findById(userId, {
		// 	accountType: "Admin",
		// })

		// if (!facultyDetails && !adminDetails) {
		// 	return res.status(404).json({
		// 	  success: false,
		// 	  message: "Faculty or Admin Details Not Found",
		// 	})
		// }

		// Upload the attachment to Cloudinary
		const attachmentFile = await uploadFileToCloudinary(
			docFile,
			process.env.FOLDER_NAME
		)

		// console.log("Attachment File: ",attachmentFile)
		var today = new Date();
		var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

		// console.log(date);
		
		// Create a new course with the given details
		const newAttachment = await Attachments.create({
			heading,
			file: attachmentFile.secure_url,
			category,
			subjectName,
			attachmentDate: date,
		})

		console.log("New Attachment File: ",newAttachment)

		// Return the new course and a success message
		return res.status(200).json({
			success: true,
			data: newAttachment,
			message: "File added Successfully",
		})

    } catch(error) {
        console.error(error);
		return res.status(500).json({
			success: false,
			message: "Error during file attachment. Please try again.",
		});
    }
}



