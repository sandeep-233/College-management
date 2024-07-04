import { toast } from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import {userEndpoints} from "../apis"
import { setLoading, setToken } from "../../slices/authSlice"
import { setUser } from "../../slices/profileSlice"

const {
    GET_NOTICES_API,
    ADD_INTERNSHIP_OPPORTUNITY_API,
    GET_OPPORTUNITIES_API,
    LOGIN_API,
    GET_STUDENTS_MARKS_DETAILS,
    ADD_QUERIES,
    GET_QUERIES,
    ADD_QUERIES_ANS,
    GET_QUERIES_ANS
} = userEndpoints

export const getNotices = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_NOTICES_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Notice Details")
    }
    result = response?.data?.data
    toast.success("Fetched Notices successfully");
  } catch (error) {
    console.log("GET_NOTICES_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getOpportunities = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_OPPORTUNITIES_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Internship Opportunities Details")
      }
      result = response?.data?.data
      toast.success("Fetched Opportunites Successfully");
    } catch (error) {
      console.log("GET_OPPORTUNITIES_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const addIntershipOpportunity = async (heading, desc, link, company) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", ADD_INTERNSHIP_OPPORTUNITY_API, {
      heading, desc, link, company
    })
    console.log("ADD_ATTENDENCE_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
    toast.success("Opportunity Added successfully");
  } catch (error) {
    console.log("ADD_INTERNSHIP_OPPORTUNITY_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

export const getStudentsMarksDetails = async (semester, dept, batch, subject) => {
  console.log("data: ", semester, dept, batch, subject);
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_STUDENTS_MARKS_DETAILS, {}, {},{semester, dept, batch, subject})
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Marks Details")
    }
    
    result = response?.data?.data
    toast.success("Fetched Students Marks")
  } catch (error) {
    console.log("GET_MARKS_DETAILS_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export function login(email, password, navigate) {
  // console.log("under login operation");
  return async(dispatch) => {
    // console.log("under async dispatch")
    const toastId = toast.loading("Loading..");
    dispatch(setLoading(true))

    try{
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })

        console.log("LOGIN API RESPONSE: ", response)

        if(!response.data.success) {
            throw new Error(response.data.message)
        }

        toast.success("Login Successful");

        dispatch(setToken(response.data.token))
        const userImage = response.data?.user?.userImage
            ? response.data.user.userImage
            : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
        
        dispatch(setUser({...response.data.user, image: userImage}))
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user))
        navigate("/dashboard/my-profile")

    }
    catch(error) {
        console.log("LOGIN API ERROR:", error);
        toast.error("Login failed")
    }
    
    dispatch(setLoading(false))
    toast.dismiss(toastId);
  }
}

export function logout(navigate) {
  return(dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))

      localStorage.removeItem("token")
      localStorage.removeItem("user")

      toast.success("Logged Out")
      navigate("/")
  }
}

export const getQueries = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_QUERIES)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Queries Details")
    }
    result = response?.data?.data
    toast.success("Fetched Queries Successfully");
  } catch (error) {
    console.log("GET_QUERIES API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const addQueries = async (query) => {
const toastId = toast.loading("Loading...")
//   dispatch(setLoading(true));
let result = null
try {
  const response = await apiConnector("POST", ADD_QUERIES, {query})
  console.log("ADD_QUERIES API RESPONSE............", response)

  if (!response.data.success) {
    throw new Error(response.data.message)
  }
  result = response.data
  toast.success("Query Added successfully");
} catch (error) {
  console.log("ADD_QUERIES API ERROR............", error)
  result = error.response.data
  toast.error(error.response.data.message);
}
toast.dismiss(toastId)
//   dispatch(setLoading(false));
return result
}

export const getQueriesAns = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_QUERIES_ANS)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Queries Details")
    }
    result = response?.data?.data
    toast.success("Fetched Queries Successfully");
  } catch (error) {
    console.log("GET_QUERIES API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const addQueriesAns = async (topic, ans) => {
const toastId = toast.loading("Loading...")
//   dispatch(setLoading(true));
let result = null
try {
  const response = await apiConnector("POST", ADD_QUERIES_ANS, {topic, ans})
  console.log("ADD_QUERIES_ANS API RESPONSE............", response)

  if (!response.data.success) {
    throw new Error(response.data.message)
  }
  result = response.data
  toast.success("Answered Query successfully");
} catch (error) {
  console.log("ADD_QUERIES_ANS API ERROR............", error)
  result = error.response.data
  toast.error(error.response.data.message);
}
toast.dismiss(toastId)
//   dispatch(setLoading(false));
return result
}