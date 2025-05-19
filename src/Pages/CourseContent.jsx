import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Syllabus from "../Components/Syllabus.jsx";

import python from "../assets/python.mp4"; // Assume you have this

const CourseContent = () => {
  const [selectedContent, setSelectedContent] = useState(true);
  const navigate = useNavigate();

  const handleDone = () => {
    navigate("/course/:id"); // 👈 Navigate to your main course page (you can change this path)
  };

  return (
    <div>
      <h1 className="font-medium text-3xl mt-2 ml-[345px]">
        Python Tutorial
      </h1>

      {/* Video Section */}
      <div className="flex justify-center items-center mt-5">
        {selectedContent ? (
          <video src={python} controls width="600" />
        ) : (
          <p className="text-gray-500">Please select a chapter to begin</p>
        )}
      </div>

      {/* Done Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleDone}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default CourseContent;
