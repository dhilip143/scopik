import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from "react-router-dom";

import { createContext, useState, useEffect, useContext } from "react";

import Home from "./Pages/Home.jsx";
import InnerCourse from "./Pages/InnerCourse.jsx";

import Login from "./Pages/Login.jsx";
import MainLayout from "./Components/MainLayout.jsx";
import Courses from "./Pages/Courses.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import Register from "./Pages/Register.jsx";
import Quiz from "./Components/Quiz.jsx";
import CourseContent from "./Pages/CourseContent.jsx";
import CourseVideo from "./Pages/CourseVideo.jsx";
import Header1 from "./Components/Header1.jsx";
import ScrollToTop from "./Components/ScrolllToTop.js";
import CertificatePage from "./Pages/Certificate.jsx";
import CertificateDownload from "./Pages/CertificateDownload.jsx";
import SuperLogin from "./Pages/SuperLogin.jsx";
import Superadmin from "./Components/superadmin.jsx";
import StudentDashboard from "./Pages/StudentDashboard.jsx";
import axios from "axios";
import Teacherdashboard from "./Pages/Teacherdashboard.jsx";



// Create contexts
const loginContext = createContext();
const CourseContext = createContext();

// Private route component
const PrivateRoute = ({ children }) => {
  const { login } = useContext(loginContext);
  const token = localStorage.getItem("access_token");

  return login && token ? children : <Navigate to="/login" />;
};

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [Course, setCourse] = useState([]);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/course/")
      .then((res) => {
        console.log(res.data)
        setCourse(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const storedUserName = localStorage.getItem("userName");
    if (token) {
      setLogin(true);
      if (storedUserName) {
        setUserName(storedUserName);
      } else {
        // Optionally, fetch user info from backend here if userName not in localStorage
      }
    }
  }, []);

  useEffect(() => {
    if (!login) {
      const timer = setTimeout(() => {
        setTimerExpired(true);
      }, 60000); // 1 minute timer

      return () => clearTimeout(timer);
    } else {
      setTimerExpired(false);
    }
  }, [login]);


  return (
    <loginContext.Provider value={{ login, setLogin, userName, setUserName }}>
      <CourseContext.Provider value={{ Course, setCourse }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/course" element={<Courses />} />
              <Route path="/quiz/:id" element={<Quiz />} />
              <Route path="/course-content" element={<CourseContent />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/certificate" element={<CertificatePage />} />
              <Route path="/certificate-download" element={<CertificateDownload />} />
              {/* <Route
                path="/student_dashboard"
                // element={
                //   <PrivateRoute>
                //     {timerExpired ? <Navigate to="/login" /> : <StudentDashboard />}
                //   </PrivateRoute>
                // }
                element={<StudentDashboard/>}
              /> */}
              <Route path="/head" element={<Header1 />} />
            </Route>

            {/* No layout routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/course/:id" element={<InnerCourse />} />
            <Route path="/course-video/:id" element={<CourseVideo />} />
            <Route path="/slogin" element={<SuperLogin />} />
            <Route path="/sadmin" element={<Superadmin />} />
            <Route path="/stu" element={<StudentDashboard/>}></Route>
            <Route path="/tea" element={<Teacherdashboard/>}></Route>
            <Route path="/cur" element={<CourseContent/>}></Route>
           
            
            
          </Routes>
        </BrowserRouter>
      </CourseContext.Provider>
    </loginContext.Provider>
  );
}

export default App;
export { loginContext, CourseContext };
