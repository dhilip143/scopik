

import pythonBg from "/src/assets/pythonBg.jpg"
import bg from "/src/assets/12px Flip Grid.jpg"

import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "/src/assets/Course/Course1.jpg"
import image2 from "/src/assets/Course/Course2.jpg"
import image3 from "/src/assets/Course/Course3.jpg"
import image4 from "/src/assets/Course/Course4.jpg"



const Courses = [
  {
    id: 1,

    title: "Python",
    rating: 4.5,
    duration: 52,
    status:"All",
    price: "$99.00",
    category: "AI",
    total_enrolled: 20,
    image: image1,
    Total_chapters: 5,
    meta_desc : "Our Python Programming Course is designed for beginners and professionals alike, covering everything from basic concepts like variables and loops to advanced topics like object-oriented programming and real-world project building.",

    main_image: pythonBg,
    description: "Learn Python from scratch and unlock endless career opportunities in software development, data science, automation, and more. Our Python Programming Course is designed for beginners and professionals alike, covering everything from basic concepts like variables and loops to advanced topics like object-oriented programming and real-world project building. With interactive lessons, hands-on exercises, and expert guidance, you’ll gain the skills needed to build applications, automate tasks, and solve real-world problems. Start your journey with one of the world’s most powerful and in-demand programming languages today!",
    level: "Intermediate",
    start_date: "2025-04-23",
    
    instructor: 35,
    
    chapters: [
        {
            chapter: 1,
            title: "Chapter - 1",
            video_url: "https://youtu.be/SKV1ZRkVNP0?si=LGx0_DY0bI94LSml",
            description: "python"
            
        },
        {
            chapter: 2,
            title: "Chapter - 2",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        },
        {
            chapter: 4,
            title: "Chapter - 3",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        },
        {
            chapter: 5,
            title: "Chapter - 4",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        }
    ],
    certificate: null,
    related_courses: [],
    is_enrolled: false
},
  {
    id: 2,

    title: "React",
    rating: 4.5,
    duration: 52,
    status:"Completed",
    price: "$99.00",
    category: "React",
    total_enrolled: 1,
    image: image2,
    Total_chapters: 4,
    
    meta_desc : "Our Python Programming Course is designed for beginners and professionals alike, covering everything from basic concepts like variables and loops to advanced topics like object-oriented programming and real-world project building.",
    description: "Learn Python from scratch and unlock endless career opportunities in software development, data science, automation, and more. Our Python Programming Course is designed for beginners and professionals alike, covering everything from basic concepts like variables and loops to advanced topics like object-oriented programming and real-world project building. With interactive lessons, hands-on exercises, and expert guidance, you’ll gain the skills needed to build applications, automate tasks, and solve real-world problems. Start your journey with one of the world’s most powerful and in-demand programming languages today!",
    level: "Intermediate",
    start_date: "2025-04-23",
    
    instructor: 35,
    
    chapters: [
        {
            chapter: 1,
            title: "Chapter - 1",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
            
        },
        {
            chapter: 2,
            title: "Chapter - 2",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        },
        {
            chapter: 4,
            title: "Chapter - 3",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        },
        {
            chapter: 5,
            title: "Chapter - 4",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        }
    ],
    certificate: null,
    related_courses: [],
    is_enrolled: false
},
  {
    id: 3,

    title: "Game Design",
    rating: 4.5,
    duration: 52,
    status:"In Progress",
    price: "$99.00",
    category: "3D",
    total_enrolled: 1,
    image: image3,
    Total_chapters: 2,
    
    meta_desc : "Our Python Programming Course is designed for beginners and professionals alike, covering everything from basic concepts like variables and loops to advanced topics like object-oriented programming and real-world project building.",
    description: "Learn Python from scratch and unlock endless career opportunities in software development, data science, automation, and more. Our Python Programming Course is designed for beginners and professionals alike, covering everything from basic concepts like variables and loops to advanced topics like object-oriented programming and real-world project building. With interactive lessons, hands-on exercises, and expert guidance, you’ll gain the skills needed to build applications, automate tasks, and solve real-world problems. Start your journey with one of the world’s most powerful and in-demand programming languages today!",
    level: "Intermediate",
    start_date: "2025-04-23",
    
    instructor: 35,
    
    chapters: [
        {
            chapter: 1,
            title: "Chapter - 1",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
            
        },
        {
            chapter: 2,
            title: "Chapter - 2",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        },
        {
            chapter: 4,
            title: "Chapter - 3",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        },
        {
            chapter: 5,
            title: "Chapter - 4",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        }
    ],
    certificate: null,
    related_courses: [],
    is_enrolled: false
},
  {
    id: 4,

    title: "Web Development",
    rating: 4.5,
    duration: 52,
    status:"All",
    price: "$99.00",
    category: "Interior",
    total_enrolled: 1,
    image: image4,
    Total_chapters: 5,
    
    meta_desc : "Our Python Programming Course is designed for beginners and professionals alike, covering everything from basic concepts like variables and loops to advanced topics like object-oriented programming and real-world project building.",
    description: "Learn Python from scratch and unlock endless career opportunities in software development, data science, automation, and more. Our Python Programming Course is designed for beginners and professionals alike, covering everything from basic concepts like variables and loops to advanced topics like object-oriented programming and real-world project building. With interactive lessons, hands-on exercises, and expert guidance, you’ll gain the skills needed to build applications, automate tasks, and solve real-world problems. Start your journey with one of the world’s most powerful and in-demand programming languages today!",
    level: "Intermediate",
    start_date: "2025-04-23",
    
    instructor: 35,
    
    chapters: [
        {
            chapter: 1,
            title: "Chapter - 1",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
            
        },
        {
            chapter: 2,
            title: "Chapter - 2",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        },
        {
            chapter: 4,
            title: "Chapter - 3",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        },
        {
            chapter: 5,
            title: "Chapter - 4",
            video_url: "https://youtu.be/BVIoAILnZ4Q?si=TS4adnP5tT98w7BX",
            description: "python"
        }
    ],
    certificate: null,
    related_courses: [],
    is_enrolled: false
},
];
export { Courses };


