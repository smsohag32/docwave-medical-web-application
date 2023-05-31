import { Outlet } from "react-router-dom";

import Nav from "../pages/shared/Header/Nav";
import FooterDoc from "../pages/shared/Footer/FooterDoc";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
      <FooterDoc />
    </div>
  );
};

export default MainLayouts;
