// src/Layouts/MainLayout.jsx
import Header1 from "../Components/Header1";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <>
      <Header1/>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
