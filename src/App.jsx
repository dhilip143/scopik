import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from "react-router-dom";

import { createContext, useState, useEffect, useContext } from "react";

import Home from "/src/Pages/Home.jsx";
import InnerCourse from "./Pages/InnerCourse.jsx";
import StudentDashboard from "/src/Pages/StudentDashboard.jsx";
import Login from "/src/Pages/Login.jsx";
import MainLayout from "/src/Components/MainLayout.jsx";
import Courses from "./Pages/Courses.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import Register from "./Pages/Register.jsx";
import Quiz from "./Components/Quiz.jsx";
import CourseContent from "./Pages/Coursecontent.jsx";
import CourseVideo from "./Pages/CourseVideo.jsx";
import Header1 from "./Components/Header1.jsx";
import ScrollToTop from "./Components/ScrolllToTop.js";
import CertificatePage from "./Pages/Certificate.jsx";
import SuperLogin from "./Pages/SuperLogin.jsx";
import Superadmin from "./Components/superadmin.jsx";


// 👇 Declare context at top to avoid hoisting issues
const loginContext = createContext();

// 👇 Private route wrapper
const PrivateRoute = ({ children }) => {
  const { login } = useContext(loginContext);
  const token = localStorage.getItem("access_token"); // Standardize token key

  return login && token ? children : <Navigate to="/login" />;
};

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setLogin(true);
    }
  }, []);

  return (
    <loginContext.Provider value={{ login, setLogin }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Pages with header/footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/course-content" element={<CourseContent />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/student_dashboard" element={
              <PrivateRoute>
                <StudentDashboard />
              </PrivateRoute>
            } />
            <Route path="/head" element={<Header1 />} />
          </Route>

          {/* Standalone pages without layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course/:id" element={<InnerCourse />} />
          <Route path="/course-video/:id" element={<CourseVideo />} />
          <Route path="/slogin" element={<SuperLogin/>}></Route>
           <Route path="/sadmin" element={<Superadmin />} />
        </Routes>
      </BrowserRouter>
    </loginContext.Provider>
  );
}

export default App;
export { loginContext };
