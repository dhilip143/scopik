import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/2088817079.png";
import { loginContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Bell, Search } from "lucide-react";

function Header() {
  // const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");
  // const studentLoginStatus = localStorage.getItem("studentLoginStatus");

  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const [isOpen, setIsOpen] = useState(false);
  const { login } = useContext(loginContext);
  // const [isLogin, setIsLogin] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // scrolling down
      setShowNavbar(false);
    } else {
      // scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  const handleLogout = async () => {
    const refresh = localStorage.getItem("refresh_token");
  
    try {
      await axios.post("http://127.0.0.1:8000/backend_main/logout/", {
        refresh: refresh,
      });
  
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`w-full flex justify-between items-center bg-[#1a3b7e] sticky top-0 px-10 z-50 shadow-xl ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-5">
          <Link to="/">
            <img className="w-12 h-12 m-auto" src={logo} alt="Scopik Logo" />
          </Link>
        </div>

        <div className=" m-auto gap-10 text-white hidden sm:flex ">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/course" className="">
            Courses
          </Link>
          <Link to="/blog" className="">
            Blog
          </Link>
          {/* <Link to="/" className="">
            Contact
          </Link> */}
          <Link to="/student_dashboard" className="">
            Student Dashboard
          </Link>
          <a
            className=""
            target="__blank"
            href="https://minipro.pythonanywhere.com/admin/login/?next=/admin/"
          >
            Admin
          </a>
        </div>

        {!login ? (
          <div className="my-auto gap-2 sm:flex hidden">
            <Link to="/login" className="px-4 py-2 m-auto rounded-3xl bg-white">
              Login
            </Link>
            <Link
              to="/register"
              className="text-white px-4 py-2 m-auto rounded-3xl bg-black"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className=" p-4 hidden md:flex justify-end items-center gap-4 relative">
            {/* Search Button */}
            <div className="relative">
              <button
                onClick={handleSearchToggle}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100"
              >
                <Search className="text-blue-800 w-5 h-5" />
              </button>

              {/* Search Input */}
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 w-48 p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100">
                <Bell className="text-blue-800 w-5 h-5" />
              </button>
              {/* Red Dot */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
            </div>

            {/* Profile Image */}
            <div className="relative inline-block text-left">
              <div
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-white cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-md border z-10">
                  <ul className="text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Nav Dropdown */}
        <div className="sm:hidden flex relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>

          {isOpen && (
            <div
              className="md:hidden  bg-white space-y-2 absolute top-0 -right-80 w-64 h-96 p-5 shadow-lg rounded-lg"
              style={{ transition: "2s", transform: "translatex(-285px)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 md:hidden absolute top-5 right-5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                  onClick={toggleMenu}
                />
              </svg>
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-500 pt-10"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-blue-500"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-blue-500"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-blue-500"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-blue-500"
              >
                Course
              </Link>
              <div>
                <a
                  className=""
                  target="__blank"
                  href="http://127.0.0.1:8000/admin/login/?next=/admin/"
                >
                  Admin
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
