import Header1 from "./Header1"
import element from "../assets/element.png"
import logout from "../assets/logout.png"
import people from "../assets/people.png"
import note from "../assets/note.png"
import setting from "../assets/setting.png"
import { useEffect, useState } from "react"

function Superadmin() {
    const [color, setColor] = useState("element")
    const [course, setCourse] = useState(false)
    const [cardImage, setCardimage] = useState(null)
    const [courseImage, setCourseimage] = useState(null)
    const [addCourse, setCourses] = useState(false)
    const [innerChapter, setInnerChapter] = useState([
        // {
        //     chapterNumber: 1,
        //     chapterName: "React Tutorial",
        //     chapterType: "video",
        //     videoName: "Demo",
        //     video: "https://youtu.be/Uv7cKlZFXU8?si=jCL7yxu2-QVl84Hb"
        // }
    ])
    const [chapterNumber, setChapternumber] = useState("")
    const [chapterName, setChaptername] = useState("")
    const [chapterType, setChaptertype] = useState("")
    const [VideoName, setVideoname] = useState("")
    const [video, setVideo] = useState()

    const [name,setName]=useState("")
    const [desc,setDesc]=useState("")
    const [total,setTotal]=useState("")
    const [duration,setDuration]=useState("")
    const [price,setprice]=useState("")

    const [addedCourse,setaddedCourse]=useState([])



    useEffect(() => {
        console.log("Updated innerChapter: ", innerChapter);
    }, [innerChapter]);

    useEffect(()=>{
        console.log("Updated added:",addedCourse)
    },[addedCourse])



    function card(e) {
        const file = e.target.files[0]
        if (file) {
            const Imageprev = URL.createObjectURL(file)
            console.log(Imageprev)
            setCardimage(Imageprev)

        }
    }


    function addChapters() {
        const Chapters = {
            chapterNumber,
            chapterName,
            chapterType,
            VideoName,
            video
        }

        setInnerChapter([...innerChapter, Chapters])

        setChapternumber("")
        setChaptername("")
        setChaptertype("")
        setVideoname("")
        setVideo("")


        console.log(innerChapter)


    }

    function Discard() {
        setChapternumber("")
        setChaptername("")
        setChaptertype("")
        setVideoname("")
        setVideo("")
    }


    function handlecourse(e) {
        const file = e.target.files[0]
        const Courseprev = URL.createObjectURL(file)
        setCourseimage(Courseprev)
    }

    function addcourse() {
        setCourses(true)

    }

   

    function Confirm()
    {
        const addedValues={
            name,
            desc,
            cardImage,
            courseImage,
            total,
            duration,
            price,
            chapters:innerChapter
        }

        setaddedCourse([...addedCourse,addedValues])

        setTimeout(()=>{
            setColor("note")
            setCourse(true)
        },1000)
    }


    return (<>
        <div className="overflow-hidden">
            <Header1 />
        </div>
        <div className="pt-16 bg-gradient-to-r from-[#23A4DC] to-[#084E90] w-screen h-screen">
            <div className="flex  gap-5 mx-20">
                <div className="bg-white w-[88px] h-[550px] flex flex-col items-center gap-6  mt-16 rounded-2xl">
                    <div className="flex flex-col gap-10 mt-10">
                        <img src={element} alt="" onClick={() => { setColor("element") 
                            setCourse(false) }} className={`p-1  text-white rounded-lg cursor-pointer ${color === "element" ? "border shadow-md  shadow-[#23A4DC] border-[#084E90]" : ""}`} />
                        <img src={note} alt="" onClick={() => { setColor("note")
                            setCourse(true)
                         }} className={`p-1 text-white rounded-lg cursor-pointer ${color === "note" ? "border shadow-md  shadow-[#23A4DC] border-[#084E90]" : ""}`} />
                        <img src={people} alt="" onClick={() => { setColor("people") }} className={`p-1 text-white rounded-lg cursor-pointer ${color === "people" ? "border shadow-md  shadow-[#23A4DC] border-[#084E90]" : ""}`} />
                        <img src={setting} alt="" onClick={() => { setColor("setting") }} className={`p-1 text-white rounded-lg cursor-pointer ${color === "setting" ? "border shadow-md  shadow-[#23A4DC] border-[#084E90]" : ""}`} />
                    </div>
                    <div className="mt-40">
                        <img src={logout} alt="" />
                    </div>
                </div>
                {
                    course ? <div>
                        <div className="mt-20 w-[1050px] h-[300px]">
                            <div className="flex justify-end">
                                <input type="search" placeholder="Search" className="text-blue-500 border border-gray-500 focus:outline-none p-1 rounded-md" />
                            </div>
                            <div className="border bg-white border-[#084E90] shadow-xl shadow-[#23A4DC] rounded-xl mt-2 h-[450px]">
                            <div className="h-[400px] overflow-y-auto p-5">
                            {
                                addedCourse.map((item)=>{
                                    return(<>
                                    <div className="flex items-center justify-around border rounded-md p-1 mb-2">
                                        <div>
                                            <img src={item.cardImage} alt="No such image" className="w-[50px] h-[50px] rounded-full" />
                                        </div>
                                        <div className="w-[500px] p-2">
                                            <h1 className="text-center"> {item.name}</h1>
                                        </div>
                                        <div className="flex gap-11">
                                            <button className="bg-blue-500 text-white p-2 rounded-md">Edit</button>
                                            <button className="bg-red-500 text-white p-2 rounded-md">Delete</button>
                                        </div>
                                    </div>
                                    
                                    </>)
                            

                                })
                            }
                           </div>    

                            </div>    
                        

                        </div>
                    </div> : <div className="p-3 border border-[#071f36c3] mt-16 bg-white w-[1200px]  h-[590px] shadow-md shadow-[#23A4DC] rounded-lg">
                        <div className="flex justify-around h-[550px] overflow-y-auto pr-2">
                            <div>
                                <div className="flex flex-col">
                                    <label>Course Name:</label>
                                    <input type="text" placeholder="Course Name" className="w-[600px] p-2 border border-gray-400 rounded-md" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                </div>
                                <div className="flex flex-col">
                                    <label>Course Description:</label>
                                    <textarea placeholder="Course Name" className="w-[600px] p-2 border border-gray-400 rounded-md" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
                                </div>
                                <div className="flex flex-col">
                                    <label>Card Image:</label>
                                    <input type="file" accept="image" onChange={card} className="w-[600px] p-2 border border-gray-400 rounded-md"  />
                                </div>
                                <div className="flex flex-col">
                                    <label>Course Image:</label>
                                    <input type="file" accept="image" onChange={handlecourse} className="w-[600px] p-2 border border-gray-400 rounded-md" />
                                </div>
                                <div className="flex flex-col">
                                    <label>Total Chapters:</label>
                                    <input type="text" placeholder="Total Chapter" className="w-[600px] p-2 border border-gray-400 rounded-md" value={total} onChange={(e)=>{setTotal(e.target.value)}}  />
                                </div>
                                <div className="flex flex-col">
                                    <label>Duration:</label>
                                    <input type="text" placeholder="Course Duration" className="w-[600px] p-2 border border-gray-400 rounded-md" value={duration} onChange={(e)=>{setDuration(e.target.value)}} />
                                </div>
                                <div className="flex flex-col">
                                    <label>Course Price:</label>
                                    <input type="text" placeholder="Total Price" className="w-[600px] p-2 border border-gray-400 rounded-md" value={price} onChange={(e)=>{setprice(e.target.value)}} />
                                </div>
                                <div className="flex flex-col">

                                    <div className="flex items-center p-1 mt-2  justify-around border border-gray-400 gap-2  rounded-md">
                                        <label className="ml-2">Chapters</label>

                                        <button className="p-1 w-fit h-fit rounded-lg  mt-1 text-white bg-[#00007E]" onClick={addcourse}>Add </button>
                                    </div>
                                </div>
                                <div>
                                    {
                                        addCourse ? <div>
                                            <div className="w-[600px] h-[200px]  bg-white rounded-xl  border border-gray-500 mt-2">
                                                <div className="h-[190px] overflow-y-auto p-2">
                                                    <div className="bg-[#f8f8f8] rounded-md p-2">
                                                        <div className="flex flex-col">
                                                            <label>Id:</label>
                                                            <input type="number" placeholder="Chapter Number" value={chapterNumber} onChange={(e) => { setChapternumber(e.target.value) }} className="p-1 bg-transparent border border-gray-500 rounded-md" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <label>Title:</label>
                                                            <input type="text" placeholder="Chapter Title" className="p-1 bg-transparent border border-gray-500 rounded-md" value={chapterName} onChange={(e) => { setChaptername(e.target.value) }} />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <label>Chapter Type</label>
                                                            <input type="text" placeholder="Chapter Type" className="p-1 bg-transparent border border-gray-500 rounded-md" value={chapterType} onChange={(e) => { setChaptertype(e.target.value) }} />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <label>Video Name</label>
                                                            <input type="text" placeholder="Video Name" className="p-1 bg-transparent border border-gray-500 rounded-md" value={VideoName} onChange={(e) => { setVideoname(e.target.value) }} />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <label>Video</label>
                                                            <input type="file" accept="video/*" onChange={(e) => {
                                                                    const file = e.target.files[0];
                                                                    if (file) {
                                                                        const videoURL = URL.createObjectURL(file);
                                                                        setVideo(videoURL);
                                                                    }
                                                                }}
                                                                className="p-1 bg-transparent border border-gray-500 rounded-md"
                                                            />

                                                        </div>
                                                        <div className="flex items-center justify-around mt-2">
                                                            <button className="bg-red-500 text-white p-1 rounded-md" onClick={Discard}>Discard</button>
                                                            <button className="bg-green-400 text-white p-1 rounded-md" onClick={addChapters}>Done</button>
                                                        </div>

                                                    </div>


                                                </div>

                                            </div>
                                        </div> : ""

                                    }
                                </div>
                            </div>

                            <div className="flex flex-col mt-5 gap-5 top-0 sticky">
                                <div className="w-[220px] h-[220px] border ">
                                    {
                                        cardImage ? <img src={cardImage} alt="Card Image" /> : <span className="mt-2 text-red-400">Card image</span>
                                    }
                                </div>
                                <div className="w-[220px] h-[220px] border">
                                    {
                                        courseImage ? <img src={courseImage} /> : <span className="mt-2 text-red-400">Course Image</span>

                                    }
                                </div>
                                <button className="w-[200px] mt-8 bg-gradient-to-r from-[#23A4DC] to-[#084E90] text-white rounded-md p-2" onClick={Confirm}>Confirm</button>
                            </div>
                        </div>

                    </div>
                }

            </div>


        </div>

    </>)

}
export default Superadmin