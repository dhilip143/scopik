import React, { useState, useEffect } from "react";
import slider1 from "/src/assets/Rectangle 2138.jpg";
import slider2 from "/src/assets/Frame 1597881187.jpg";

const slides = [
  {
    id: 1,
    image: slider1,
    title: "GAMING",
  },
  {
    id: 2,
    image: slider2,
    title: "VR EXPERIENCE",
  },
  {
    id: 3,
    image: slider1,
    title: "NEXT LEVEL TECH",
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
    <div className="relative w-full h-[80vh] xl:h-[80vh]  rounded-3xl mx-auto max-w-[95%] mt-6">
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
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end justify-center rounded-3xl">
            <h2 className="text-white text-6xl md:text-8xl xl:text-9xl mb-24 font-extralight tracking-wider">
              {slide.title}
            </h2>
          </div>
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