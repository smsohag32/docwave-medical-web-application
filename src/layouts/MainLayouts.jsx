import { Outlet } from "react-router-dom";

import Footer from "../pages/shared/Footer/Footer";
import Nav from "../pages/shared/Header/Nav";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
