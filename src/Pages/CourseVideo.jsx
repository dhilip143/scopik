// import React, { useState } from "react";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Courses } from "./Courses";
import Course from "./InnerCourse";
import VideoPlayer from "/src/Components/VideoPlayer.jsx";

const courseData = [
  {
    section: "Getting Started",
    videos: [
      {
        title: "Intro to Webflow Tutorial training course",
        url: "https://www.youtube.com/embed/qcQKq4XABNk?si=Rbp7jtnZfpf0dOIK&amp",
      },
      {
        title: "Getting started with Webflow tutorial",
        url: "https://www.youtube.com/embed/3t4kTLLn1R4",
      },
      {
        title: "What is Webflow",
        url: "https://www.youtube.com/embed/hx1eJ7w6F3k",
      },
      {
        title: "Webflow FAQs – How much is webflow",
        url: "https://www.youtube.com/embed/mhFxrGHaU0w",
      },
      {
        title: "How to build your first website in webflow",
        url: "https://www.youtube.com/embed/qJ6IZ1Dyomk",
      },
    ],
  },
  {
    section: "The Brief",
    videos: [
      {
        title: "Project Overview",
        url: "https://www.youtube.com/embed/XtL7pQEvM6k",
      },
      {
        title: "Client Needs",
        url: "https://www.youtube.com/embed/92liTp1K-7U",
      },
    ],
  },
  {
    section: "Buttons & Navigation – Level 1",
    videos: [
      {
        title: "Intro to Buttons",
        url: "https://www.youtube.com/embed/9Hy4sS5Vv0k",
      },
      {
        title: "Creating Navigation Menus",
        url: "https://www.youtube.com/embed/HkzMA1U7RdU",
      },
      {
        title: "Styling Navigation",
        url: "https://www.youtube.com/embed/JvZ7GmNSzHg",
      },
      {
        title: "Responsive Navbars",
        url: "https://www.youtube.com/embed/1WvGZPd4I98",
      },
    ],
  },
  {
    section: "Responsive Design",
    videos: [
      {
        title: "Understanding Breakpoints",
        url: "https://www.youtube.com/embed/B2eYyUO0YmM",
      },
      {
        title: "Making Layouts Responsive",
        url: "https://www.youtube.com/embed/T20UgJCsFqo",
      },
      {
        title: "Testing Responsiveness",
        url: "https://www.youtube.com/embed/bYo2z_NcB_g",
      },
    ],
  },
];

const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperloop Machine Language",
      "None of the above",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    options: ["var myVar;", "variable myVar;", "int myVar;", "v myVar;"],
    answer: "var myVar;",
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    options: ["<script>", "<javascript>", "<js>", "<code>"],
    answer: "<script>",
  },
];

