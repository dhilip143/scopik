// import React, { useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const location = useLocation();

//   useEffect(() => {
//     document.title = 'LMS | MainMenu';
//     window.scrollTo(0, 0);
//   }, []);

//   // Helper function to check if a path is active
//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className=''>
//       <div className='flex flex-col p-4 shadow-xl space-y-5 my-10 mx-10'>

//         <Link to='/user-dashboard' className={`list-group-item list-group-item-action ${isActive('/user-dashboard') ? 'active' : ''}`}>
//           Dashboard
//         </Link>

//         <Link to='/my-courses' className={`list-group-item list-group-item-action ${isActive('/my-courses') ? 'active' : ''}`}>
//           My Courses
//         </Link>

//         <Link to='/favorite-courses' className={`list-group-item list-group-item-action ${isActive('/favorite-courses') ? 'active' : ''}`}>
//           Favorite Courses
//         </Link>

//         <Link to='/my-teachers' className={`list-group-item list-group-item-action ${isActive('/my-teachers') ? 'active' : ''}`}>
//           My Teachers
//         </Link>

//         <Link to='/recommended-courses' className={`list-group-item list-group-item-action ${isActive('/recommended-courses') ? 'active' : ''}`}>
//           Recommended Courses
//         </Link>

//         <Link to='/my-assignments' className={`list-group-item list-group-item-action ${isActive('/my-assignments') ? 'active' : ''}`}>
//           Assignments
//         </Link>

//         <Link to='/profile-setting' className={`list-group-item list-group-item-action ${isActive('/profile-setting') ? 'active' : ''}`}>
//           Profile Settings
//         </Link>

//         <Link to='/change-password' className={`list-group-item list-group-item-action ${isActive('/change-password') ? 'active' : ''}`}>
//           Change Password
//         </Link>

//         <Link to='/user-logout' className='list-group-item list-group-item-action text-danger'>
//           Logout
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default Sidebar;










// Sidebar.jsx
// import react, { useState } from 'react';
import profile from "/src/assets/Ellipse 1476.png"
import dashboardIcon from "/src/assets/StudentDashboard/icon1.png";
import coursesIcon from "/src/assets/StudentDashboard/icon2.png";
import favIcon from "/src/assets/StudentDashboard/icon3.png";
import teacherIcon from "/src/assets/StudentDashboard/icon4.png";
import assignmentIcon from "/src/assets/StudentDashboard/icon5.png";
import topIcon from "/src/assets/StudentDashboard/icon6.png";
import settingsIcon from "/src/assets/StudentDashboard/icon7.png";
import logoutIcon from "/src/assets/StudentDashboard/icon8.png";

const Sidebar = () => {
  return (
    <div className="bg-[#0A2E6C] h-[55px] hover:h-full xl:hover:h-[720px] lg:h-[720px] transition-all duration-300 group mx-5 my-5 xl:mx-10 xl:my-10 xl:w-20 w-14 hover:w-96 flex flex-col items-start py-2 md:py-6 px-2 md:px-4 rounded-xl md:rounded-2xl overflow-hidden relative z-10">
      
      {/* Profile Section */}
      <div className="flex items-center gap-3 w-full mb-6">
        <img
          src={profile}
          alt="Profile"
          className="size-10 rounded-full object-cover"
        />
        <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          UserName
        </span>
      </div>

      {/* Nav Items */}
      <NavItem to="" icon={dashboardIcon} label="Dashboard" active  />
      <NavItem to="" icon={coursesIcon} label="My Courses" />
      <NavItem to="" icon={favIcon} label="Fav Courses" />
      <NavItem to="" icon={teacherIcon} label="My Teachers" />
      <NavItem to="" icon={assignmentIcon} label="Assignments" />
      <NavItem to="" icon={topIcon} label="Top Courses" />
      <NavItem to="" icon={settingsIcon} label="Settings" />

      <div className="flex-grow" />

      <NavItem icon={logoutIcon} label="Logout" />
    </div>
  );
};

const NavItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-4 w-full px-3 py-2 mb-2 rounded-3xl transition-all duration-300 cursor-pointer 
        ${active ? "bg-white text-[#0A2E6C] font-semibold" : "text-white hover:bg-[#ffffff33]"}`}
    >
      <img src={icon} alt={label} className="size-6" />
      <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </div>
  );
};

export default Sidebar;
