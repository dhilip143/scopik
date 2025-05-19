// src/Components/CourseCard.jsx

import { Courses } from "../Pages/Courses";
import timer from "../assets/timer.png";
import star from "../assets/star.png";

function CourseCard() {
  const first = Courses.slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 z-50">
      {first.map((course, index) => (
        <div key={index} className="relative group">
          <div className="p-0 shadow-lg rounded-lg h-[380px] relative overflow-hidden bg-white transition duration-300">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={course.image}
                className="w-full h-full object-cover"
                alt={course.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300"></div>
            </div>

            {/* White Content Overlay */}
            <div className="absolute bottom-0 w-full bg-white transition-all duration-500 h-[200px] group-hover:h-[240px] z-10 rounded-t-lg px-5 py-4 overflow-hidden">
              <div className="transition-all duration-500 group-hover:-translate-y-2">
                <h1 className="text-xl font-semibold text-[#2d1d7b] mb-2">
                  {course.title}
                </h1>

                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <img src={timer} alt="duration" className="w-5 h-5" />
                    <p className="text-sm text-gray-700">{course.duration} Hrs</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={star} alt="rating" className="w-5 h-5" />
                    <p className="text-sm text-gray-700">{course.rating}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quos?
                </p>
              </div>

              <button className="w-full mt-4 bg-[#4c33f0] hover:bg-[#3724c0] text-white rounded-full py-2 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseCard;
