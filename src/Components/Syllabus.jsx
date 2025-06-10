import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";


const syllabusList = [
  {
    id: 1,
    chapter: 1,
    options: ["Madrid", "Berlin", "London", "Paris"],
    quiz: {
      question: "What is the capital of France?",
      answer: "madrid",
    },
    title: "Chapter - 1",
    items: "Intro",
    type: "course", // 👈 Add type field to decide route
  },
  {
    id: 2,
    chapter: 2,
    options: ["Madrid", "Berlin", "London", "Paris"],
    quiz: {
      question: "What is the capital of France?",
      answer: "madrid",
    },
    title: "Chapter - 2",
    items: "LMS Login",
    type: "course", // 👈 Add type field to decide route
  },
  {
    id: 3,
    chapter: 3,
    options: ["Madrid", "Berlin", "London", "Paris"],
    quiz: {
      question: "What is the capital of France?",
      answer: "madrid",
    },
    title: "Quiz",
    items: "Enter Quiz",
    type: "quiz", // 👈 Quiz type
  },
];

function Syllabus() {
  const [openIndex, setOpenIndex] = useState(null);
  

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-10 mt-2 bg-[#F6FBFE] w-full max-w-4xl">
      <div className="mt-4 space-y-4">
        <h2 className="text-2xl font-bold">
          Course <span className="text-indigo-600">Modules</span>
        </h2>
        <p className="text-gray-600 max-w-2xl">
          In this digital marketing course, you will gain a comprehensive
          understanding of online marketing strategies...
        </p>

        <div className="mt-6">
          {syllabusList.map((section, index) => (
            <div
              key={section.id}
              className="border-b py-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <strong>{section.title}</strong>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>

              {openIndex === index && (
                <ul className="ml-4 mt-2 list-disc text-gray-700">
                  <li>
                    <Link
                      to={
                        section.type === "quiz"
                          ? `/quiz/${section.id}`
                          : /video/
                      }
                      className="text-blue-600 hover:underline"
                    >
                      {section.items}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
export { syllabusList };