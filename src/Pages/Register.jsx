import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/Login/loginIlustrator.png";
import loginBg from "../assets/Login/loginBg.jpg";

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confir, setConfirm] = useState("");
  const [role, setRole] = useState("student");
  const [err, setErr] = useState("");
  const [log, setLog] = useState("");
  const navigate = useNavigate();

  async function handleClick() {
    if (password !== confir) {
      setErr("Password doesn't match");
      return;
    }
    setErr("");
    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, password, user_type: role }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErr(errorData.error || "Registration failed. Please try again.");
        return;
      }

      setLog("Registration Successful");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setErr("An error occurred during registration. Please try again.");
    }
  }

  return (
    <>
      <div
        className="w-full px-10 md:flex items-center justify-center xl:bg-cover bg-cover xl:bg-center h-screen"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div>
          <img src={loginImage} alt="" />
        </div>
        <div className="w-[40%] items-center justify-evenly bg-gray-100 backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#23A4DC] to-[#084E90] text-transparent bg-clip-text mb-6">
            Register
          </h2>
          <p>{log}</p>
          <p className="text-red-500 mt-2">{err}</p>

          <div className="flex flex-col">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="p-2 border rounded-md focus:outline-none mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="p-2 mt-1 focus:outline-none border rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mt-1 focus:outline-none border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Create Password"
              className="p-2 mt-1 focus:outline-none border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="p-2 mt-1 focus:outline-none rounded-md border"
              value={confir}
              onChange={(e) => setConfirm(e.target.value)}
            />
            <label>Register as</label>
            <select
              className="p-2 mt-1 focus:outline-none rounded-md border"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>student</option>
              <option>teacher</option>
            </select>
            <button
              className="bg-gradient-to-r from-blue-400 to to-blue-700 mt-2 p-2 rounded-md text-white"
              onClick={handleClick}
            >
              Register as {role}
            </button>
            <p className="text-center mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-[#084E90]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;