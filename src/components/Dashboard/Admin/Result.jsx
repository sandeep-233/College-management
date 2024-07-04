import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMarks } from "../../../services/operations/facultyFeaturesAPI";
// import Navbar from "../../../pages/Admin/Navbar.jsx";
// import Sidebar from "../Sidebar.jsx";

const Result = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email:"",
    subject:"",
    internalMarks: "",
    externalMarks: "",
    labMarks: "",
    semester: "",
    dept: "",
    batch: ""
  })


  const {
    email,
    subject,
    internalMarks,
    externalMarks,
    labMarks,
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

  console.log("form data: ", formData);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    // console.log("under handle on submit")
    // console.log("dispatching login()")
    dispatch(addMarks(
      email,
      subject,
      internalMarks,
      externalMarks,
      labMarks,
      semester,
      dept,
      batch
    ))
  }


  return (
        <div className="bg-white h-[96%] w-[68%] ml-4 rounded-xl mr-7 overflow-y-scroll ">
          <div className="bg-gray-200 h-screen  p-4 ">
            <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Add Student Marks</h1>
                <form 
                  onSubmit={handleOnSubmit}
                  className="flex flex-row justify-around m-5 relative "
                >
                    <div className=" flex flex-col ">
                      <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Registration Email</label>
                      <input 
                      type="email" 
                      id="name" 
                      name="email"
                      value={email}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-96 mb-8 border-gray-500"
                      ></input>

                      <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Department</label>
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

                      <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Passout Year</label>
                        <input 
                        type="number" 
                        id="name"
                        name="batch"
                        value={batch}
                        onChange={handleOnChnage} 
                        className="bg-gray-50 border rounded-lg h-10 px w-48"
                        ></input>

                      <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Semester</label>
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

                      <div className="flex  w-64 ">
                        <button 
                          type="submit"
                          className="bg-blue-500 text-white px-20 py-2 mt-5 rounded-xl text-lg hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                        >
                          Add
                        </button>
                      </div>
                      
                    </div>

                    <div>
                      <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Subject Name</label>
                        <select 
                        id="subject"  
                        name="subject"
                        value={subject}
                        onChange={handleOnChnage}
                        className="bg-gray-50 border rounded-lg h-10 px w-96 mb-8"
                        >
                          <option value="">None</option>
                          <option value="DBMS">DBMS</option>
                          <option value="OOPS">OOPS</option>
                          <option value="DSA">DSA</option>
                          <option value="PPL">PPL</option>
                        </select>
                  
                      <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">External Marks (out of 70 or 80)</label>
                      <input 
                      type="number" 
                      id="name" 
                      name="externalMarks"
                      value={externalMarks}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-96 mb-8 border-gray-500"
                      ></input>

                      <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Internal Marks (out of 20)</label>
                      <input 
                      type="number" 
                      id="name"
                      name="internalMarks"
                      value={internalMarks}
                      onChange={handleOnChnage} 
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-96 mb-8 border-gray-500"
                      ></input>

                      <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Lab (out of 10)</label>
                      <input 
                      type="number" 
                      id="name" 
                      name="labMarks"
                      value={labMarks}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-96 mb-8 border-gray-500"
                      ></input>
                      
                      
                    </div>
                    
                  
                </form>
                
            </div>
          </div>
        </div>
  );
};

export default Result;