export default function CourseVideo() {
  const { id } = useParams();
  const videoCourse = Courses.find((course) => course.id === parseInt(id));
  const [currentVideo, setCurrentVideo] = useState({
    ...courseData[0].videos[0],
    section: courseData[0].section,
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [unlockedVideos, setUnlockedVideos] = useState([
    `${courseData[0].section}_0`,
  ]);
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [watchedPercent, setWatchedPercent] = useState(0);
  const [validated, setValidated] = useState(false);
  const playerRef = useRef(null);

  const handleOptionClick = (option) => setSelected(option);

  const handleNext = () => {
    if (selected === quizData[current].answer) setScore((prev) => prev + 1);
    if (current + 1 < quizData.length) {
      setCurrent((prev) => prev + 1);
      setSelected("");
    } else setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
  };

  const goToNextVideo = () => {
    const { section, title } = currentVideo;
    let foundCurrent = false;
    let nextVideo = null;
    outer: for (let i = 0; i < courseData.length; i++) {
      const s = courseData[i];
      for (let j = 0; j < s.videos.length; j++) {
        const v = s.videos[j];
        if (foundCurrent) {
          nextVideo = { ...v, section: s.section };
          setUnlockedVideos((prev) => [...prev, `${s.section}_${j}`]);
          break outer;
        }
        if (s.section === section && v.title === title) foundCurrent = true;
      }
    }
    if (nextVideo) {
      setCurrentVideo(nextVideo);
      restartQuiz();
    }
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const goHome = () => navigate(`/course/${videoCourse.id}`);

  const handleProgress = ({ played }) => {
    const percent = Math.floor(played * 100);
    setWatchedPercent(percent);
    if (!validated && percent >= 90) setValidated(true);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between bg-[#1A3B7E] text-white px-4 py-2 shadow-md z-50">
        <button
          onClick={toggleSidebar}
          className="w-8 h-8 rounded-full bg-[#1A3B7E] hover:bg-white hover:text-black flex items-center justify-center"
        >
          &lt;
        </button>
        <div className="flex-grow text-center font-semibold">
          {videoCourse.title}
        </div>
        <button
          onClick={goHome}
          className="text-xl hover:text-gray-300 transition"
        >
          ×
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}

        <div
          className={`transition-all duration-300 ease-in-out h-screen overflow-y-auto ${
            sidebarOpen ? "w-96 p-4" : "w-0 p-0 opacity-0 pointer-events-none"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Course Content</h2>
          {courseData.map((section, sIdx) => {
            const isOpen = section.section === currentVideo?.section;

            return (
              <div
                key={sIdx}
                className="mb-2 border rounded-lg overflow-hidden"
              >
                {/* Section header (accordion toggle) */}
                <button
                  className={`w-full text-left px-4 py-3 font-semibold flex justify-between items-center ${
                    isOpen
                      ? "bg-white text-[#1A3B7E]"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => {
                    const firstVideoKey = `${section.section}_0`;
                    const isFirstVideoUnlocked =
                      unlockedVideos.includes(firstVideoKey);

                    if (isFirstVideoUnlocked) {
                      setCurrentVideo({
                        ...section.videos[0],
                        section: section.section,
                      });
                    }
                  }}
                >
                  <span>{section.section}</span>
                  <span className="text-sm text-gray-600">
                    0/{section.videos.length}
                  </span>
                </button>

                {/* Video list */}
                {isOpen && (
                  <div className="bg-white">
                    {section.videos.map((video, vIdx) => {
                      const videoKey = `${section.section}_${vIdx}`;
                      const isUnlocked = unlockedVideos.includes(videoKey);

                      return (
                        <div
                          key={vIdx}
                          onClick={() =>
                            isUnlocked &&
                            setCurrentVideo({
                              ...video,
                              section: section.section,
                            })
                          }
                          className={`flex items-center justify-between p-3 text-sm rounded-md cursor-pointer ${
                            currentVideo?.title === video.title
                              ? "bg-[#dde8ff] text-[#1A3B7E] font-semibold"
                              : isUnlocked
                              ? "hover:bg-gray-100"
                              : "opacity-50 cursor-not-allowed"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M10 15l5-3-5-3v6zm12-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
                            </svg>
                            <span>{video.title}</span>
                          </div>
                          <span className="text-xs text-gray-500">00:00</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex-1">
          <div className="h-[650px] bg-black flex items-center justify-center">
            <VideoPlayer
              ref={playerRef}
              url={currentVideo.url}
              controls
              width="100%"
              height="100%"
              onProgress={handleProgress}
            />
          </div>

          <div className="text-right text-xs pr-4 pt-1 text-gray-400">
            Watched: {watchedPercent}%{" "}
            {validated && <span className="text-green-500">(Validated)</span>}
          </div>

          <div className="p-6 mx-auto mt-6 bg-white rounded-xl shadow-md space-y-6">
            {showResult ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-green-600">
                  Quiz Completed!
                </h2>
                <p className="text-lg text-gray-700 mt-2">
                  Your Score: <span className="font-bold">{score}</span> /{" "}
                  {quizData.length}
                </p>
                {score === quizData.length && (
                  <button
                    onClick={goToNextVideo}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Go to Next Video
                  </button>
                )}
                {score !== quizData.length && (
                  <button
                    onClick={restartQuiz}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Restart Quiz
                  </button>
                )}
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-blue-800">
                  Question {current + 1} of {quizData.length}
                </h3>
                <p className="text-lg font-medium text-gray-900">
                  {quizData[current].question}
                </p>
                <ul className="space-y-2">
                  {quizData[current].options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className={`p-3 border rounded cursor-pointer ${
                        selected === option
                          ? "bg-blue-100 border-blue-500 text-blue-800"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 hover:bg-blue-700"
                >
                  {current === quizData.length - 1 ? "Submit" : "Next"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
