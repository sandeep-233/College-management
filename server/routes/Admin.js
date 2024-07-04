// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  addMember,
  getAllStudentsDetails,
  getStudentDetails,
  getFacultyDetails,
  addAttachment,
  getFacultiesDetails
} = require("../controllers/AdminController")


// Route for adding new member
router.post("/addNewMember", addMember)

// Route for getting all student details based on semester and batch
router.get("/allStudentsDetails", getAllStudentsDetails)

// Route for getting particular student details
router.get("/studentDetails", getStudentDetails)

// Route for getting faculty details
router.get("/facultyDetails", getFacultyDetails)

// Route for getting faculty details
router.get("/facultiesDetails", getFacultiesDetails)

// Route for adding attachments (notices, notes, PYQ)
router.post("/addAttachment", addAttachment)

// Export the router for use in the main application
module.exports = router