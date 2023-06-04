import { Outlet } from "react-router-dom";
import LeftBar from "../components/Services/Services/Shared/LeftBar/LeftBar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-2">
        <LeftBar />
      </div>
      <div className="col-span-10 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
