import { useState } from "react";
import icod from "../assets/icon 1.png";
import arrow from "../assets/arrow.png";
import studIcon from "../assets/icod.png"; // Student image

function Teacherthird() {
  const [courses, setCourses] = useState([
    {
      icon: studIcon,
      studentsname: "Santhosh",
      name: "Course 1",
      progress: 88,
    },
    {
      icon: studIcon,
      studentsname: "Student 2",
      name: "Course 2",
      progress: 88,
    },
    {
      icon: studIcon,
      studentsname: "Student 3",
      name: "Course 3",
      progress: 88,
    },
    {
      icon: studIcon,
      studentsname: "Student 4",
      name: "Course 4",
      progress: 88,
    },
  ]);

  const [expandedId, setExpandedId] = useState(null);

  const data = [
    {
      id: 1,
      icon: icod,
      name: "Santhosh",
      courses: courses,
    },
    {
      id: 2,
      icon: icod,
      name: "Santhosh",
      courses: courses,
    },
  ];

  const handleClick = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full flex flex-col items-center px-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md px-6 py-3 w-full mb-2 rounded-md"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between">
            {/* Student Icon and Name */}
            <div className="flex items-center gap-4">
              <img
                src={item.icon}
                alt="User Icon"
                className="w-20 h-20 rounded-full bg-gray-200 object-cover"
              />
              <span className="text-lg font-medium text-black">{item.name}</span>
            </div>

            {/* Course Count */}
            <div className="text-lg font-medium text-black">
              Total Courses: {item.courses.length.toString().padStart(2, "0")}
            </div>

            {/* Toggle Button */}
            <button onClick={() => handleClick(item.id)} className="p-2">
              <img
                src={arrow}
                alt="Dropdown"
                className={`w-5 h-5 transition-transform duration-200 ${
                  expandedId === item.id ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Course Details */}
          {expandedId === item.id && (
            <div className="mt-4">
              <div className="grid grid-cols-4 text-left font-semibold border-b pb-2 px-2">
                <div></div>
                <div>Course name</div>
                <div>Progress</div>
                <div></div>
              </div>

              {item.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-4 items-center text-sm border-b py-2 px-2"
                >
                  <div></div>

                  <div className="text-black font-medium">{course.name}</div>

                  <div>
                    <p className="text-sm text-blue-600 font-semibold">
                      {course.progress}% <span className="text-gray-500">Completed</span>
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div></div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Teacherthird;
