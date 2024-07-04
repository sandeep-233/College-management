import React from "react";

const students = [
    {
      id: 1,
      name: 'John doe',
      registration: '2020978',
      
    },
    {
      id: 1,
      name: 'John doe',
      registration: '2020978',
      
    },
    {
      id: 1,
      name: 'John doe',
      registration: '2020978',
      
    },
    // Add more student objects here...
  ];

const MarkAttendance = () => {
  return (
    <div className="bg-white h-[96%] w-[70%] ml-4 rounded-xl mr-7">
      <div className="bg-gray-100 p-5 mt-10">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Registration Number</th>
              <th className="border p-2">Present</th>
            
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border p-2 text-center">{student.name}</td>
                <td className="border p-2 text-center">{student.registration}</td>
                <td className="border p-2 text-center">
                  <input type="checkbox" className="w-10 h-10"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

  export default MarkAttendance;