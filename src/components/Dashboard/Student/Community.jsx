import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDoubt, addDoubtAns, getDoubt, getDoubtAns } from '../../../services/operations/studentFeaturesAPI';

export const Community = () => {

    const dispatch = useDispatch();

    const [doubts, setDoubts] = useState([]);
    const [replies, setReplies] = useState([]);

  const [formData, setFormData] = useState({
    doubt: "",
  })
  const [formData_1, setFormData_1] = useState({
    topic: "",
    desc: ""
  })


  const {doubt} = formData;
  const {topic, desc} = formData_1;

  const handleOnChnage =(e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
    setFormData_1((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  console.log("form data: ", formData_1);

  const [submit, setSubmit] = useState(false);

  const handleAddDbout = (e) => {
    e.preventDefault()
    dispatch(addDoubt(doubt))
    setSubmit(!submit);
  }

  const handleAddReplies = (e) => {
    e.preventDefault()
    dispatch(addDoubtAns(topic, desc))
    setSubmit(!submit);
  }

  
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res_1 = await getDoubt()
        const res_2 = await getDoubtAns()
        // console.log("notes details res: ", res)
        setDoubts(res_1)
        setReplies(res_2)
      } catch (error) {
        console.log("Could not fetch doubts or doubts answers Details")
      }
    })()
  }, [submit])


  return (
    <div className="bg-white h-[96%] w-[70%] ml-4 rounded-xl mr-7">
          <div className="bg-gray-200 h-screen  p-4 overflow-y-scroll">
            <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Alumni  Interaction</h1>

                <div className="flex flex-row justify-between m-5 ">
                    
                  {/* Raise Doubt  */}
                  <div className=' w-[40%] h-full border-gray-400 border-2 rounded-lg'>
                      <h1 className="text-xl font-medium mb-5 p-5 border-b-2 ">Raise Your Doubt</h1>

                      <form
                        onSubmit={handleAddDbout}
                        className="flex flex-row flex-wrap justify-around m-5 relative gap-3"
                      >
                        <input 
                          id="doubt"  
                          className="bg-gray-50 border rounded-lg h-10 px w-60"
                          placeholder='Enter your doubt'
                          name="doubt"
                          value={doubt}
                          onChange={handleOnChnage}
                        ></input>
                      

                        <button 
                          type="submit"
                          className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                        >
                          Add
                        </button>
                      </form>

                      {/* Other Doubts */}
                      <div>
                        <h1 className="text-xl font-medium mb-5 p-5 border-b-2 ">Doubts</h1>
                        {
                            doubts.map((doubt) => (
                                <div
                                 key={doubt._id}
                                 className=' rounded-md flex justify-center items-end pb-2 ' 
                                >
                                    <p 
                                     className=' p-1 flex flex-col gap-1 justify-start items-start border-blue-600  border bg-white rounded-md w-full font-semibold text-left m-1' 
                                    >
                                        <span className=''> 
                                            {doubt?.doubt}
                                        </span> 
                                    </p>
                                </div>
                            ))
                        }
                      </div>
                  </div>

                  {/* Alumni reply */}
                  <div className=' w-[58%] h-full border-gray-400 border-2 rounded-lg'>
                    <h1 className="text-xl font-medium mb-5 p-5 border-b-2 ">Alumni Replies</h1>
                      <form
                        onSubmit={handleAddReplies}
                        className="flex flex-row flex-wrap justify-around m-5 relative gap-3"
                      >
                        <input 
                          id="topic"  
                          className="bg-gray-50 border rounded-lg h-10 px w-32"
                          placeholder='Enter your topic'
                          name="topic"
                          value={topic}
                          onChange={handleOnChnage}
                        ></input>

                        <textarea 
                          id="topic"  
                          className="bg-gray-50 border rounded-lg h-10 px w-60"
                          placeholder='describe in details'
                          name="desc"
                          value={desc}
                          onChange={handleOnChnage}
                        ></textarea>
                      

                        <button 
                          type="submit"
                          className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                        >
                          Add
                        </button>
                      </form>

                      {/* Other Replies */} 
                      <div>
                        <h1 className="text-xl font-medium mb-5 p-5 border-b-2 ">Replies</h1>
                        {
                            replies.map((reply) => (
                                <div
                                 key={reply._id}
                                 className=' rounded-md flex justify-center items-end pb-2 ' 
                                >
                                    <p 
                                    className=' p-1 flex flex-col gap-1 justify-start items-start
                                     border-blue-600  border bg-white rounded-md w-full text-left m-1
                                     h-10 hover:h-fit overflow-hidden cursor-pointer hover:transition-all'
                                    >
                                        <span > 
                                            <span className=' font-black '>topic: </span>
                                            {reply?.topic}
                                        </span> 
                                        <span >
                                            <span className=' font-black '>desc: </span>
                                            {reply?.desc}
                                        </span> 
                                    </p>
                                </div>
                            ))
                        }
                      </div>
                  </div>
                </div>
            </div>
          </div>
    </div>
  )
}
