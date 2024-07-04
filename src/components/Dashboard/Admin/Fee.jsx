import React from "react";
// import Navbar from "../../../pages/Admin/Navbar.jsx";
// import Sidebar from "../Sidebar.jsx";

const students = [
    {
      id: 1,
      name: 'John Doe',
      registrationId: '2021001',
      fee: '$500',
      contactNo: '123-456-7890',
    },
    {
      id: 2,
      name: 'John Doe',
      registrationId: '2021001',
      fee: '$500',
      contactNo: '123-456-7890',
    },
    {
      id: 3,
      name: 'John Doe',
      registrationId: '2021001',
      fee: '$500',
      contactNo: '123-456-7890',
    },
    {
      id: 4,
      name: 'John Doe',
      registrationId: '2021001',
      fee: '$500',
      contactNo: '123-456-7890',
    },
    {
      id: 5,
      name: 'John Doe',
      registrationId: '2021001',
      fee: '$500',
      contactNo: '123-456-7890',
    },
    {
      id: 5,
      name: 'John Doe',
      registrationId: '2021001',
      fee: '$500',
      contactNo: '123-456-7890',
    },
    {
      id: 5,
      name: 'John Doe',
      registrationId: '2021001',
      fee: '$500',
      contactNo: '123-456-7890',
    },
    // Add more student objects here...
  ];

const Fee = () => {
  return (
        <div className="bg-white h-[96%] w-[68%] ml-4 rounded-xl mr-7 overflow-y-scroll">
          <div className="bg-gray-200 h-screen  p-4 ">
            <div className="bg-white rounded-lg p-4 mr-5 ">
                <h1 className="text-2xl mb-5 p-5 border-b-2 ">Fee Details</h1>
                <div className="flex flex-row justify-around m-5 ">
                <form  className="flex flex-row space-x-36 px-5">
                    < div className="flex flex-col">
                    <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Session</label>
                    <select id="session"  className="bg-gray-50 border rounded-lg h-10 px w-52">
                        <option value="2020-24">2020-24</option>
                        <option value="2021-25">2021-25</option>
                        <option value="2022-26">2022-26</option>
                    </select>
                    </div>
                    <div className="flex flex-col">
                    <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Department</label>
                    <select id="department" name="cse" className="bg-gray-50 border rounded-lg h-10 px w-52 mb-8">
                        <option value="Computer Science">Computer Science</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Electronics and Communication">Electronics and Communication</option>
                        <option value="Civil">Civil</option>
                        <option value="Electrical">Electrical</option>
                    </select>
                    </div>
                    <div className="flex flex-col">
                    <label for="name" className="block mb-2 text-lg font-medium text-gray-500 m-1">Semester</label>
                    <select id="semester"  className="bg-gray-50 border rounded-lg h-10 px w-52">
                      {Array.from(Array(8), (e, i) => {
                         return <option value={i+1}>{i+1}</option>
                      })}
                    </select>
                    </div>
                </form>
                
                </div>

                <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Student Information</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Reg ID</th>
            <th className="border p-2">Fee</th>
            <th className="border p-2">Contact No</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border p-2 text-center">{student.name}</td>
              <td className="border p-2 text-center">{student.registrationId}</td>
              <td className="border p-2 text-center">{student.fee}</td>
              <td className="border p-2 text-center">{student.contactNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </div>
          </div>
        </div>
  );
};

export default Fee;