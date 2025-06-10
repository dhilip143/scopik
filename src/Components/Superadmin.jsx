import { useEffect, useState } from "react";
import axios from "axios";

import Header1 from "./Header1";
import element from "../assets/element.png";
import logout from "../assets/logout.png";
import people from "../assets/people.png";
import note from "../assets/note.png";
import setting from "../assets/setting.png";

function Superadmin() {
    const [id,setId]=useState()

    const [color, setColor] = useState("element");
    const [course, setCourse] = useState(false);

    const [cardPreview, setCardPreview] = useState(null);
    const [cardFile, setCardFile] = useState(null);

    const [coursePreview, setCoursePreview] = useState(null);
    const [courseFile, setCourseFile] = useState(null);

    const [addCourse, setAddCourse] = useState(false);
    const [innerChapters, setInnerChapters] = useState([]);
    
    const [chapterNumber, setChapterNumber] = useState("");
    const [chapterName, setChapterName] = useState("");
    const [chapterType, setChapterType] = useState("");
    const [videoName, setVideoName] = useState("");
    const [videoURL, setVideoURL] = useState("");
    const [videoFile, setVideoFile] = useState(null);

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [total, setTotal] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");

    const [addedCourses, setAddedCourses] = useState([]);

    const handleCardImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCardFile(file);
            setCardPreview(URL.createObjectURL(file));
        }
    }

    


