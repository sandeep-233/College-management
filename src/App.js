import "./App.css";
 import Faculty from './components/Dashboard/Admin/Faculty.jsx';
 import Notice from './components/Dashboard/Admin/Notice.jsx';
 import Result from './components/Dashboard/Admin/Result.jsx';
//  import Fee from './components/Dashboard/Admin/Fee.jsx';
 import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx';
import Login from "./components/Login.jsx";
// import Dashboard from "./pages/Admin/Dashboard.jsx";

import { ACCOUNT_TYPE } from "./utils/constants.js";


import OpenRoute from "./components/Auth/OpenRoute.jsx"
import PrivateRoute from "./components/Auth/PrivateRoute.jsx"

import {Routes, Route } from "react-router-dom";
import { MyProfile } from "./components/Dashboard/MyProfile.jsx";
import { useSelector } from "react-redux";
import Dashboard from "./pages/common/Dashboard.jsx";
import StudentInfo from "./components/Dashboard/Faculty/StudentInfo.jsx";
import MarksDetails from "./components/Dashboard/Faculty/MarksDetails.jsx";
import FacultyStudent from './components/Dashboard/Faculty/FacultyStudent.jsx'
import { FacultiesDetails } from "./components/Dashboard/Admin/FacultiesDetails.jsx";
import FacultyAttendance from "./components/Dashboard/Faculty/FacultyAttendance.jsx";
import { AddAttendence } from "./components/Dashboard/Student/AddAttendence.jsx";
import { GetMyAttendence } from "./components/Dashboard/Student/GetMyAttendence.jsx";
import { NotesFile } from "./components/Dashboard/Student/NotesFile.jsx";
import { PYQ } from "./components/Dashboard/Student/PYQ.jsx";
import { Notices } from "./components/Dashboard/Student/Notices.jsx";
import { Opportunites } from "./components/Dashboard/Student/Opportunites.jsx";
import { Community } from "./components/Dashboard/Student/Community.jsx";
import { Queries } from "./components/Dashboard/Student/Queries.jsx";
// import { CollegePayment } from "./components/Dashboard/Student/CollegePayment.jsx";
import { Parenst } from "./components/Parenst.jsx";

function App() {

  const {user} = useSelector((state) => state.profile)

  return (
    <div className=" flex flex-col">

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route
         path="login"
         element={
          <OpenRoute>
            <Login/>
          </OpenRoute>
         }
        />

        <Route
         path="parent"
         element={
          <OpenRoute>
            <Parenst/>
          </OpenRoute>
         }
        />

        <Route
         element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
         }
        >
          <Route path="dashboard/my-profile" element={<MyProfile/>} />

          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                {/* Add Attendence  */}
                <Route path="dashboard/add-attendence" element={<AddAttendence/>} />
                {/* My Attendence  */}
                <Route path="dashboard/my-attendence" element={<GetMyAttendence/>} />
                {/* Notes  */}
                <Route path="dashboard/notes" element={<NotesFile/>} />
                {/* Previus Year Questions  */}
                <Route path="dashboard/pyq" element={<PYQ/>} />
                {/* Notice  */}
                <Route path="dashboard/notice" element={<Notices/>} />
                {/* Opportunities  */}
                <Route path="dashboard/opportunities" element={<Opportunites/>} />
                {/* community  */}
                <Route path="dashboard/community" element={<Community/>} />
                {/* query  */}
                <Route path="dashboard/queries" element={<Queries/>} />
                {/* college fee  */}
                {/* <Route path="dashboard/college-fee" element={<CollegePayment/>} /> */}
              </>
            )
          }

          {
            user?.accountType === ACCOUNT_TYPE.FACULTY && (
              <>
                {/* Students information  */}
                <Route path="dashboard/student-info" element={<StudentInfo/>} />
                {/* students details  */}
                <Route path="dashboard/students-details" element={<FacultyStudent/>} />
                {/* Add attachments notes/notice/pyq  */}
                <Route path="dashboard/notice" element={<Notice/>} />
                {/* Add student's marks  */}
                <Route path="dashboard/result" element={<Result/>} />
                {/* students marks details  */}
                <Route path="dashboard/students-marks" element={<MarksDetails/>} />
                {/* Attendence Details  */}
                <Route path="dashboard/attendence-details" element={<FacultyAttendance/>} />
                {/* Opportunities  */}
                <Route path="dashboard/opportunities" element={<Opportunites/>} />
                {/* query  */}
                <Route path="dashboard/queries" element={<Queries/>} />
              </>
            )
          }

          {
            user?.accountType === ACCOUNT_TYPE.ADMIN && (
              <>
              {/* Add new member student/admin/faculty  */}
              <Route path="dashboard/faculty" element={<Faculty/>} /> 
              {/* Add attachments notes/notice/pyq  */}
              <Route path="dashboard/notice" element={<Notice/>} />
              {/* Add student's marks  */}
              <Route path="dashboard/result" element={<Result/>} />
              {/* students marks details  */}
              <Route path="dashboard/students-marks" element={<MarksDetails/>} />
              {/* Fee Details  */}
              {/* <Route path="dashboard/fee" element={<Fee/>} /> */}
              {/* Students information  */}
              <Route path="dashboard/student-info" element={<StudentInfo/>} />
              {/* student details  */}
              <Route path="dashboard/students-details" element={<FacultyStudent/>} />
              {/* faculites details  */}
              <Route path="dashboard/faculties-details" element={<FacultiesDetails/>} />
              {/* query  */}
              <Route path="dashboard/queries" element={<Queries/>} />
              </>
            )
          }
        </Route>
      </Routes>
    </div>
      
  );
}

export default App;
