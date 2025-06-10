import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/2088817079.png";
import { loginContext } from "../App";
import axios from "axios";
import { Bell, Search } from "lucide-react";

function Header() {
  const { login, setLogin, userName } = useContext(loginContext);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const handleSearchToggle = () => setShowSearch(!showSearch);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY < lastScrollY);
    setLastScrollY(currentScrollY);
  };

  const handleLogout = async () => {
    const refresh = localStorage.getItem("refresh_token");

    try {
      await axios.post("http://127.0.0.1:8000/api/logout/", { refresh });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setLogin(false);
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
    <nav
      className={`w-full flex justify-between items-center bg-[#F7F7F7] sticky top-0 px-10 z-50 shadow-xl ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="p-5">
        <Link to="/">
          <img className="w-12 h-12 m-auto" src={logo} alt="Scopik Logo" />
        </Link>
      </div>

      <div className="m-auto gap-10 text-white hidden sm:flex ">
        <Link to="/">Home</Link>
        <Link to="/course">Courses</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/student_dashboard">Student Dashboard</Link>
      </div>

      {!login ? (
        <div className="my-auto gap-2 sm:flex hidden">
          <Link to="/login" className="px-4 py-2 rounded-3xl bg-white">
            Login
          </Link>
          <Link
            to="/register"
            className="text-white px-4 py-2 rounded-3xl bg-black"
          >
            Register
          </Link>
        </div>
      ) : (
        <div className="p-4 hidden md:flex justify-end items-center gap-4 relative">
          <span className="text-white mr-4 font-semibold">Welcome, {userName}</span>
          <div className="relative">
            <button
              onClick={handleSearchToggle}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100"
            >
              <Search className="text-blue-800 w-5 h-5" />
            </button>
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 w-48 p-2 rounded-md border border-gray-300"
              />
            )}
          </div>

          <div className="relative">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100">
              <Bell className="text-blue-800 w-5 h-5" />
            </button>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full" />
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-3xl bg-white text-blue-800 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex relative">
        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>

        {isOpen && (
          <div className="md:hidden bg-white space-y-2 absolute top-0 -right-80 w-64 h-96 p-5 shadow-lg rounded-lg"
               style={{ transform: "translateX(-285px)", transition: "0.3s" }}>
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 md:hidden absolute top-5 right-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <Link to="/">Home</Link>
            <Link to="/course">Courses</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/student_dashboard">Dashboard</Link>
            <a href="http://127.0.0.1:8000/admin/" target="_blank">Admin</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
