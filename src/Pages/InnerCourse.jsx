import { useParams } from "react-router-dom";
// import logo1 from "/src/assets/Ellipse 1467.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
// import { Courses } from "./Courses";
import Footer from "../Components/Footer.jsx";
import Learning from "../Components/Learning";
// import whitebg from "/src/assets/Ellipse 1509.png";
import WhatWeHave from "../Components/WhatWeHave";
import Syllabus from "../Components/Syllabus";
import game from "../assets/landind.png";
import Header1 from "../Components/Header1";
import Student from "../Components/Student.jsx";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CourseContext, loginContext } from "../App.jsx";
// import CourseCard from "../Components/CourseCard.jsx"
// import eart from "../assets/Earth.png"

function Course() {
  const [entrolled, setEntrolled] = useState(false);
  const navigate = useNavigate();
  const {Course}=useContext(CourseContext)
  const {login} = useContext(loginContext);

  const { id } = useParams();
  const individual = Course.find((cor) => cor.id === Number(id)) || {};

  function handleEntrolled() {
    if (!login) {
      alert("Please login to enroll");
      return;
    }
    alert("You have been Successfully Registered");
    setEntrolled(true);
  }

  function start() {
    navigate(`/course-video/${individual.id}`)
  }

  return (
 <>
      <Header1 />
      <div
        className="relative w-full h-[600px] bg-cover bg-center mt-16"
        style={{ backgroundImage: `url(${game})` }}
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between py-0">
          {entrolled ? (
            <div id="about">
              <div className=" w-1/2 h-[550px] text-gray-800 bg-fixed pl-10 pt-10 rounded-r-full">
                <h1 className="text-4xl font-bold text-blue-900 mb-6">
                  {individual.name}
                </h1>
                <p className="text-lg w-[700px] leading-relaxed mb-8">
                  {individual.description}
                </p>
                <div className=" flex gap-5">
                  <button className="p-2 rounded-md [background-color:#084D90] text-white w-[100px]">
                    Entrolled
                  </button>
                  <button
                    onClick={start}
                    className="p-2 rounded-md [background-color:#084D90] text-white w-[140px]"
                  >
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-32" id="about">
              <div className=" w-1/2 h-] text-gray-800 bg-fixed pl-10 pt-10 rounded-r-full">
                {/* // style={{ backgroundImage: url(${whitebg}) }}   > */}
                <h1 className="text-4xl font-bold text-blue-900 mb-6">
                  {individual.name }
                </h1>
                <p className="text-lg w-[700px] leading-relaxed mb-8">
                  {individual.description}
                </p>
                <button
                  onClick={handleEntrolled}
                  class="relative inline-block px-10 py-3 md:px-12 text-white text-sm font-medium [background-color:#084D90] border border-[#084D90] rounded-md shadow-[4px_4px_0_0_#fff,4px_4px_0_1px_#000] hover:shadow-[4px_4px_0_0_#fff,4px_4px_0_1px_#000] active:shadow-[2px_2px_0_0_#fff,2px_2px_0_1px_#000] active:translate-x-[2px] active:translate-y-[2px] focus:outline-none"
                >
                  Enroll Now
                </button>
              </div>
              <div className=" mt-[300px] relative">
                {/* <div className="bg-white rounded-2xl shadow-lg p-6 w-[550px] flex flex-col gap-4">
                  <div className="text-3xl font-semibold text-blue-900">
                    ₹ 35,000
                  </div>
                  <div className="text-sm text-gray-500">32k Enrolled</div>
                  <div className="">
                    <div className="flex gap-20 mt-[4] text-gray-700">
                      <div className="flex items gap-1">
                        <span>📘</span> Intermediate
                      </div>
                      <div className="flex items gap-1">
                        <span>📅</span> January 30
                      </div>
                      <div className="flex items gap-1">
                        <span>📄</span> Certificate
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="fixed top-48 right-20 rounded-2xl shadow-lg p-6 w-[450px] bg-white border border-gray-200 z-0">
                  <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-blue-800">
                      ₹ 35,000
                    </h2>
                    <p className="text-sm text-gray-500">32k Enrolled</p>
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🗓</span>
                      <span>Duration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📅</span>
                      <span>January 30</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📜</span>
                      <span>Certificate</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Right Section */}
        </div>
      </div>

      {/* Navigation Bar */}
      <div className=" flex items-center justify-start gap-x-10 text-xl rounded-md mx-10 mt-2 px-10 w-[800px]">
        <AnchorLink className="anchor-link" href="#about">
          <p className="cursor-pointer text-gray-700 hover:text-[#FFA705] ">
            About
          </p>
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#course">
          <p className="cursor-pointer text-gray-700 hover:text-[#FFA705] ">
            Course
          </p>
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#cerficate">
          <p className="cursor-pointer text-gray-700 hover:text-[#FFA705] ">
            Certificate
          </p>
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#related">
          <p className="cursor-pointer text-gray-700 hover:text-[#FFA705]">
            Related Course
          </p>
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#reviews">
          <p className="cursor-pointer text-gray-700 hover:text-[#FFA705]">
            Reviews
          </p>
        </AnchorLink>
      </div>

      {/* What You'll Learn Section */}
      <WhatWeHave />
      
      <div id="course" >
        <Syllabus />
      </div>

      {/* Logo Info Section */}
      {/* <div  className="grid grid-cols-2 md:grid-cols-4 gap-6 px-[90px] mt-10 text-center">
                <div>
                    <img src={logo1} alt="Students" className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">12,836</h3>
                    <p className="text-sm">Students</p>
                </div>
                <div>
                    <img src={logo1} alt="Detailed Classes" className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Detailed</h3>
                    <p className="text-sm">Classes</p>
                </div>
                <div>
                    <img src={logo1} alt="Courses" className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">35+</h3>
                    <p className="text-sm">Courses</p>
                </div>
                <div>
                    <img src={logo1} alt="Staff" className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Professional</h3>
                    <p className="text-sm">Staff</p>
                </div>
            </div> */}

      <Learning />
      {/* <CourseCard/> */}
      <div id="reviews" className=" relative z-20">
        <Student />
      </div>

      {/* Course Syllabus */}
      <Footer />
    </>
  );
}

export default Course;
