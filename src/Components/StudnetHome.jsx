import profile from "../assets/profile.png"
import logo from "../assets/person1.png"
import card from "../assets/rect_stu.png"
import Calendar from "../Components/Calender"


function StudentHome()
{
    return(<>

    <div>   
                <div className="mt-1 flex gap-10 items-center">
                    <div className="w-[830px] h-[382px] object-cover" style={{ backgroundImage: `url(${profile})` }}>
                        <div className="flex flex-col">
                            <div className="flex">
                                <img src={logo} alt="No image" className="w-[120px] h-[120px] p-4" />
                                <div>
                                    <p className="mt-9 font-inter text-[#132E65] text-2xl ">Dhilip Kumar</p>
                                    <p className="font-inter text-gray-500">jessica.hanson@example.com</p>
                                </div>
                            </div>
                            <div className="flex ml-5 mt-14 gap-10">
                                <div className="w-[200px] h-[144px] bg-[#F4F4F4] rounded-2xl p-10">
                                    <p className="ml-2 font-inter font-medium">07</p>
                                    <h1 className="w-[100px] text-[#132E65] font-inter  text-xl">Course Remaning</h1>

                                </div>
                                <div className="w-[200px] h-[144px] bg-[#F4F4F4] rounded-2xl p-10">
                                    <p className="ml-2 font-inter font-medium">07</p>
                                    <h1 className="w-[100px] text-[#132E65] font-inter  text-xl">Certificate Gained</h1>

                                </div>
                                <div className="w-[200px] h-[144px] bg-[#F4F4F4] rounded-2xl p-10">
                                    <p className="ml-2 font-inter font-medium">07</p>
                                    <h1 className="w-[100px] text-[#132E65] font-inter  text-xl">Course Completed</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Calendar />
                    </div>
                </div>
                <div className="mt-3 ml-2">
                    <h1 className="font-inter text-red-700 text-xl font-medium">Courses</h1>
                    <div className="flex gap-3">
                    <div className="w-[240px] h-[120px] bg-gray-300 rounded-2xl">
                        <div className="p-2 flex items-center gap-2">
                            <img src={card} alt="No image" className="rounded-md w-10 h-10" />
                            <p>Course Name</p>
                        </div>
                        <div className="text-sm font-inter ml-3">
                            <p>88% Completed</p>
                            <div  className="w-36 h-1 bg-blue-500 rounded-md"></div>
                        </div>

                    </div>
                    <div className="w-[240px] h-[120px] bg-gray-300 rounded-2xl">
                        <div className="p-2 flex items-center gap-2">
                            <img src={card} alt="No image" className="rounded-md w-10 h-10" />
                            <p>Course Name</p>
                        </div>
                        <div className="text-sm font-inter ml-3">
                            <p>88% Completed</p>
                            <div  className="w-36 h-1 bg-blue-500 rounded-md"></div>
                        </div>

                    </div>
                    <div className="w-[240px] h-[120px] bg-gray-300 rounded-2xl">
                        <div className="p-2 flex items-center gap-2">
                            <img src={card} alt="No image" className="rounded-md w-10 h-10" />
                            <p>Course Name</p>
                        </div>
                        <div className="text-sm font-inter ml-3">
                            <p>88% Completed</p>
                            <div  className="w-36 h-1 bg-blue-500 rounded-md"></div>
                        </div>

                    </div>
                    <div className="w-[240px] h-[120px] bg-gray-300 rounded-2xl">
                        <div className="p-2 flex items-center gap-2">
                            <img src={card} alt="No image" className="rounded-md w-10 h-10" />
                            <p>Course Name</p>
                        </div>
                        <div className="text-sm font-inter ml-3">
                            <p>88% Completed</p>
                            <div  className="w-36 h-1 bg-blue-500 rounded-md"></div>
                        </div>

                    </div>
                </div>
                </div>
                </div>
    </>)

}
export default StudentHome