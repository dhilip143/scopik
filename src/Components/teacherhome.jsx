import React, { useState, useEffect } from "react";
import bac from '../assets/Union.png';
import man from "../assets/man1.png";
import { Pencil } from "lucide-react";
import Calender from "./Calender";

function Teacherhome() {
  const [teacher, setTeacher] = useState({
    name: "Dhilip Kumar",
    email: "jessica.hanson@example.com"
  });

  const [items, setItems] = useState([
    { count: "02", label: "Courses" },
    { count: "02", label: "Total Students" },
    { count: "07", label: "1st Year Courses" },
    { count: "04", label: "2nd Year Students" },
    { count: "02", label: "3rd Year Students" }
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => {
        if (!res.ok) throw new Error("API Error");
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="p-4 space-y-6">
      {/* Top Profile Section */}
      <div
        className="relative h-[148px] rounded-xl bg-white shadow-md flex items-center justify-between px-6"
        style={{ backgroundImage: `url(${bac})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}
      >
        {/* Left side: text */}
        <div className="z-10">
          <h1 className="text-lg font-bold text-[#132E65]">{teacher.name}</h1>
          <h2 className="text-sm text-gray-600">{teacher.email}</h2>
        </div>

        {/* Center image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
          <img src={man} alt="Profile" className="h-[80px] w-[80px] rounded-full border-4 border-white shadow" />
        </div>

        {/* Edit icon */}
        <div className="absolute top-4 right-4">
          <Pencil className="h-5 w-5 text-blue-500 cursor-pointer" />
        </div>
      </div>

      {/* Dashboard cards + calendar layout */}
      <div className="grid grid-cols-5 gap-4">
        {/* Cards (2 top + 3 bottom stacked) */}
        <div className="col-span-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {items.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="bg-white h-[120px] rounded-lg flex flex-col justify-center items-center shadow-md"
              >
                <h1 className="text-3xl font-bold text-blue-700">{item.count}</h1>
                <p className="text-sm text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {items.slice(2).map((item, index) => (
              <div
                key={index + 2}
                className="bg-white h-[120px] rounded-lg flex flex-col justify-center items-center shadow-md"
              >
                <h1 className="text-3xl font-bold text-blue-700">{item.count}</h1>
                <p className="text-sm text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="col-span-1">
          <Calender />
        </div>
      </div>
    </div>
  );
}

export default Teacherhome;
