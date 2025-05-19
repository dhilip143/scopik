import img1 from "/src/assets/WWHIcon1.png";
import img2 from "/src/assets/WWHIcon2.png";
import img3 from "/src/assets/WWHIcon3.png";
import img4 from "/src/assets/WWHIcon4.png";


function WhatWeHave() {
    return (
      <div className="p-6">
        <div className="my-8 font-inter size-18px  text-sm">
          <h3 className="text-[#004E8F] font-news text-3xl mb-4">What You'll Learn</h3>
          <p className="text-[#020202] font-Inter text-lg">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia atque, eius earum recusandae sed facilis voluptatem magni excepturi minus quam!
          </p>
        </div>
  
        <div className="flex flex-wrap items-center justify-evenly gap-5 text-center">
          <div>
            <img src={img1} alt="Students" className="mx-auto mb-2" />
            <h3 className="text-xl font-semibold">12,836</h3>
            <p className="text-2xl">Students</p>
          </div>
          <div>
            <img src={img2} alt="Detailed Classes" className="mx-auto mb-2" />
            <h3 className="text-xl font-semibold">Detailed</h3>
            <p className="text-2xl">Classes</p>
          </div>
          <div>
            <img src={img3} alt="Courses" className="mx-auto mb-2" />
            <h3 className="text-xl font-semibold">35+</h3>
            <p className="text-2xl">Courses</p>
          </div>
          <div>
            <img src={img4} alt="Staff" className="mx-auto mb-2" />
            <h3 className="text-xl font-semibold">Professional</h3>
            <p className="text-2xl">Staff</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default WhatWeHave;