import back from "../assets/Home.png";
import gras from "../assets/ArtCourse.jpeg";
import gra from "../assets/ProgramCourse.jpeg";
import gr from "../assets/UICourse.jpg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "/src/App";

function Treanding() {
  const { login } = useContext(loginContext);
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    if (!login) {
      navigate("/login");
    } else {
      navigate("/course");
    }
  };

  const courses = [
    {
      id: 1,
      title: "The Art of Expression: A Complete Guide to Drawing & Painting",
      image: gras,
      description:
        "Unlock your creativity in this immersive course that explores the fundamentals of drawing and painting. Whether you're a beginner or looking to refine your skills, you'll learn key techniques in sketching, shading, color theory, and composition—turning blank pages into expressive works of art.",
      ratings: 4.0,
      price: "₹30,000",
    },
    {
      id: 2,
      title: "CodeCraft: Programming for Absolute Beginners",
      image: gra,
      description:
        "Start your coding journey with this beginner-friendly course designed to teach you the fundamentals of programming using real-world examples. You'll learn variables, loops, functions, and problem-solving techniques in a hands-on environment—no prior experience required!",
      ratings: 4.0,
      price: "₹5,000",
    },
    {
      id: 3,
      title: "UX to UI Mastery: Design Thinking to Visual Excellence",
      image: gr,
      description:
        "Bridge the gap between user experience and interface design. In this course, you'll dive deep into user-centric thinking, journey mapping, accessibility, visual design systems, and how to prototype with purpose. Build real projects and a strong portfolio.",
      ratings: 4.0,
      price: "₹5,000",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#050017] bg-[radial-gradient(circle,_#0A0A23_1px,_transparent_1px)] [background-size:40px_40px] overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: `url(${back})` }}
      ></div>
     

      {/* Foreground Content */}
      <div className="relative z-10 w-full  px-6 py-10">
        <div className="flex ml-3 justify-around items-center flex-wrap gap-10 px-10 py-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-[400px]"
            >
              {/* Image */}
              <div className="relative overflow-visible">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-90 group-hover:-translate-y-16"
                />
              </div>

              {/* Description on Hover */}
              <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out transform group-hover:max-h-52 group-hover:mt-4 px-5">
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>

              {/* Course Info */}
              <div className="px-5 pt-4 pb-6">
                <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>

                {/* Enroll Button */}
                <button
                  onClick={handleEnrollClick}
                  className="mt-4 w-full bg-[#4c33f0] hover:bg-[#3724c0] text-white rounded-full py-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Treanding;
