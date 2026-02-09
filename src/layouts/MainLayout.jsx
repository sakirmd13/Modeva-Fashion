// layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import ModevNavbar from "../components/ModevNavbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <ModevNavbar />  {/* Navbar always visible */}
      <main>
        <Outlet />     {/* Route content renders here */}
      </main>

      <Footer />       {/* Footer always visible */}
    </>
  );
};

export default MainLayout;