const handleDelete = (courseName) => {
  fetch(`http://127.0.0.1:8000/api/deletecourse/${courseName}`, { method: "DELETE" })
    .then((res) => {
      if (res.status === 204) {
        alert("Deleted!");
        // Remove the deleted course from the state
        setAddedCourses((prevCourses) => prevCourses.filter(course => course.name !== courseName));
        return;
      } else {
        return res.text().then((text) => {
          throw new Error("Server Error: " + text);
        });
      }
    })
    .catch((err) => {
      console.error("DELETE error:", err);
      alert("Failed to delete course. Check server/API.");
    });
};



    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/displaycourse/").then((res)=>{
            console.log("Courses from API:", res.data);
            // Map courses to add cardPreview and coursePreview from image URLs
            const baseUrl = "http://127.0.0.1:8000";
            const coursesWithPreviews = res.data.map(course => ({
                ...course,
                cardPreview: course.image ? baseUrl + course.image : null,
                coursePreview: course.background_image ? baseUrl + course.background_image : null
            }));
            setAddedCourses(coursesWithPreviews)
        })

    },[])

    const handleCourseImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCourseFile(file);
            setCoursePreview(URL.createObjectURL(file));
        }
    };

    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVideoFile(file);
            setVideoURL(URL.createObjectURL(file));
        }
    };

    const resetChapterFields = () => {
        setChapterNumber("");
        setChapterName("");
        setChapterType("");
        setVideoName("");
        setVideoURL("");
        setVideoFile(null);
    };

    const addChapter = () => {
        if (!chapterNumber || !chapterName || !videoName || !videoURL) {
            alert("Please complete all chapter fields.");
            return;
        }

        const chapter = {
            chapterNumber,
            chapterName,
            chapterType,
            videoName,
            videoURL
        };

        setInnerChapters([...innerChapters, chapter]);
        resetChapterFields();
    };

    const submitCourse = async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("Description", desc);
        if (cardFile) {
            formData.append("Image", cardFile);
        }
        if (courseFile) {
            formData.append("BackgroundImage", courseFile);
        }
        formData.append('total_chap', total);
        formData.append("duration", duration);
        formData.append("Price", price);

        try {
            await axios.post("http://127.0.0.1:8000/api/addcourse/", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            const newCourse = {
                name,
                desc,
                duration,
                price,
                total,
                cardPreview,
                coursePreview,
                chapters: innerChapters
            };

            setAddedCourses([...addedCourses, newCourse]);
            setColor("note");
            setCourse(true);
            resetForm();
        } catch (error) {
            console.error("Error adding course:", error);
            alert("Failed to add course. Check server/API.");
        }
    };

    const resetForm = () => {
        setName("");
        setDesc("");
        setTotal("");
        setDuration("");
        setPrice("");
        setCardFile(null);
        setCardPreview(null);
        setCourseFile(null);
        setCoursePreview(null);
        setInnerChapters([]);
        setAddCourse(false);
    };

    const [editIndex, setEditIndex] = useState(null);

    const handleEditCourse = (course, index) => {
        setEditIndex(index);
        setName(course.name);
        setDesc(course.desc);
        setTotal(course.total_chap);
        setDuration(course.duration);
        setPrice(course.price);
        setCardPreview(course.cardPreview);
        setCoursePreview(course.coursePreview);
        setAddCourse(true);
        setCourse(false);
    };

    const updateCourse = async () => {
        if (editIndex === null) {
            alert("No course selected for update.");
            return;
        }

        const formData = new FormData();
        formData.append("Description", desc);
        formData.append("total_chap", total);
        formData.append("duration", duration);
        formData.append("Price", price);
        if (cardFile) {
            formData.append("Image", cardFile);
        }
        if (courseFile) {
            formData.append("BackgroundImage", courseFile);
        }

        try {
            await axios.put(`http://127.0.0.1:8000/api/updatecourse/${name}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            const updatedCourses = [...addedCourses];
            updatedCourses[editIndex] = {
                ...updatedCourses[editIndex],
                desc,
                total_chap: total,
                duration,
                price,
                cardPreview: cardFile ? URL.createObjectURL(cardFile) : updatedCourses[editIndex].cardPreview,
                coursePreview: courseFile ? URL.createObjectURL(courseFile) : updatedCourses[editIndex].coursePreview,
            };
            setAddedCourses(updatedCourses);
            setEditIndex(null);
            resetForm();
            setCourse(true);
        } catch (error) {
            console.error("Error updating course:", error);
            alert("Failed to update course. Check server/API.");
        }
    };

    const handleDeleteCourse = (index) => {
        const updated = [...addedCourses];
        updated.splice(index, 1);
        setAddedCourses(updated);
    };

    return (
        <div className="overflow-hidden">
            <Header1 />
            <div className="pt-16 bg-gradient-to-r from-[#23A4DC] to-[#084E90] w-full h-full min-h-screen">
                <div className="flex gap-5 mx-20">
                    {/* Sidebar */}
                    <div className="bg-white w-[88px] h-[550px] flex flex-col items-center gap-6 mt-5 rounded-2xl">
                        <div className="flex flex-col gap-10 mt-10">
                            <img src={element} alt="element" onClick={() => { setColor("element"); setCourse(false); }} className={`p-1 cursor-pointer ${color === "element" ? "border shadow-md shadow-[#23A4DC] border-[#084E90]" : ""}`} />
                            <img src={note} alt="note" onClick={() => { setColor("note"); setCourse(true); }} className={`p-1 cursor-pointer ${color === "note" ? "border shadow-md  shadow-[#23A4DC] border-[#084E90]" : ""}`} />
                            <img src={people} alt="people" onClick={() => { setColor("people"); }} className={`p-1 cursor-pointer ${color === "people" ? "border shadow-md shadow-[#23A4DC] border-[#084E90]" : ""}`} />
                            <img src={setting} alt="setting" onClick={() => { setColor("setting"); }} className={`p-1 cursor-pointer ${color === "setting" ? "border shadow-md shadow-[#23A4DC] border-[#084E90]" : ""}`} />
                        </div>
                        <div className="mt-40">
                            <img src={logout} alt="logout" />
                        </div>
                    </div>

                    {/* Course Display or Form */}
                    {course ? (
                        <div className="mt-2 w-[1050px]">
                            <div className="flex justify-end mb-2">
                                <input type="search" placeholder="Search" className="text-blue-500 border border-gray-500 p-1 rounded-md" />
                            </div>
                            <div className="bg-white border border-[#084E90] shadow-xl shadow-[#23A4DC] rounded-xl h-[450px] overflow-y-auto p-5">
                                {addedCourses.map((item, index) => (
                                    <div key={index} className="flex items-center justify-around border rounded-md p-2 mb-2">
                                        <img src={item.cardPreview} alt="card" className="w-[50px] h-[50px] rounded-full" />
                                        <p>{item.id}</p>
                                        <div className="w-[500px] p-2 text-center font-medium">{item.name}</div>
                                        <div className="flex gap-4">
                                            <button className="bg-blue-500 text-white px-4 py-1 rounded-md" onClick={() => handleEditCourse(item, index)}>Edit</button>
                                            <button className="bg-red-500 text-white px-4 py-1 rounded-md" onClick={()=>{handleDelete(item.name)}}>Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="p-5 border border-[#071f36c3]  bg-white w-[1200px] shadow-md shadow-[#23A4DC] rounded-lg">
                            <div className="flex justify-between h-[550px] overflow-y-auto">
                                {/* Form Inputs */}
                                <div className="flex flex-col gap-3 w-[600px]">
                                    <input type="text" placeholder="Course Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded-md" readOnly={editIndex !== null} />
                                    <textarea placeholder="Course Description" value={desc} onChange={(e) => setDesc(e.target.value)} className="border p-2 rounded-md" />
                                    <input type="file" accept="image/*" onChange={handleCardImage} className="border p-2 rounded-md" />
                                    <input type="file" accept="image/*" onChange={handleCourseImage} className="border p-2 rounded-md" />
                                    <input type="text" placeholder="Total Chapters" value={total} onChange={(e) => setTotal(e.target.value)} className="border p-2 rounded-md" />
                                    <input type="text" placeholder="Course Duration" value={duration} onChange={(e) => setDuration(e.target.value)} className="border p-2 rounded-md" />
                                    <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 rounded-md" />
                                    
                                    <button className="bg-[#00007E] text-white px-4 py-1 rounded-md mt-2 w-fit" onClick={() => setAddCourse(true)}>Add Chapters</button>

                                    {addCourse && (
                                        <div className="mt-3 border p-3 rounded-md bg-gray-50">
                                            <input type="number" placeholder="Chapter No." value={chapterNumber} onChange={(e) => setChapterNumber(e.target.value)} className="border p-1 rounded-md mb-2 w-full" />
                                            <input type="text" placeholder="Chapter Title" value={chapterName} onChange={(e) => setChapterName(e.target.value)} className="border p-1 rounded-md mb-2 w-full" />
                                            <input type="text" placeholder="Chapter Type" value={chapterType} onChange={(e) => setChapterType(e.target.value)} className="border p-1 rounded-md mb-2 w-full" />
                                            <input type="text" placeholder="Video Name" value={videoName} onChange={(e) => setVideoName(e.target.value)} className="border p-1 rounded-md mb-2 w-full" />
                                            <input type="file" accept="video/*" onChange={handleVideoUpload} className="border p-1 rounded-md mb-2 w-full" />
                                            <div className="flex gap-3 justify-end">
                                                <button onClick={resetChapterFields} className="bg-red-500 text-white px-3 py-1 rounded-md">Discard</button>
                                                <button onClick={addChapter} className="bg-green-500 text-white px-3 py-1 rounded-md">Done</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Image Previews + Confirm */}
                                <div className="flex flex-col gap-5 items-center">
                                    <div className="w-[220px] h-[220px] border">
                                        {cardPreview ? <img src={cardPreview} alt="Card" className="w-full h-full object-cover" /> : <p className="text-center mt-8 text-sm text-gray-500">Card Image</p>}
                                    </div>
                                    <div className="w-[220px] h-[220px] border">
                                        {coursePreview ? <img src={coursePreview} alt="Course" className="w-full h-full object-cover" /> : <p className="text-center mt-8 text-sm text-gray-500">Course Image</p>}
                                    </div>
                                    <button onClick={submitCourse} className="bg-gradient-to-r from-[#23A4DC] to-[#084E90] text-white px-6 py-2 rounded-md">Confirm</button>
                                    {editIndex !== null && (
                                        <button onClick={updateCourse} className="bg-green-600 text-white px-6 py-2 rounded-md ml-4">Update</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Superadmin;
