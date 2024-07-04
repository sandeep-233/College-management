import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addQueries, addQueriesAns, getQueries, getQueriesAns } from '../../../services/operations/userAPI';
import { ACCOUNT_TYPE } from '../../../utils/constants';

export const Queries = () => {

    const {user} = useSelector((state) => state.profile)

    const dispatch = useDispatch();

    const [queries, setQueries] = useState([]);
    const [queriesAns, setQueriesAns] = useState([]);

  const [formData, setFormData] = useState({
    query: "",
  })
  const [formData_1, setFormData_1] = useState({
    topic: "",
    ans: ""
  })


  const {query} = formData;
  const {topic, ans} = formData_1;

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

  console.log("form data: ", formData);
//   console.log("form data: ", formData_1);


  const [submit, setSubmit] = useState(false);

  const handleAddDbout = (e) => {
    e.preventDefault()
    dispatch(addQueries(query))
    setSubmit(!submit);
  }

  const handleAddReplies = (e) => {
    e.preventDefault()
    dispatch(addQueriesAns(topic, ans))
    setSubmit(!submit);
  }

  
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const res_1 = await getQueries()
        const res_2 = await getQueriesAns()
        // console.log("notes details res: ", res)
        setQueries(res_1)
        setQueriesAns(res_2)
      } catch (error) {
        console.log("Could not fetch doubts or doubts answers Details")
      }
    })()
  }, [submit])

  return (
    <div className="bg-white h-[96%] w-[70%] ml-4 rounded-xl mr-7">
          <div className="bg-gray-200 h-screen  p-4 overflow-y-scroll">
            <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Queries</h1>

                <div className="flex flex-row justify-between m-5 ">
                    
                  {/* Raise query  */}
                  <div className=' w-[40%] h-full border-gray-400 border-2 rounded-lg'>
                    {
                        user?.accountType === ACCOUNT_TYPE.STUDENT && (
                            <h1 className="text-xl font-medium mb-5 p-5 border-b-2 ">Raise Your Query</h1>
                        )
                    }
                      

                      
                        {
                            user?.accountType === ACCOUNT_TYPE.STUDENT && (
                                <form
                                    onSubmit={handleAddDbout}
                                    className="flex flex-row flex-wrap justify-around m-5 relative gap-3"
                                >
                                    <input 
                                    id="doubt"  
                                    className="bg-gray-50 border rounded-lg h-10 px w-60"
                                    placeholder='Enter your doubt'
                                    name="query"
                                    value={query}
                                    onChange={handleOnChnage}
                                    ></input>
                                

                                    <button 
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                                    >
                                    Add
                                    </button>
                                </form>
                            )
                        }

                      {/* Other queries */}
                      <div>
                        <h1 className="text-xl font-medium mb-5 p-5 border-b-2 ">Queries</h1>
                        {
                            queries.map((query) => (
                                <div
                                 key={query._id}
                                 className=' rounded-md flex justify-center items-end pb-2 ' 
                                >
                                    <p 
                                     className=' p-1 flex flex-col gap-1 justify-start items-start border-blue-600  border bg-white rounded-md w-full font-semibold text-left m-1' 
                                    >
                                        <span className=''> 
                                            {query?.question}
                                        </span> 
                                    </p>
                                </div>
                            ))
                        }
                      </div>
                  </div>

                  {/* queries reply */}
                  <div className=' w-[58%] h-full border-gray-400 border-2 rounded-lg'>
                    {
                        user?.accountType === ACCOUNT_TYPE.ADMIN && (
                            <h1 className="text-xl font-medium mb-5 p-5 border-b-2 ">Queries Replies</h1>
                        )
                    }

                    {
                        user?.accountType === ACCOUNT_TYPE.FACULTY && (
                            <h1 className="text-xl font-medium mb-5 p-5 border-b-2 ">Queries Replies</h1>
                        )
                    }
                    
                      
                      {
                            user?.accountType === ACCOUNT_TYPE.ADMIN || user?.accountType === ACCOUNT_TYPE.FACULTY && (
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
                                    name="ans"
                                    value={ans}
                                    onChange={handleOnChnage}
                                    ></textarea>
                                

                                    <button 
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                                    >
                                    Add
                                    </button>
                                </form>
                            )
                        }

                        {
                            user?.accountType === ACCOUNT_TYPE.ADMIN && (
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
                                    name="ans"
                                    value={ans}
                                    onChange={handleOnChnage}
                                    ></textarea>
                                

                                    <button 
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                                    >
                                    Add
                                    </button>
                                </form>
                            )
                        }

                      {/* Other Replies */} 
                      <div>
                        <h1 className="text-xl font-medium mb-5 p-5 border-b-2 ">Replies</h1>
                        {
                            queriesAns.map((reply) => (
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
                                            {reply?.ans}
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
