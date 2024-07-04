// StudentInfo.js

import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { getAllStudentDetails } from '../../../services/operations/adminFeaturesAPI';

// const studentData = {
//   2021001: {
//     name: 'John Doe',
//     department: 'Computer Science',
//     semester: 'Spring 2023',
//     email: 'john.doe@example.com',
//     mobile: '123-456-7890',
//   },
//   // Add more student data here...
// };

const StudentInfo = () => {

  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    semester: "",
    dept: "",
    batch: ""
  })


  const {
    semester,
    dept,
    batch
  } = formData;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }


  const [submit, setSubmit] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setSubmit(!submit);
  }

  
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await getAllStudentDetails(semester, dept, batch)
        // console.log("students details res: ", res)
        setStudents(res)
      } catch (error) {
        console.log("Could not fetch Students Details")
      }
    })()
  }, [submit])

  return (

    <div className="bg-white h-[96%] w-[68%] ml-4 rounded-xl mr-7 overflow-y-scroll ">
      <div className="bg-gray-200 h-screen  p-4 ">
      <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Students Details</h1>
                
                <form 
                  onSubmit={handleOnSubmit}
                  className="flex flex-row  gap-3 flex-wrap m-5 relative "
                >
                      <label for="name" className="flex flex-col mb-2 text-lg font-medium text-gray-500 m-1">Department
                        <select 
                        name="dept"
                        value={dept}
                        onChange={handleOnChnage}
                        className="bg-gray-50 border rounded-lg h-10 px w-48 mb-8"
                        >
                            <option value="">none</option>
                            <option value="CSE">Computer Science Engineering</option>
                            <option value="ME">Mechanical</option>
                            <option value="ECE">Electronics and Communication</option>
                            <option value="IT">Information Technology</option>
                        </select>
                      </label>
                        

                      <label for="name" className="flex flex-col mb-2 text-lg font-medium text-gray-500 m-1">Passout Year
                        <input 
                        type="number" 
                        id="name"
                        name="batch"
                        value={batch}
                        onChange={handleOnChnage} 
                        className="bg-gray-50 border rounded-lg h-10 px w-48"
                        ></input>
                      </label>
                        

                      <label for="name" className="flex flex-col mb-2 text-lg font-medium text-gray-500 m-1">Semester
                        <select 
                        name="semester"
                        value={semester}
                        onChange={handleOnChnage}
                        className="bg-gray-50 border rounded-lg h-10 px w-48"
                        >
                          {Array.from(Array(9), (e, i) => {
                            return <option value={i}>{i}</option>
                          })}
                        </select>
                      </label>
                        

                      {/* <div className="flex  w-64 "> */}
                        <button 
                          type="submit"
                          className="bg-blue-500 text-white h-fit px-3 py-2 mt-6 rounded-xl text-lg hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                        >
                          Search
                        </button>
                      {/* </div> */}
                      
                  
                </form>
                
                {/* Student's Details  */}
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2">Student Name</th>
                      <th className="border p-2">Gender</th>
                      <th className="border p-2">email</th>
                      <th className="border p-2">Date of Birth</th>
                      <th className="border p-2">Semseter</th>
                      <th className="border p-2">Department</th>
                      <th className="border p-2">Session</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="border p-2 text-center">{student?.fullName}</td>
                        <td className="border p-2 text-center">{student?.gender}</td>
                        <td className="border p-2 text-center">{student?.email}</td>
                        <td className="border p-2 text-center">{student?.dateOfBirth}</td>
                        <td className="border p-2 text-center">{student?.semester}</td>
                        <td className="border p-2 text-center">{student?.dept}</td>
                        <td className="border p-2 text-center">{student?.joinYear} - {student?.passoutYear} </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
      </div>
    </div>

    
  );
};

export default StudentInfo;
