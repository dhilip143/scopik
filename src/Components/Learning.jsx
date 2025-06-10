import React, { useState } from 'react';
import nam from '../assets/man.png';
import { Plus, Minus } from 'lucide-react'; // Make sure this is installed: npm install lucide-react

function Learning() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQItem = ({ isOpen, onClick }) => (
    <div className="border rounded-xl mb-2">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
      >
        <span className="font-semibold text-lg">Asked Questions</span>
        <span className="text-blue-500">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-sm text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. samples
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="p-10 max-w-4xl bg-[#FAFAFA]">
        <div className="flex justify-center">
          <span className="text-[#162B56] text-2xl mt-[40px]">Learning</span>
          <span className="text-[#D17418] text-2xl mt-[40px]"> Process</span>
        </div>

        <div className="flex flex-wrap gap-6 justify-center text-center mt-[67px]">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx}>
              <img className="mx-auto" src={nam} alt="man" />
              <h1 className="text-2xl text-[#162B56]">Enrolling the Course</h1>
              <p className="text-sm text-[#686868] text-center pt-[20px]">
                Find quick answers to the most common <br />
                questions. Browse below to get the information <br />
                you need fast.
              </p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Learning;