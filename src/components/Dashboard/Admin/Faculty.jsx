import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewMember } from "../../../services/operations/adminFeaturesAPI";
// import Navbar from "../../../pages/Admin/Navbar.jsx";
// import Sidebar from "../Sidebar.jsx";

const Faculty = () => {

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName:"",
    gender:"",
    email: "",
    dateOfBirth: "",
    accountType: "",
    semester: "",
    dept: "",
    joinYear: "",
    passoutYear: ""
  })


  const {
    fullName, 
    gender, 
    email,
    dateOfBirth, 
    accountType, 
    semester, 
    dept, 
    joinYear, 
    passoutYear
  } = formData;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // console.log("form data: ", formData);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    // console.log("under handle on submit")
    // console.log("dispatching login()")
    dispatch(addNewMember(
      fullName, 
      gender, 
      email,
      dateOfBirth, 
      accountType, 
      semester, 
      dept, 
      joinYear, 
      passoutYear
    ))
  }


  return (
        <div className="bg-white h-[96%] w-[68%] ml-4 rounded-xl mr-7 overflow-y-scroll">
          <div className="bg-gray-200 h-screen  p-4 ">
            <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Add New Member</h1>
                <div className="flex flex-row justify-around m-5 ">
                <form 
                  onSubmit={handleOnSubmit}
                  className=" flex flex-wrap gap-3"
                >
                    <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Full Name
                      <input 
                      type="text"  
                      name="fullName"
                      value={fullName}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-48 mb-8 border-gray-500"
                      ></input>
                    </label>
                    
                    
                    <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Email id
                      <input 
                      type="email" 
                      name="email"
                      value={email}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-80 mb-8 border-gray-500"
                      ></input>
                    </label>
                    
                    
                    <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Date of Birth
                      <input 
                      type="date" 
                      name="dateOfBirth"
                      value={dateOfBirth}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-48 mb-8 border-gray-500"
                      ></input>
                    </label>
                    
                    
                      <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Department
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
                            <option value="Admin">Admin</option>
                            <option value="Faculty">Faculty</option>
                        </select>
                      </label>
                      

                      <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Semester
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
                      

                    <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Account Type
                      <select 
                      name="accountType"
                      // value={accountType}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px w-48"
                      > 
                          <option value="">none</option>
                          <option value="Admin">Admin</option>
                          <option value="Faculty">Faculty</option>
                          <option value="Student">Student</option>
                      </select>
                    </label>
                    
                    
                    <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Joining Year
                      <input 
                      type="number" 
                      name="joinYear"
                      value={joinYear}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-48 mb-8 border-gray-500"
                      ></input>
                    </label>
                    

                    <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Passout Year
                      <input 
                      type="number" 
                      name="passoutYear"
                      value={passoutYear}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-48 mb-8 border-gray-500"
                      ></input>
                    </label>
                    

                    <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Gender
                      <select 
                      name="gender"
                      // value={gender}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px w-48"
                      >
                          <option value="">none</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Non-Binary">Non-Binary</option>
                      </select>
                    </label>
                    

                  {/* <div className="flex justify-items-center w-52 mx-auto"> */}
                    <button 
                      type="submit"
                      className="bg-blue-500 text-white h-fit px-3 py-2 mt-8 rounded-xl text-lg hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                    >
                      Add
                    </button>
                  {/* </div> */}
                </form>
                </div>
                
            </div>
          </div>
        </div>
  );
};

export default Faculty;