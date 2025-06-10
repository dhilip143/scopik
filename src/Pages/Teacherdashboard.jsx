import React, { useState } from "react";
import ele from '../assets/element-1.png';
import elv from '../assets/element-2.png';
import elc from '../assets/element-3.png';
import eln from '../assets/element-4.png';
import elm from '../assets/element-5.png';

import FinishedCourses from "../components/FinishedCourses"; // adjust path as needed
import Teacherhome from "../components/Teacherhome"; // import the Teacherhome component
import Teacherthird from "../Components/teacherthird";

function Teacherdashboard() {
  const [activeIcon, setActiveIcon] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
    if (!sidebarOpen) setSidebarOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#084E90] to-[#23A4DC] flex">
      {/* Sidebar */}
      <div
        className={`h-[660px] w-[80px] bg-white flex justify-center rounded-2xl flex-col items-center py-4 space-y-8 shadow mt-[53px] mb-[43px] ml-[120px] ${
          sidebarOpen ? "" : "hidden"
        }`}
      >
        {[
          { id: "dashboard", icon: ele, alt: "Dashboard Icon" },
          { id: "icon2", icon: elv, alt: "Icon 2" },
          { id: "icon3", icon: elc, alt: "Icon 3" },
          { id: "icon4", icon: eln, alt: "Icon 4" },
        ].map(({ id, icon, alt }) => (
          <div
            key={id}
            className={`p-2 rounded-lg cursor-pointer ${
              activeIcon === id
                ? "border shadow-md shadow-[#23A4DC] border-[#084E90]"
                : ""
            }`}
            onClick={() => handleIconClick(id)}
          >
            <img src={icon} alt={alt} />
          </div>
        ))}
        <div className="mt-auto text-blue-900 mb-4">
          <img src={elm} alt="Logout Icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-16">
        {activeIcon === "dashboard" && <Teacherhome />}
        {activeIcon === "icon2" && <FinishedCourses />}
        {activeIcon==="icon3"&&<Teacherthird/>}
        {/* Add more components here for icon3 and icon4 if needed */}
      </div>
    </div>
  );
}

export default Teacherdashboard;
