import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Header/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <div className="bg-[#0f172a]">
      <div className="secondary-bg">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
