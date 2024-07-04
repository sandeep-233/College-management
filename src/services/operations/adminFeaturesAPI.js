import { toast } from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import { adminEndpoints} from "../apis"

const {
    ALL_STUDENT_DETAILS_API,
    ADD_NEW_MEMBER_API,
    ADD_ATTACHMENT_API,
    GET_FACULTIES_DETAILS_API,
    GET_STUDENT_DETAILS_API
} = adminEndpoints

export const getAllStudentDetails = async (semester, dept, batch) => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    // console.log("data: ", semester, dept, batch)
    const response = await apiConnector("GET", ALL_STUDENT_DETAILS_API,{},
      {},
      {
        semester, dept, batch
      }
    )

    console.log("response: ", response);

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Student Details")
    }
    result = response?.data?.data
    toast.success("Fetched Students Details")
  } catch (error) {
    console.log("ALL_STUDENT_DETAILS_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getFacultiesDetails = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_FACULTIES_DETAILS_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Faculty Details")
      }
      result = response?.data?.data
      toast.success("Fetched Faculties Details Successfully");
    } catch (error) {
      console.log("GET_FACULTIES_DETAILS_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getStudentDetails = async (email) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_STUDENT_DETAILS_API, {}, {}, {email})
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Student Details")
      }
      result = response?.data?.data
      toast.success("Fetched Student's Successfully");
    } catch (error) {
      console.log("GET_STUDENT_DETAILS_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const addAttachment = async (data) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", ADD_ATTACHMENT_API, data, {
      "Content-Type": "multipart/form-data",
      // Authorization: `Bearer ${token}`,
  })
    console.log("ADD_ATTACHMENT_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    
    result = response.data
    toast.success(`Added successfully`);
  } catch (error) {
    console.log("ADD_ATTACHMENT_API API ERROR............", error)
    result = error.response.data
    toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

export const addNewMember = async (fullName, 
  gender, 
  email,
  dateOfBirth, 
  accountType, 
  semester, 
  dept, 
  joinYear, 
  passoutYear) => {
    const toastId = toast.loading("Loading...")
      // dispatch(setLoading(true));
    let result = null
    try {
      const response = await apiConnector("POST", ADD_NEW_MEMBER_API, {fullName, 
        gender, 
        email,
        dateOfBirth, 
        accountType, 
        semester, 
        dept, 
        joinYear, 
        passoutYear
      })

      console.log("ADD_NEW_MEMBER_API API RESPONSE............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data
      toast.success("New Member is Added Successfully");
    } catch (error) {
      console.log("ADD_NEW_MEMBER_API API ERROR............", error)
      result = error.response.data
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    // dispatch(setLoading(false));
    return result
  }
  
