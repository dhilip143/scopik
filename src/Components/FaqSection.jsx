import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import mark from "../assets/question mark.png";
import len from "../assets/learning Process image.png"; // background image

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border rounded-xl mb-2 bg-white shadow">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
      >
        <span className="font-semibold text-lg">{question}</span>
        <span className="text-blue-500">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-sm text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Who can endroll in the course ',
      answer: 'Anyone with a passion to learn can join�no prior experience required. We offer beginner to advanced-level content for all learners.'
    },
    {
      question: 'do i get the cerficate after course complition ?',
      answer: 'Yes, a digital certificate is awarded upon successful completion. You can download and share it on LinkedIn or your resume.'
    },
    {
      question: 'Do I need prior experience?',
      answer: 'No experience is needed. Classes are suitable for all levels.'
    },
    {
      question: 'all the course self placed live?',
      answer: 'Most courses are self-paced with pre-recorded videos. Some may include live sessions.'
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${len})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col md:flex-row items-start justify-center p-8 gap-10">
        {/* Left: FAQ Intro */}
        <div className="md:w-1/2">
          <h1 className="text-[#FF8011] text-xl font-semibold mb-2">#FAQs</h1>
          <h1 className="text-2xl font-bold mb-2 text-[#57B5F9]">Frequently Asked Questions</h1>
          <p className="text-[#A3A3A3] mb-4">
            Find quick answers to the most common questions. <br />
            Browse below to get the information you need fast.
          </p>
          <img src={mark} alt="question" className="w-40" />
        </div>

        {/* Right: FAQ Accordion */}
        <div className="md:w-1/2 max-w-xl w-full">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
