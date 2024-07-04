import React, { useEffect, useState } from "react";
import { getStudentsMarksDetails } from "../../../services/operations/userAPI";

const MarksDetails = () => {

  const [formData, setFormData] = useState({
    semester: "",
    dept: "",
    batch: "",
    subject: ""
  })


  const {
    semester,
    dept,
    batch,
    subject
  } = formData;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // // console.log("form data: ", formData);

  const [submit, setSubmit] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setSubmit(!submit);
  }

  const [students, setStudents] = useState([]);
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await getStudentsMarksDetails(semester, dept, batch, subject)
        console.log("students details res: ", res)
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
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Students Marks Details</h1>
                
                <form 
                  onSubmit={handleOnSubmit}
                  className="flex flex-row flex-wrap justify-start items-center m-5 relative gap-8"
                >
                      <label for="name" className="flex flex-col  text-lg font-medium text-gray-500">Subject
                        <select 
                        name="subject"
                        value={subject}
                        onChange={handleOnChnage}
                        className="bg-gray-50 border rounded-lg h-10 w-48"
                        >
                            <option value="">none</option>
                            <option value="DSA">DSA</option>
                            <option value="PPL">PPL</option>
                            <option value="OOPS">OOPS</option>
                            <option value="DBMS">DBMS</option>
                        </select>
                      </label>
                        

                      <label for="name" className="flex flex-col text-lg font-medium text-gray-500">Department
                        <select 
                        name="dept"
                        value={dept}
                        onChange={handleOnChnage}
                        className="bg-gray-50 border rounded-lg h-10 w-48"
                        >
                            <option value="">none</option>
                            <option value="CSE">Computer Science Engineering</option>
                            <option value="ME">Mechanical</option>
                            <option value="ECE">Electronics and Communication</option>
                            <option value="IT">Information Technology</option>
                        </select>
                      </label>
                        

                      <label for="name" className="flex flex-col text-lg font-medium text-gray-500">Passout Year
                        <input 
                        type="number" 
                        id="name"
                        name="batch"
                        value={batch}
                        onChange={handleOnChnage} 
                        className="bg-gray-50 border rounded-lg h-10 w-48"
                        ></input>
                      </label>
                        

                      <label for="name" className="flex flex-col text-lg font-medium text-gray-500">Semester
                        <select 
                        name="semester"
                        value={semester}
                        onChange={handleOnChnage}
                        className="bg-gray-50 border rounded-lg h-10 w-48"
                        >
                          {Array.from(Array(9), (e, i) => {
                            return <option value={i}>{i}</option>
                          })}
                        </select>
                      </label>
                        

                      <div className="flex ">
                        <button 
                          type="submit"
                          className="bg-blue-500 text-white px-20 py-2 rounded-xl text-lg hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                        >
                          Search
                        </button>
                      </div>
                      
                  
                </form>
                
                {/* Students Mark's Details  */}
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {/* <th className="border p-2">Student Name</th> */}
                      <th className="border p-2">Email Id</th>
                      <th className="border p-2">Department</th>
                      <th className="border p-2">Subject</th>
                      <th className="border p-2">semester</th>
                      <th className="border p-2">Internal/ External/ Lab Marks</th>
                      <th className="border p-2">Total Marks (Grade) </th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id}>
                        {/* <td className="border p-2 text-center">{student?.fullName}</td> */}
                        <td className="border p-2 text-center">{student?.email}</td>
                        <td className="border p-2 text-center">{student?.dept}</td>
                        <td className="border p-2 text-center">{student?.subject}</td>
                        <td className="border p-2 text-center">{student?.semester}</td>
                        <td className="border p-2 text-center">{student?.internalMarks} / {student?.externalMarks} / {student?.labMarks}</td>
                        <td className="border p-2 text-center">{student?.totalMarks} ({student?.grade}) </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
      </div>
    </div>
  );
};

export default MarksDetails;