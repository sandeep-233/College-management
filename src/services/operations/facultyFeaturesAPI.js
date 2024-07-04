import { toast } from "react-hot-toast"

// import { updateCompletedLectures } from "../../slices/viewCourseSlice"
// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { facultyEndpoints } from "../apis"

const {
  GET_MARKS_DETAILS_API,
  ADD_MARKS_API
} = facultyEndpoints

export const getMarksDetails = async (email) => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_MARKS_DETAILS_API, {}, {},{email})
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Marks Details")
    }
    result = response?.data?.data
    toast.success("Fetched Marks Successfully");
  } catch (error) {
    console.log("GET_MARKS_DETAILS_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const addMarks = async (
  email,
  subject,
  internalMarks,
  externalMarks,
  labMarks,
  semester,
  dept,
  batch) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", ADD_MARKS_API,{
      email,
      subject,
      internalMarks,
      externalMarks,
      labMarks,
      semester,
      dept,
      batch})
    console.log("ADD_MARKS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
    toast.success("Marks Added Successfully")
  } catch (error) {
    console.log("ADD_MARKS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}
