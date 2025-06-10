import React, { useState, useEffect } from "react";
import slider1 from'../assets/header1.jpg'
import slider2 from'../assets/header2.jpg'
import slider3 from'../assets/header3.jpg'

const slides = [
  {
    id: 1,
    image: slider1,
    title: "GAMING",
  },
  {
    id: 2,
    image: slider2,
    title: "VIRTUAL REALITY",
  },
  {
    id: 3,
    image: slider3,
    title: "3D MODELING ",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] xl:h-[95vh] mx-auto max-w-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div
        
             className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-end justify-center rounded-3xl "
            // style={{ backgroundImage: `url(${whiteBg})` }}
          >
            <div className="relative bg-white bg-opacity-75 p-8 md:p-12 rounded-lg shadow-md w-full max-w-4xl border-l-8 border-r-8 border-[#161651] text-center overflow-hidden ">
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold font-[Newsreader] text-[#161651] mb-4">
                Welcome to Scopik Learning
              </h1>
              <p className="text-gray-800 text-xl mb-6">
            Scopik Learning presents curated online courses that combine
                faculty and disciplines from across the University, connecting
                learners around the globe with the world's most urgent issues.
              </p>
             <button className="bg-[#161651] text-white px-6 py-2 rounded-md hover:bg-blue-900 transition">
               LEARN MORE
              </button>
             {/* Bottom blend */}
            </div>
          </div>{" "}
        </div>
      ))}

      {/* Dots */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-black" : "bg-black/50"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
