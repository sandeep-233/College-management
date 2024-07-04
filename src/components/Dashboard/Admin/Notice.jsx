import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { addAttachment } from "../../../services/operations/adminFeaturesAPI";
// import Navbar from "../../../pages/Admin/Navbar.jsx";
// import Sidebar from "../Sidebar.jsx";

const Notice = () => {

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    heading:"",
    category:"",
    subjectName:"",
    file:"",
  })


  const {heading,
    category,
    subjectName,
    file} = formData;

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
    const form_Data = new FormData()
    // console.log("Values After Editing form values:", currentValues)
    form_Data.append("heading", formData.heading)
    form_Data.append("subjectName", formData.subjectName)
    form_Data.append("category", formData.category)
    form_Data.append("file", formData.file)

    dispatch(
      addAttachment(form_Data)
    )
  }


  return (
        <div className="bg-white h-[96%] w-[68%] ml-4 rounded-xl mr-7 overflow-y-scroll ">
          <div className="bg-gray-200 h-screen  p-4 ">
            <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Add Notice / Notes / PYQ</h1>
                <div className="flex flex-row justify-around">
                <form 
                  onSubmit={handleOnSubmit}
                  className=" flex flex-wrap gap-3"
                >
                    <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Heading
                      <input 
                      type="text"  
                      name="heading"
                      value={heading}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-48 mb-8 border-gray-500"
                      ></input>
                    </label>
                    
                    
                    <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Subject Name (if it's Notes or PYQ)
                      <input 
                      type="text" 
                      name="subjectName"
                      value={subjectName}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-80 mb-8 border-gray-500"
                      ></input>
                    </label>
                    
                      <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Department
                        <select 
                        name="category"
                        value={category}
                        onChange={handleOnChnage}
                        className="bg-gray-50 border rounded-lg h-10 px w-48 mb-8"
                        >
                            <option value="">none</option>
                            <option value="Notes">Notes</option>
                            <option value="Notice">Notice</option>
                            <option value="PYQ">PYQ</option>
                        </select>
                      </label>
                      
                    <label for="name" className="flex flex-col items-start mb-2 text-lg font-medium text-gray-500 m-1">Add File
                      <input 
                      type="file" 
                      name="file"
                      value={file}
                      onChange={handleOnChnage}
                      className="bg-gray-50 border rounded-lg h-10 px-5 w-48 mb-8 border-gray-500"
                      ></input>
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

                {/* Previous notices  */}
                {/* <div className="bg-gray-300 border-2 border-black h-[430px] rounded-lg w-1/3">
                    <h2 className="mb-2  text-xl p-5 border-black border-b-2">Previous Notices</h2>
                    <ul className=" space-y-5 px-5 list-disc">
                      <li>First Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque nulla impedit aliquam maxime nemo in! Velit soluta quas a.</li>
                      <li>Second Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maiores animi ut pariatur eos maxime voluptatibus</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloribus atque veniam, itaque perferendis laboriosam pariatur sed voluptatem perspiciatis fugit suscipit.</li>
                    </ul>
                </div> */}
                </div>
            </div>
          </div>
        </div>
  )
};

export default Notice;