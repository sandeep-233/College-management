import React from 'react'
// import Navbar from "./Navbar.jsx";
import Sidebar from "../../components/Dashboard/Sidebar.jsx";
import Body from "./Body.jsx";

const Dashboard = () => {
    return (
        <div  className="flex flex-col">
            {/* <Navbar/> */}
            <div className='flex flex-row w-[100vw]'>
                <div className='w-[20vw]'><Sidebar/></div>
                <div className='w-[80vw]'><Body/></div>
            </div>
        </div> 

)}

export default Dashboard;