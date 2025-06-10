import { useState } from "react";
import icon from "../assets/icon 1.png";

function FinishedCourses() {
  const [courses] = useState([
    { id: 1, name: "React Basics" },
    { id: 2, name: "Python for Beginners" },
    { id: 3, name: "Advanced Django" },
  ]);

  const [search, setSearch] = useState("");

  // Reorder courses: matched course comes first
  const filteredCourses = [...courses].sort((a, b) => {
    const aMatch = a.name.toLowerCase().includes(search.toLowerCase());
    const bMatch = b.name.toLowerCase().includes(search.toLowerCase());
    return bMatch - aMatch; // true > false, so matched moves up
  });

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Search Bar */}
      <div className=" w-full flex justify-end px-4">
      <input
        type="text"
        placeholder="Search course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 px-3 py-2 border border-gray-300 rounded-full  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      </div>

      {/* Course List */}
      <div className="space-y-4 w-full">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between bg-white rounded-full shadow-md px-6 py-3"
          >
            <div className="flex items-center gap-4">
              <img
                src={icon}
                alt="Course Icon"
                className="w-10 h-10 rounded-full bg-gray-200 object-cover"
              />
              <span className="text-lg font-medium text-black">{course.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinishedCourses;
