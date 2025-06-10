import pythonBg from "/src/assets/pythonBg.jpg"
import bg from "/src/assets/12px Flip Grid.jpg"
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "/src/assets/Course/Course1.jpg"
import image2 from "/src/assets/Course/Course2.jpg"
import image3 from "/src/assets/Course/Course3.jpg"
import image4 from "/src/assets/Course/Course4.jpg"
import axios from "axios"
import { CourseContext } from "../App";




export default function CourseList() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const {Course}=useContext(CourseContext)

  const filteredCourses = Course.filter(course =>
      (filter === "All" || course.status === filter) &&
      course.title?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {

      if (sortBy === "name") return a.title.localeCompare(b.title);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "duration") return b.duration - a.duration;
      return 0;

    });

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-8 mb-4 px-12 py-2 text-2xl text-[#00338D] font-semibold shadow-md">
        {["All", "In Progress", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={` ${
              filter === status ? "border-b-2 pb-2 border-blue-500" : "border-blue-800"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 mx-12">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="name">Sort by Name</option>
          <option value="rating">Sort by Rating</option>
          <option value="duration">Sort by Duration</option>
        </select>

        <input
          type="text"
          placeholder="Search any course..."
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Course Cards */}
      <div
        className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-12 my-5"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {Course.map((course) => (
          <Link to={`/course/${course.id}`}>
            <div
              key={course.id}
              className="relative group bg-white  mx-5 shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={course.image}
                alt="Course"
                className="scale-105 w-full mb-4 transition-transform duration-500 group-hover:scale-90 group-hover:-translate-y-20"
              />

              {/* Hidden content revealed on hover */}
              {/* <div className="absolute bottom-10 left-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-blue-500 text-white p-4">
    Hidden content revealed on hover!
  </div> */}
              <div className="max-h-0 overflow-hidden transition-all duration-500 transform -translate-y-12 group-hover:max-h-52 group-hover:mt-2 px-4">
                <p className="text-md text-gray-600 ">
                  {course.description}
                </p>
              </div>

              {/* Tags and Progress */}
              <div className="flex items-center justify-between mb-3 p-4 ">
                <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {course.category}
                </span>
                <span className="text-xs text-gray-600">38% Slots Booked</span>
              </div>

              {/* Lessons and Students */}
              <div className="text-sm text-gray-600 mb-2 flex gap-4 p-4">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 16h8M8 12h8m-6-4h6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>{course.Total_chapters} Chapters</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17 20h5v-2a4 4 0 0 0-4-4h-1M9 20H4v-2a4 4 0 0 1 4-4h1m6-4a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>{course.total_enrolled} Students</span>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-gray-800 mb-2 p-4">
                {course.name}
              </h4>

              {/* Rating and Price */}
              <div className="flex items-center justify-between mt-4 p-4">
                <div className="flex items-center text-yellow-500 text-sm">
                  <span className="font-semibold text-black mr-1">
                    {course.rating}
                  </span>
                  <span className="flex">
                    <svg className="size-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.561-.955L10 0l2.952 5.955 6.561.955-4.757 4.635 1.122 6.545z" />
                    </svg>
                  </span>
                </div>
                <span className="text-green-600 font-semibold text-lg">
                  {course.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}