import React, { useEffect, useState } from "react";
import { getAttendence } from "../../../services/operations/studentFeaturesAPI";
// import Navbar from "../../../pages/Faculty/Navbar.jsx";
// import Sidebar from "../../../pages/Faculty/Sidebar.jsx";
// import MarkAttendance from "./MarkAttendance.jsx";

const FacultyAttendance = () => {

  const [attendenceDetails, setAttendenceDetails] = useState([]);

  const [formData, setFormData] = useState({
    semester: "",
    dept: "",
    date: "",
    subject: ""
  })


  const {
    semester,
    dept,
    date,
    subject
  } = formData;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  console.log("form data: ", formData);

  const [submit, setSubmit] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setSubmit(!submit);
  }

  
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await getAttendence(semester, dept, date, subject)
        // console.log("students details res: ", res)
        setAttendenceDetails(res)
      } catch (error) {
        console.log("Could not fetch Students Details")
      }
    })()
  }, [submit])


  return (
        <div className="bg-white h-[96%] w-[70%] ml-4 rounded-xl mr-7">
          <div className="bg-gray-200 h-screen  p-4">
            <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Attendance Details</h1>
                <div className="flex flex-row justify-around m-5 ">
                <form 
                 onSubmit={handleOnSubmit}
                >
                   
                    <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Date</label>
                    <input 
                      type="date" 
                      name="date"
                      value={date}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-96 mb-8 border-gray-500"
                    ></input>
                    
                    <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Semester</label>
                    <select 
                      id="semester" 
                      name="semester"
                      value={semester}
                      onChange={handleOnChnage} 
                      className="bg-gray-50 border rounded-lg h-10 px w-96"
                    >
                      {Array.from(Array(8), (e, i) => {
                         return <option value={i+1}>{i+1}</option>
                      })}
                    </select>

                    <div className="flex  w-64 ">
                        <button 
                          type="submit"
                          className="bg-blue-500 text-white px-20 py-2 mt-5 rounded-xl text-lg hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                        >
                          Search
                        </button>
                    </div>
                    
                </form>
                <form>
                    <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Department</label>
                    <select 
                      id="department" 
                      name="dept"
                      value={dept}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px w-96 mb-8"
                    >
                        <option value="">none</option>
                        <option value="CSE">Computer Science</option>
                        <option value="ME">Mechanical</option>
                        <option value="ECE">Electronics and Communication</option>
                        <option value="IT">Information Technology</option>
                    </select>
                    
                    <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Subject</label>
                    <select 
                      id="subject"  
                      className="bg-gray-50 border rounded-lg h-10 px w-96"
                      name="subject"
                      value={subject}
                      onChange={handleOnChnage}
                    >
                        <option value="DBMS">DBMS</option>
                        <option value="OOPS">OOPS</option>
                        <option value="DSA">DSA</option>
                    </select>

                </form>
                </div>
                
                {/* Attendence detials  */}
                <div className=" mt-3">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border p-2">Student Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Roll no.</th>
                        <th className="border p-2">Attendence</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendenceDetails.map((attendence) => (
                        <tr key={attendence.id}>
                          <td className="border p-2 text-center">{attendence?.studentName}</td>
                          <td className="border p-2 text-center">{attendence?.email}</td>
                          <td className="border p-2 text-center">{attendence?.rollNo}</td>
                          <td className="border p-2 text-center text-green-600">{attendence?.attendence}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

            </div>
          </div>
        </div>
  );
};

export default FacultyAttendance;