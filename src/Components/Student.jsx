
import React from "react";
import icon from "/src/assets/Quote Icon.png";
import student from "/src/assets/Ellipse 1467.png";
// import homeWorld from "/src/map1.png"
import homeWorld from "/src/assets/map1.png";


const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    text: "The instructors were very clear and engaging. Loved the discussion forums and weekly live Q&A sessions. Would love to see even more advanced content in the future.",
    course: "python",
  },
  {
    id: 2,
    name: "Priya Sharma",
    text: "The classes were insightful and transformative. Highly recommended!",
    course: "python",
  },
  {
    id: 3,
    name: "Arjun Dass",
    text: "I’ve tried a few online platforms before, but this one stands out. The content is updated, the instructors are knowledgeable, and I could learn at my own pace. Highly recommend!",
    course: "python",
  },
  {
    id: 4,
    name: "Arya",
    text: "The best thing about this LMS is how well-organized everything is. The video quality is great, and the notes provided with each lesson make studying so much easier.",
    course: "Express",
  },
  {
    id: 5,
    name: "Nikhil",
    text: "As a visual learner, I really appreciated the interactive elements and real-world projects. This course helped me build a solid portfolio and land my first freelance gig!",
    course: "Django",
  },
  {
    id: 6,
    name: "Meera",
    text: "The instructors were very clear and engaging. Loved the discussion forums and weekly live Q&A sessions. Would love to see even more advanced content in the future.",
    course: "React",
  },
  {
    id: 7,
    name: "Kiran",
    text: "This LMS is super intuitive and easy to navigate. I loved the step-by-step learning structure, and the quizzes after each module really helped reinforce what I learned.",
    course: "Java",
  },
];

const TestimonialCarousel = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const showSlide = (index) => {
  //   const total = testimonials.length;
  //   if (index >= total) setCurrentIndex(0);
  //   else if (index < 0) setCurrentIndex(total - 1);
  //   else setCurrentIndex(index);
  // };

  return (
    <div className="overflow-x-hidden py-8 h-[550px]" style={{ backgroundImage: `url(${homeWorld})` }}>

      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-[newsreader] text-[#FFFFFF] p-2">
          What our <span className="text-[#FF8922] font-bold">Students</span>{" "}
          Say!
        </h1>
      </div>

      {/* Carousel */}
      <div className="relative w-full py-8 sm:py-12">
        <div
          className="flex animate-scroll whitespace-nowrap transition-transform duration-500 ease-in-out gap-5 "
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
          // style={{
          //   transform: `translateX(-${currentIndex * 100}%)`,
          //   width: `${testimonials.length * 11}%`,
          // }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-full lg:w-40 flex-shrink-0 px-4 sm:px-8 text-center box-border text-wrap bg-[#000060] shadow-lg "
              style={{ minWidth: "40%" }}
            >
              <img src={icon} alt="Qutation" className="mt-5 size-12" />
              <p className="italic text-[#F4F4F4] text-justify text-sm sm:text-lg max-w-2xl my-4 ">
                {t.text}
              </p>
              <div className="flex justify-start items-center gap-5 mb-5">
                <img src={student} alt="" className="size-12" />
                <div className="flex flex-col items-start ">
                  <h1 className="text-lg font-bold text-[#F4F4F4]">{t.name}</h1>
                  <p className="text-sm font-light pl-1 text-[#F4F4F4]">{t.course}</p>
                </div>
              </div>
            </div>
            
          ))}
          <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 14s linear infinite;
        }
      `}</style>
        </div>

        {/* Navigation */}
        {/* <div className="absolute top-1/2 left-0 right-0 flex justify-between px-3 sm:px-5 transform -translate-y-1/2">
          <button
            onClick={() => showSlide(currentIndex - 1)}
            className="text-3xl sm:text-4xl text-gray-600 hover:text-yellow-400 transition-colors"
          >
            &#10094;
          </button>
          <button
            onClick={() => showSlide(currentIndex + 1)}
            className="text-3xl sm:text-4xl text-gray-600 hover:text-yellow-400 transition-colors"
          >
            &#10095;
          </button>
        </div> */}
      </div>

    </div>
  );
};

export default TestimonialCarousel;
