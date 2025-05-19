import logo from "../assets/Logo.png"
import img from "../assets/Ellipse 1467.png"
import bell from"../assets/bell.png"
import search from "../assets/search.png"
import { Link } from "react-router-dom"
function Header1()
{
    return(<>
    <div className="flex bg-[#FFFFFF] shadow-sm justify-around items-center top-0 fixed z-50 w-full">
    <div>
        <img src={logo} alt="" className="w-16"/>
    </div>
    <div className="flex gap-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/course"}>Course</Link>
        <Link to={"/blog"}>Blogs</Link>
        <Link to={"/"}>Contact</Link>
    </div>
    <div className="flex my-2 gap-5 items-center">
        <div className="rounded-full border border-blue-500">
            <img src={search} alt="" className="w-8" />
        </div>
        <img src={bell} alt="" />
        <img src={img} alt="" />

    </div>
    </div>
    
    </>)

}
export default Header1