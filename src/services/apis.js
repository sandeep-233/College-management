const BASE_URL = process.env.REACT_APP_BASE_URL

// USER ENDPOINTS
export const userEndpoints = {
  GET_NOTICES_API: BASE_URL + "/user/notices",
  ADD_INTERNSHIP_OPPORTUNITY_API: BASE_URL + "/user/addOpportunity",
  GET_OPPORTUNITIES_API: BASE_URL + "/user/opportunities",
  LOGIN_API: BASE_URL + "/user/login",
  GET_STUDENTS_MARKS_DETAILS : BASE_URL + "/user/studentsMarks",
  ADD_QUERIES: BASE_URL + "/user/addQueries",
  GET_QUERIES: BASE_URL + "/user/queries",
  ADD_QUERIES_ANS: BASE_URL + "/user/addQueriesAns",
  GET_QUERIES_ANS: BASE_URL + "/user/queriesAns",
}

// PROFILE ENDPOINTS
// export const profileEndpoints = {
//   GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
//   GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
//   GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
// }

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  GET_PYQ_API: BASE_URL + "/students/pyqFiles",
  GET_NOTES_API: BASE_URL + "/students/notesFiles",
  GET_SUBJECT_MARKS_API: BASE_URL + "/students/marksDetails",
  ADD_ATTENDENCE_API: BASE_URL + "/students/addAttendence",
  GET_ATTENDENCE_API: BASE_URL + "/user/attendence",
  GET_MY_ATTENDENCE_API: BASE_URL + "/students/myAttendence",
  ADD_DOUBT : BASE_URL + "/user/addDoubt",
  GET_DOUBT : BASE_URL + "/user/doubts",
  ADD_DOUBT_ANS : BASE_URL + "/user/addDoubtAns",
  GET_DOUBT_ANS : BASE_URL + "/user/doubtAns",
  ADD_PAYMENT: BASE_URL + "/students/payment",
  GET_PAYMENT_DETAILS: BASE_URL + "/students/getPaymentDetails"
}

// FACULTY ENDPOINTS
export const facultyEndpoints = {
  ADD_MARKS_API: BASE_URL + "/faculty/addMarks",
  GET_MARKS_DETAILS_API: BASE_URL + "/faculty/marksDetails",
}


// ADMIN ENDPOINT
export const adminEndpoints = {
  ALL_STUDENT_DETAILS_API: BASE_URL + "/admin/allStudentsDetails",
  ADD_NEW_MEMBER_API: BASE_URL + "/admin/addNewMember",
  ADD_ATTACHMENT_API: BASE_URL + "/admin/addAttachment",
  GET_FACULTY_DETAILS_API: BASE_URL + "/admin/facultyDetails",
  GET_STUDENT_DETAILS_API: BASE_URL + "/admin/studentDetails",
  GET_FACULTIES_DETAILS_API: BASE_URL + "/admin/facultiesDetails"
}