import { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // optional icons, can use others

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <>
    {/* <div> <h1>dhiliip</h1></div> */}
   
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
    </>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      {[...Array(4)].map((_, index) => (
        <FAQItem
          key={index}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
