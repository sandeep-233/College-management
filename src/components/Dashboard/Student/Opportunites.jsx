import React, { useEffect, useState } from 'react'
import { addIntershipOpportunity, getOpportunities } from '../../../services/operations/userAPI';
import { useDispatch } from 'react-redux';

export const Opportunites = () => {

    const dispatch = useDispatch();

    const [Opportunities, setOpportunities] = useState([]);

  const [formData, setFormData] = useState({
    heading: "",
    desc: "",
    link: "",
    company: ""
  })


  const {heading, desc, link, company} = formData;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

//   console.log("form data: ", formData);

  const [submit, setSubmit] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(addIntershipOpportunity(heading, desc, link, company))
    setSubmit(!submit);
  }

  
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res = await getOpportunities()
        // console.log("notes details res: ", res)
        setOpportunities(res)
      } catch (error) {
        console.log("Could not fetch Students Details")
      }
    })()
  }, [submit])


  return (
    <div className="bg-white h-[96%] w-[70%] ml-4 rounded-xl mr-7">
          <div className="bg-gray-200 h-screen  p-4 overflow-y-scroll">
            <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Add Opportunity</h1>

                <div className="flex flex-row justify-around m-5 ">
                    <form
                        onSubmit={handleOnSubmit}
                        className="flex flex-row flex-wrap justify-around m-5 relative gap-3"
                    >
                      <label for="name" className="flex flex-col  mb-2 text-lg font-medium text-gray-500 m-1">Heading
                      <input 
                        id="subject"  
                        className="bg-gray-50 border rounded-lg h-10 px w-96"
                        name="heading"
                        value={heading}
                        onChange={handleOnChnage}
                      ></input>
                      </label>
                      

                      <label for="name" className="flex flex-col mb-2 text-lg font-medium text-gray-500 m-1">link
                      <input 
                        id="link"  
                        className="bg-gray-50 border rounded-lg h-10 px w-96"
                        name="link"
                        value={link}
                        onChange={handleOnChnage}
                      ></input>
                      </label>
                      

                      <label for="name" className="flex flex-col  mb-2 text-lg font-medium text-gray-500 m-1">Company
                      <input 
                        id="subject"  
                        className="bg-gray-50 border rounded-lg h-10 px w-96"
                        name="company"
                        value={company}
                        onChange={handleOnChnage}
                      ></input>
                      </label>
                      
                        
                      <label for="name" className="flex flex-col  mb-2 text-lg font-medium text-gray-500 m-1">Description (optional)
                      <textarea 
                        id="desc"  
                        className="bg-gray-50 border rounded-lg h-10 px w-96"
                        name="desc"
                        value={desc}
                        onChange={handleOnChnage}
                        rows={12}
                        cols={18}
                      />
                      </label>
                      

                        <button 
                          type="submit"
                          className="bg-blue-500 text-white px-20 py-2 rounded-xl text-lg hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                        >
                          Add
                        </button>
                    </form>
                </div>
                
                {/* Opportunites  */}
                    <div className='w-full flex gap-4 flex-wrap justify-start items-center'>
                        <h1 className="text-2xl mb-5 p-5 border-b-2 ">Opportunities</h1>
                        {
                            Opportunities.map((opportunity) => (
                                <div
                                 key={opportunity._id}
                                 className=' rounded-md flex justify-center items-end pb-2 ' 
                                >
                                    <a 
                                     href={opportunity?.link}
                                     target="_blank"
                                     className=' p-1 flex flex-col gap-1 justify-start items-start border-slate-300 hover:border-blue-600 hover:scale-95 hover:transition-all border bg-white rounded-md w-full font-semibold text-left m-1' 
                                    >
                                        <span > 
                                            <span className=' font-black text-lg'>Heading: </span>
                                            {opportunity?.heading}
                                        </span> 
                                        <span >
                                            <span className=' font-black text-lg'>Company: </span>
                                            {opportunity?.company}
                                        </span> 
                                        <span >
                                            <span className=' font-black text-lg'>Desc: </span>
                                            {opportunity?.desc}
                                            </span> 
                                        <span >
                                            <span className=' font-black text-lg'>Date: </span>
                                            {opportunity?.addDate}
                                        </span> 
                                    </a>
                                </div>
                            ))
                        }
                    </div>
            </div>
          </div>
    </div>
  )
}
