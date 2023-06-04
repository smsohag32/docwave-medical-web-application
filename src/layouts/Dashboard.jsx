import { Outlet } from "react-router-dom";
import LeftBar from "../components/Services/Services/Shared/LeftBar/LeftBar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div>
        <LeftBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
