import { useState } from "react"
import login from "../assets/Login/loginBg.jpg"
import { useNavigate } from "react-router-dom"

function SuperLogin()
{
    const[username,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [err,setError]=useState("")
    const navigate=useNavigate()

    const uname="scopikadmin@gmail.com"
    const adpass="scopik@eduteck25"

    function checkLogin()
    {
        if(username===uname&& password===adpass)
        {
            setError("Login Successfull")
            navigate("/sadmin")
        }
        else
        {
            setError("Invalid Login Credientials")
            setUser("")
            setPassword("")
        }
    }


    return(<>
    <div className="w-full px-10 md:flex items-center justify-center xl:bg-cover bg-cover xl:bg-center h-screen" style={{ backgroundImage: `url(${login}) `}}>
            <div className="border border-gray-500 rounded-[32px] backdrop-blur-xl w-[480px] h-[350px] flex flex-col items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-[#004C91] font-news font-medium text-2xl mt-4">Login</h1>
                <p className="text-red-500 font-news">{err}</p>
            </div>
            <div className="mt-10">
            <div className="flex flex-col my-2">
                <label>E-mail</label>
                <input type="email" value={username} onChange={(e)=>{setUser(e.target.value)}} placeholder="Enter Your Email id" className="w-[280px] p-2 rounded-md border border-[#004C9180]" />
            </div>
            <div className="flex flex-col my-2">
                <label>Password</label>
                <input type="password" value={password} placeholder="Enter Your password" onChange={(e)=>{setPassword(e.target.value)}} className="w-[280px] p-2 rounded-md border border-[#004C9180]" />
            </div>
            </div>
            <button className="w-[280px] my-2 p-1 rounded-md text-white bg-gradient-to-r from-[#23A4DC] to-[#084E90]" onClick={checkLogin}>Sign in</button>
            </div>
            
     </div>
    </>)


}
export default SuperLogin