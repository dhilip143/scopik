import Frame from "/src/assets/Frame 1686557539.png";



function LearnScopik() {
  return (
    <div className="w-full h-[750px] flex flex-col-reverse md:flex-row items-center justify-between lg:justify-around">
      <div className="max-w-md lg:max-w-xl mt-16 mx-10">
        <h2 className="text-[#004C90]  font-NewsReader text-3xl xl:text-4xl font-news">
          Learn in <span className="text-[#E0872E]">Scopik</span>
        </h2>
        <p className="text-lg  text-gray-700">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <button className="mt-4 bg-[#004C90] text-white px-4 py-2 rounded hover:bg-[#238bb3]">
          Explore Course
        </button>
      </div>
      <div className="mt-20 px-12">
        <img src={Frame} alt="Course Preview" className="w-[450px]" />
      </div>
    </div>
  );
}

export default LearnScopik;
