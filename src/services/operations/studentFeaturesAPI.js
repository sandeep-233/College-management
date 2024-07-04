import { toast } from "react-hot-toast"

import { apiConnector } from "../apiConnector"
import {studentEndpoints} from "../apis"

const {
    GET_PYQ_API,
    GET_NOTES_API,
    GET_SUBJECT_MARKS_API,
    ADD_ATTENDENCE_API,
    GET_ATTENDENCE_API,
    GET_MY_ATTENDENCE_API,
    GET_DOUBT,
    ADD_DOUBT,
    ADD_DOUBT_ANS,
    GET_DOUBT_ANS,
    ADD_PAYMENT,
    GET_PAYMENT_DETAILS
} = studentEndpoints

export const getPYQ = async (subject) => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_PYQ_API, {}, {}, {subject})
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch PYQ file Details")
    }
    result = response?.data?.data
    toast.success("Fetched PYQ Successfully");
  } catch (error) {
    console.log("GET_PYQ_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getNotes = async (subject) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_NOTES_API, {}, {},{subject})
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Notes file Details")
      }
      result = response?.data?.data
      toast.success("Fetched Notes Successfully");
    } catch (error) {
      console.log("GET_NOTES_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getSubjectMarks = async (data) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_SUBJECT_MARKS_API, data)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Student's Subject marks Details")
      }
      result = response?.data?.data
      toast.success("Fetched Marks Successfully");
    } catch (error) {
      console.log("GET_SUBJECT_MARKS_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const addAttendence = async (faculty, student, subject, batch, semester, rollNo, email, dept) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", ADD_ATTENDENCE_API, {
      faculty, student, subject, batch, semester, rollNo, email, dept
    })
    console.log("ADD_ATTENDENCE_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
    toast.success("Your Attendence is Saved");
  } catch (error) {
    console.log("ADD_ATTENDENCE_API API ERROR............", error)
    result = error.response.data
    toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}


export const getAttendence = async (semester, dept,date,subject) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_ATTENDENCE_API, {}, {}, {
        semester,
        dept,
        date,
        subject})
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Attendence Details")
      }
      result = response?.data?.data
      toast.success("Fetched Attendence Successfully");
    } catch (error) {
      console.log("GET_ATTENDENCE_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const getMyAttendence = async (semester, dept, subject, email) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_MY_ATTENDENCE_API, {}, {}, {
        semester, dept, subject, email
      })
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch MY Attendence Details")
      }
      result = response?.data?.data
      toast.success("Fetched Attendence Successfully");
    } catch (error) {
      console.log("GET_MY_ATTENDENCE_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}


export const addDoubt = async (doubt) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", ADD_DOUBT, {doubt})
    console.log("ADD_DOUBT API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
    toast.success("Your Doubt is Saved");
  } catch (error) {
    console.log("ADD_DOUBT API ERROR............", error)
    result = error.response.data
    toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}


export const getDoubt = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_DOUBT)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Attendence Details")
      }
      result = response?.data?.data
      toast.success("Fetched Doubts Successfully");
    } catch (error) {
      console.log("GET_ATTENDENCE_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const addDoubtAns = async (topic, desc) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    console.log("topic, desc", topic, desc);
    const response = await apiConnector("POST", ADD_DOUBT_ANS, {topic, desc})
    console.log("ADD_DOUBT_ANS API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
    toast.success("Your Reply is Saved");
  } catch (error) {
    console.log("ADD_DOUBT_ANS API ERROR............", error)
    result = error.response.data
    toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}


export const getDoubtAns = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_DOUBT_ANS)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Doubts's Answers Details")
      }
      result = response?.data?.data
      toast.success("Fetched Doubt's Answers Successfully");
    } catch (error) {
      console.log("GET_DOUBT_ANS API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const addPaymentDetails = async (email, student, dept, batch, semester) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    // console.log("topic, desc", topic, desc);
    const response = await apiConnector("POST", ADD_PAYMENT, {email, student, dept, batch, semester})
    console.log("ADD_PAYMENT API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
    toast.success("Payment successfull");
  } catch (error) {
    console.log("ADD_PAYMENT API ERROR............", error)
    result = error.response.data
    toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}


export const getPaymentDetails = async (email) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_PAYMENT_DETAILS, {}, {}, {email})
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Doubts's Answers Details")
      }
      result = response?.data?.data
      toast.success("Fetched Doubt's Answers Successfully");
    } catch (error) {
      console.log("GET_PAYMENT_DETAILS API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}