import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "/src/assets/Login/loginIlustrator.png";
import loginBg from "/src/assets/Login/loginBg.jpg";
import { loginContext } from "../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [role, setRole] = useState("student");
  const [activeTab, setActiveTab] = useState("student");
  const navigate = useNavigate();
  const { setLogin, setUserName } = useContext(loginContext);

  async function handleLogin() {
    if (!email || !password) {
      setErrorMsg("Please fill all details");
      return;
    }
    setErrorMsg("");
    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, user_type: role }),
      }
    );

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMsg(errorData.error || "Login failed. Please try again.");
        return;
      }

      const data = await response.json();
      setErrorMsg("Login Successful");
      console.log(email,password);
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      setLogin(true);
      if (data.user && data.user.name) {
        setUserName(data.user.name);
        localStorage.setItem("userName", data.user.name);
      }
      // Redirect to home page regardless of role
      navigate("/");
    } catch (err) {
      console.error("Login Failed", err);
      setErrorMsg("An error occurred during login. Please try again.");
    }
  }

  return (
    <>
      <div
        className="w-full px-10 md:flex items-center justify-center xl:bg-cover bg-cover xl:bg-center h-screen"
        style={{ backgroundImage: `url(${loginBg}) `}}
      >
        <div className="w-1/2 flex items-center justify-center">
          <img src={loginImage} alt="" className="" />
        </div>

        <div className="w-[40%] flex items-center justify-evenly bg-gray-100 backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-6 shadow-lg">
          <div className="p-8 w-full">
            <h2 className="text-2xl font-semibold text-center text-blue-900 mb-6 font-news">
              Login
            </h2>

            <div
              className="md:flex border p-1 border-black rounded-full overflow-hidden mb-8 w-fit mx-auto"
            >
              <button
                className={`px-4 py-2 font-medium transition-all rounded-3xl ${
                  activeTab === "student"
                    ? "bg-gradient-to-r from-[#23A4DC] to-[#084E90] text-white"
                    : "text-black"
                }`}
                onClick={() => {
                  setActiveTab("student");
                  setRole("student");
                }}
              >
                Student
              </button>
              <button
                className={`px-4 py-2 font-medium transition-all rounded-3xl ${
                  activeTab === "teacher"
                    ? "bg-gradient-to-r from-[#23A4DC] to-[#084E90] text-white "
                    : "text-black"
                }`}
                onClick={() => {
                  setActiveTab("teacher");
                  setRole("teacher");
                }}
              >
                Teacher
              </button>
            </div>
            <p className="text-center text-red-600">{errorMsg}</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your email address"
                  className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter your password"
                  className="w-full border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <button
              className="w-full mt-6 bg-gradient-to-r from-[#23A4DC] to-[#084E90] text-white font-medium py-2 rounded-md shadow-md hover:opacity-90 transition"
              onClick={handleLogin}
            >
              Sign in as {role}
            </button>

            <p className="text-sm text-center mt-4 text-gray-600">
              Don’t Have Account?{" "}
              <span className="text-[#084E90] font-medium cursor-pointer">
                <Link to="/register">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login