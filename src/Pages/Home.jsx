import React from "react";
import Partners from "/src/Components/Partners.jsx";
import Blog from "/src/Components/Blog.jsx";
import Student from "/src/Components/Student.jsx";
import CourseCard from "/src/Components/CourseCard.jsx";
import HeroSlider from "../Components/HeroSlider";
// import LearnScopik from "../Components/LearnScopik";
import Future from "../Components/LearningFuture";
import course from "../assets/course.png";
import NewCourseCard from "../Components/NewComponets";
import LearningProcess from "../Components/Learning Process ";
import Treanding from "../Components/treanding";
import FAQAccordion from "../Components/FAQAccordion";
import Faq from "../Components/faq";
import Card from "../Components/card";
import lan from "../assets/learning Process image.png"
import FaqSection from "../Components/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      {/* <LearnScopik /> */}
      <LearningProcess/>
      
          <Card/>
       
      {/* <Future /> */}
     
      <Treanding />
     
      {/* Course Section with Background Image */}
      {/* <div
        className="w-full bg-cover bg-center py-10 px-5 md:px-10"
        style={{ backgroundImage: `url(${course})` }}
      >
        <h2 className="text-center text-[#00005C] mb-8 text-xl sm:text-2xl md:text-3xl font-[newsreader]">
          Our Top Courses
        </h2>
        <div className="flex justify-center">
          <CourseCard />
        </div>
      </div> */}
      {/* <div className="bg-gradient-to-r from-[#FFFFFF] to-[#B6E6FC] mt-2"> */}
        {/* <div>
          <h1 className="text-center font-news text-[28px] font-semibold pt-10 mx-5  text-[#084E90] ">Top <span className="text-[#D17418]">Course</span></h1>
        </div> */}
        
      <div>
        <CourseCard/>
      </div>

      <Partners />
       
        <div className>
          <Blog/>
        </div>
       
      <div>

      </div>
      <Student />
      {/* <NewCourseCard/> */}
  {/* <div className= 'flex
'
>
  {/* <img src={lan} alt="mal" /> */}
  {/* <Faq />
  <FAQAccordion /> */}
{/* </div> */} 
<FaqSection/>
<footer/>


    
    </>
  );
}
