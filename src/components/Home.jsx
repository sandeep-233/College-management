import React from 'react'
// import Navbar from "./Navbar.jsx";
import Slider from "./Slider.jsx";
import DirectorCard from './DirectorCard.jsx';
import Faculty from './Faculty.jsx';
import Department from './Department.jsx';


const Home = () => {
    return (
        <div  className="flex flex-col">
            {/* <Navbar/> */}
            <div className='bg-gray-100'>
                <Slider/>
                <div className='flex flex-row'>
                    <DirectorCard/>
                    <Faculty/>
                </div>
                <Department/>
            </div>
        </div> 

)}

export default Home;