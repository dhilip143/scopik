import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "/src/Components/Sidebar.jsx";
import { useEffect } from "react";
import Calendar from "../Components/Calender";
import icon from "/src/assets/Frame 1597881281.png";
import Graph from "../Components/Graph";
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios';
// import Swal from 'sweetalert2'

// const baseUrl='http://127.0.0.1:8000/api'

const classes = [
  { subject: "Video Editing", date: "09/02", active: false },
  { subject: "Artificial Intelligence", date: "09/01", active: true },
  { subject: "3D Modeling", date: "01/02", active: false },
  { subject: "Ar/VR", date: "27/01", active: false },
  { subject: "3D Modeling", date: "17/02", active: false },
  { subject: "Ar/VR", date: "24/01", active: false },
];

const Dashboard = () => {
  useEffect(() => {
    document.title = "LMS | Teacher DashBoard";
  });

  // const [dashbarData,setDashbarData]=useState([])
  // const studentId=localStorage.getItem('studentId')

  // useEffect(()=>{
  //   try{
  //     axios.get(baseUrl+'/student/dashboard/'+studentId)
  //     .then((res)=>{
  //       setDashbarData(res.data)
  //     })
  //   }catch(error){
  //     console.log(error)
  //   }
  // },[]);

  return (
    <div className=" mt-4 w-full">
      <div className="md:flex">
        <aside className="">
          <Sidebar className="" />
        </aside>
        <section className="sm:w-full relative block md:flex justify-evenly items-center gap-5">
          <div className="flex flex-col w-full gap-4 ">
            <div className="1">
              <div className="flex items-center p-4 bg-white shadow rounded-xl w-full h-36">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <img src={icon} alt="icon" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Enrolled Students</p>
                  <p className="text-lg font-semibold text-gray-800">5</p>
                  <p className="text-sm text-gray-700">Digital Marketing</p>
                </div>
              </div>
            </div>

            <div className="2">
              <div className="bg-white rounded-xl shadow-md p-5 w-full  mx-auto text-gray-700 h-80">
                <h3 className="text-center text-lg font-semibold mb-4">
                  Next Classes
                </h3>
                <ul className="space-y-3">
                  {classes.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span
                        className={`text-sm ${
                          item.active
                            ? "text-blue-600 font-medium"
                            : "text-gray-400"
                        }`}
                      >
                        {item.subject}
                      </span>
                      <span
                        className={`text-sm ${
                          item.active
                            ? "text-blue-600 font-medium"
                            : "text-gray-400"
                        }`}
                      >
                        {item.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="3">
              <div className="flex items-center p-4 bg-white shadow rounded-xl w-full h-36">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <img src={icon} alt="icon" className="w-6 h-6" />
                </div>
                <div>
                  {/* <p className="text-sm text-gray-500">Enrolled Students</p>
                  <p className="text-lg font-semibold text-gray-800">5</p>
                  <p className="text-sm text-gray-700">Digital Marketing</p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 ">
            <div className="1 flex gap-4">
              <div className="flex items-center p-4 bg-white shadow rounded-xl w-full h-36">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <img src={icon} alt="icon" className="w-6 h-6" />
                </div>
                <div>
                  {/* <p className="text-sm text-gray-500">Enrolled Students</p>
                  <p className="text-lg font-semibold text-gray-800">5</p>
                  <p className="text-sm text-gray-700">Digital Marketing</p> */}
                </div>
              </div>
              <div className="flex items-center p-4 bg-white shadow rounded-xl w-full h-36">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <img src={icon} alt="icon" className="w-6 h-6" />
                </div>
                <div>
                  {/* <p className="text-sm text-gray-500">Enrolled Students</p>
                  <p className="text-lg font-semibold text-gray-800">5</p>
                  <p className="text-sm text-gray-700">Digital Marketing</p> */}
                </div>
              </div>
            </div>

            <div className="w-full">
              <Graph />
            </div>

            <div className="3 flex gap-4">
              <div className="flex items-center p-4 bg-white shadow rounded-xl w-full h-36">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <img src={icon} alt="icon" className="w-6 h-6" />
                </div>
                <div>
                  {/* <p className="text-sm text-gray-500">Enrolled Students</p>
                  <p className="text-lg font-semibold text-gray-800">5</p>
                  <p className="text-sm text-gray-700">Digital Marketing</p> */}
                </div>
              </div>
              <div className="flex items-center p-4 bg-white shadow rounded-xl w-full h-36">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <img src={icon} alt="icon" className="w-6 h-6" />
                </div>
                <div>
                  {/* <p className="text-sm text-gray-500">Enrolled Students</p>
                  <p className="text-lg font-semibold text-gray-800">5</p>
                  <p className="text-sm text-gray-700">Digital Marketing</p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 ">
            <div className="">
              <Calendar />
            </div>

            <div className="w-full flex justify-center">
              <div className="flex justify-center items-center p-4 bg-white shadow rounded-xl w-full h-72">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <img src={icon} alt="icon" className="w-6 h-6" />
                </div>
                <div>
                  {/* <p className="text-sm text-gray-500">Enrolled Students</p>
                  <p className="text-lg font-semibold text-gray-800">5</p>
                  <p className="text-sm text-gray-700">Digital Marketing</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
