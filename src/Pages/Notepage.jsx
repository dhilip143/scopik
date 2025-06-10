import { useState } from "react"
import Graph from "../Components/Graph"
import StudentStatus from "../Components/StudentStatus"


function Note()
{
    const [course,setCourse]=useState(2)
    const [certi,setCertifi]=useState(4)
    const [completed,setCompleted]=useState(2)

    return(<>
    <div>
        <div className="flex gap-5">
            <div className="bg-[#f7f7f7] w-[256px] h-[144px]  rounded-2xl overflow-hidden">
                <div className="mx-5 mt-10">
                <h1>Course Remaning</h1>
                <p className="text-2xl font-inter text-blue-600">{course}</p>
                </div>

            </div>
             <div className="bg-[#f7f7f7] w-[256px] h-[144px]  rounded-2xl overflow-hidden">
                <div className="mx-5 mt-10">
                <h1>Certificate Gained</h1>
                <p className="text-2xl font-inter text-blue-600">{certi}</p>
                </div>

            </div>
             <div className="bg-[#f7f7f7] w-[256px] h-[144px]  rounded-2xl overflow-hidden">
                <div className="mx-5 mt-10">
                <h1>Course Completed</h1>
                <p className="text-2xl font-inter text-blue-600">{completed}</p>
                </div>

            </div>
        </div>
        <div className="mt-5">
            <Graph/>
        </div>
        <div className="mt-3">
            <StudentStatus/>
        </div>
    </div>
    
    </>)

}
export default Note