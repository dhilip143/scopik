// src/Layouts/MainLayout.jsx
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
// import Header1 from "./Header1";


const MainLayout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
