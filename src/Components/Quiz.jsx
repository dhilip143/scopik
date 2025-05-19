import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { syllabusList } from "./Syllabus";

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const individual = syllabusList.find((cor) => cor.id === Number(id)) || {};

  const handleAnswer = (qIndex, value) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  };

  const handleCancel = () => {
    navigate("/course"); // 👈 Change to your Course page route
  };

  const handleSubmit = () => {
    const isFirstCorrect = answers[1]?.toLowerCase() === individual.quiz.answer.toLowerCase();
    const isSecondCorrect = answers[2]?.toLowerCase() === "intro";

    if (isFirstCorrect && isSecondCorrect) {
      alert("🎉 Congratulations! You passed the quiz!");
      navigate("/course"); // 👈 After congratulations, go back to Course
    } else {
      alert("❌ Some answers are wrong. Please try again!");
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#2d0cff60] flex flex-col p-10 space-y-10 text-white min-h-screen">
      <h1 className="text-4xl font-bold">Quiz</h1>

      <div className="w-full max-w-2xl space-y-6">
        {/* Question 1 */}
        <div>
          <p className="text-lg font-semibold">{individual.quiz.question}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {individual.options.map((quiz, idx) => (
              <label key={idx} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="q1"
                  value={quiz}
                  onChange={() => handleAnswer(1, quiz)}
                  className="accent-white"
                />
                <span>{quiz}</span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-gray-300 my-8" />

        {/* Question 2 */}
        <div>
          <p className="text-lg font-semibold">02 : What is the short form of Elective - Sound Design?</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {["LMS Login", "LMS", "Intro", "test"].map((option, idx) => (
              <label key={idx} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="q2"
                  value={option}
                  onChange={() => handleAnswer(2, option)}
                  className="accent-white"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Cancel and Submit Buttons */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={handleCancel}
          className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-md font-semibold"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-md font-semibold"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