export default function CourseList() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredCourses = Courses
    .filter(course =>
      (filter === "All" || course.status === filter) &&
      course.title?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {

      if (sortBy === "name") return a.title.localeCompare(b.title);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "duration") return b.duration - a.duration;
      return 0;

    });

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-8 mb-4 px-12 py-2 text-2xl text-[#00338D] font-semibold shadow-md">
        {["All", "In Progress", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={` ${
              filter === status ? "border-b-2 pb-2 border-blue-500" : "border-blue-800"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 mx-12">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="name">Sort by Name</option>
          <option value="rating">Sort by Rating</option>
          <option value="duration">Sort by Duration</option>
        </select>

        <input
          type="text"
          placeholder="Search any course..."
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-12 my-5" style={{ backgroundImage: `url(${bg})` }}>
        {filteredCourses.map((course) => (
          <Link to={`/course/${course.id}`}>
          <div
            key={course.id}
            className="relative bg-white rounded-xl mx-5 shadow hover:shadow-lg transition p-4"
          >

            {/* <div className="min-h-60 bg-gray-200 rounded mb-4"></div>
            <h3 className="text-xl ml-2 font-bold">{course.name}</h3>
            <div className="flex justify-between text-sm text-gray-500">
              <span>⏱ {course.duration} Hrs</span>
              <span>⭐ {course.rating}</span>
            </div> */}
    {/* <div className="max-w-sm rounded-2xl overflow-hidden shadow-md border p-4 bg-white"> */}
      {/* Header
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Instructor"
          className="w-10 h-10 rounded-full"
        />
        <h3 className="font-medium text-gray-800">Mohiuddin Sumon</h3>
        <div className="ml-auto">
          <button className="text-teal-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 12.75l6 6 6-6M5.25 11.25l6-6 6 6"
              />
            </svg>
          </button>
        </div>
      </div> */}

      {/* Image */}
      <img
        src={course.image}
        alt="Course"
        className="rounded-lg w-full mb-4"
      />

      {/* Tags and Progress */}
      <div className="flex items-center justify-between mb-3 ">
        <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {course.category}
        </span>
        <span className="text-xs text-gray-600">38% Slots Booked</span>
      </div>

      {/* Lessons and Students */}
      <div className="text-sm text-gray-600 mb-2 flex gap-4">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M8 16h8M8 12h8m-6-4h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </svg>
          <span>{course.Total_chapters} Chapters</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M17 20h5v-2a4 4 0 0 0-4-4h-1M9 20H4v-2a4 4 0 0 1 4-4h1m6-4a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </svg>
          <span>{course.total_enrolled} Students</span>
        </div>
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-gray-800 mb-2">
        {course.title}
      </h4>

      {/* Rating and Price */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-yellow-500 text-sm">
          <span className="font-semibold text-black mr-1">{course.rating}</span>
          <span className="flex">
              <svg  className="size-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.561-.955L10 0l2.952 5.955 6.561.955-4.757 4.635 1.122 6.545z" />
              </svg>
          </span>
        </div>
        <span className="text-green-600 font-semibold text-lg">{course.price}</span>
      </div>
    </div>

          {/* </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
}




// export default function Course() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredCourses =
//     selectedCategory === "All"
//       ? Courses
//       : Courses.filter((course) => course.category === selectedCategory);

//   return (
//     <>
//       <div className="flex justify-center items-start">
//         <aside className="md:sticky md:top-28 hidden md:flex w-96 h-96 py-10 px-10 mx-10 my-20 p-4 bg-gray-100 rounded-xl shadow-lg">
//           <ul className="space-y-5 flex flex-col justify-center">
//             {categories.map((cat, i) => (
//               <a>
//                 <li
//                   key={i}
//                   onClick={() => setSelectedCategory(cat)}
//                   className="flex justify-between items-center text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition"
//                 >
//                   {cat}
//                   <span className="text-xl mx-10">›</span>
//                 </li>
//               </a>
//             ))}
//           </ul>
//         </aside>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 lg:mx-20 box-border gap-5">
//           {filteredCourses.map((course, index) => (
//             <Link to={`/course/${course.id}`}>
//               <div
//                 key={index}
//                 // onClick={() => setSelectedCategory(course)}
//                 className="w-full rounded-lg overflow-hidden shadow-lg font-[Segeo UI] bg-white text-left"
//               >
//                 <div className="card-image">
//                   <img
//                     src={course.image}
//                     alt="Course"
//                     className="w-full object-fit"
//                   />
//                 </div>
//                 <div className="py-4 px-2 w-full">
//                   <span className=" flex items-center text-sm gap-1">
//                     <img src={prem} alt="" className="size-4" />
//                     Premium
//                   </span>
//                   <h1 className="text-3xl text-[#2d1d7b] mb-2">
//                     {course.title}
//                   </h1>
//                   <p className="text-1xl text-[#555] mb-2">
//                     {course.meta_desc}
//                   </p>
//                   <span className="flex items-center gap-2 my-4 mx-2">
//                     <img src={star} alt="" className="" />
//                     <img src={star} alt="" className="" />
//                     <img src={star} alt="" className="" />
//                     <img src={star} alt="" className="" />
//                     <img src={star} alt="" className="" />
//                     18,000
//                   </span>
//                   <div className="flex justify-between items-center mx-2">
//                       <span className="flex gap-1 items-center ">
//                         <img src={time} alt="" className="size-5" />
//                         52 Hrs
//                       </span>
//                     <button className="bg-[#4c33f0] text-white p-2 border-0 rounded-lg text-sm cursor-pointer hover:bg-[#3724c0]">
//                       <Link to={`/course/${course.id}`}>Enroll Now</Link>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="sm:hidden flex relative">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-6"
//             onClick={toggleMenu}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
//             />
//           </svg>

//           {isOpen && (
//             <div
//               className="md:hidden  bg-white space-y-2 absolute top-0 -right-80 w-64 h-96 p-5 shadow-lg rounded-lg"
//               style={{ transition: "2s", transform: "translatex(-285px)" }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="size-6 md:hidden absolute top-5 right-5 "
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18 18 6M6 6l12 12"
//                   onClick={toggleMenu}
//                 />
//               </svg>

//               <ul className="space-y-5">
//                 {categories.map((cat, i) => (
//                   <a>
//                     <li
//                       key={i}
//                       className="flex justify-between items-center text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition"
//                     >
//                       {cat}
//                       <span className="text-xl">›</span>
//                     </li>
//                   </a>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }










// // Dummy course data
// const courses = [
//   { id: 1,
//     name: "AI Fundamentals",
//     status: "All", duration: 52,
//     rating: 4.5, price: "$99.00",
//     student:22,
//     chapters:5,
//     category: "AI",
//     image: image01
//   },
//   { id: 2, name: "React Basics", status: "Completed", duration: 48, rating: 4.7, price: "$79.00",  student:35, chapters:5, category: "React", image: image2  },
//   { id: 3, name: "3D Modelling", status: "In Progress", duration: 60, rating: 4.2, price: "$95.00",  student:5, chapters:5, category: "3D", image: image3  },
//   { id: 4, name: "Interior Design", status: "All", duration: 50, rating: 4.3, price: "$29.00",  student:16, chapters:5, category: "Interior", image: image4  },
//   { id: 5, name: "Python for Data Science", status: "Completed", duration: 72, rating: 4.8, price: "Free", student:10, chapters:5, category: "Python", image: image1  },
//   // ...add more courses here
// ];




