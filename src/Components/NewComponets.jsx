import { Courses } from "../Pages/Courses";
import timer from "../assets/timer.png";
import star from "../assets/star.png";

function NewCourseCard() {
  const first = Courses.slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {first.map((course, index) => (
        <div
          key={index}
          className="group relative rounded-lg shadow-md bg-white cursor-pointer
                     overflow-hidden transition-shadow duration-300 ease-in-out
                     hover:shadow-xl"
        >
          {/* Image Container */}
          <div className="relative h-60 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out
                         group-hover:scale-110 group-hover:-translate-y-1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-500 ease-in-out"></div>
          </div>

          {/* Content */}
          <div className="p-5 transition-transform duration-500 ease-in-out transform group-hover:-translate-y-4">
            <h2 className="text-xl font-semibold text-[#2d1d7b] mb-2">{course.title}</h2>

            <div className="flex justify-between items-center text-sm text-gray-700 mb-3">
              <div className="flex items-center gap-1">
                <img src={timer} alt="duration" className="w-5 h-5" />
                <span>{course.duration} Hrs</span>
              </div>
              <div className="flex items-center gap-1">
                <img src={star} alt="rating" className="w-5 h-5" />
                <span>{course.rating}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            {/* Learn More Button */}
            <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <button className="w-full py-3 bg-[#4c33f0] hover:bg-[#3724c0] text-white rounded-full font-semibold tracking-wide">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewCourseCard;
