import Header from "../Components/Header1"
import element from "../assets/element.png"
import note from "../assets/note.png"
import people from "../assets/people.png"
import setting from "../assets/setting.png"
import logout from "../assets/logout.png"

import { useState } from "react"
import Note from "./Notepage"
import StudentHome from "../Components/StudnetHome"
function StudentDashboard() {
    const [action,setAction]=useState(false)
    const [selected,setSelected]=useState("element")

  



    return (<>
        <div>
            <Header />
        </div>
        <div className="bg-green-100 w-full h-full min-h-screen overflow-hidden">
            <div className="flex gap-3">
                <div className="bg-white w-[80px] h-[550px] mt-10 ml-10 p-5 rounded-xl">
                    <div className="flex items-center flex-col gap-10 mt-10">
                        <img src={element} alt="" onClick={()=>{setSelected("element"); setAction(false)}} className={`p-1 cursor-pointer ${selected ==="element" ? "rounded-md shadow-md shadow-green-400":""}`} />
                        <img src={note} alt="" onClick={()=>{setSelected("note"); setAction(true)}} className={`p-1 cursor-pointer ${selected ==="note" ? "rounded-md shadow-md shadow-green-400":""}`} />
                        <img src={people} alt="" onClick={()=>{setSelected("people");}} className={`p-1 cursor-pointer ${selected==="people" ?" rounded-md shadow-md shadow-green-400":""}`} />
                        <img src={setting} alt="" onClick={()=>{setSelected("setting")}} className={`p-1 cursor-pointer ${selected==="setting"?"rounded-md shadow-md shadow-green-400":""}`} />
                        <div className="mt-24">
                            <img src={logout} alt="" />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col mt-10">
                    {
                        action?<div>
                            <Note/>
                    </div>:<div>
                        <StudentHome/>
                    </div>
                    }
                </div> 
                </div>
            </div>



    </>)

}
export default StudentDashboard