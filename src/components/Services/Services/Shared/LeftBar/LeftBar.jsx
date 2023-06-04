import { NavLink } from "react-router-dom";

const LeftBar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/6 fixed flex flex-col justify-between">
      <div className="p-4">
        {/* Logo or branding */}
        <h1 className="text-white text-2xl">Logo</h1>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Sidebar links */}
        <NavLink
          exact
          to="/dashboard"
          activeClassName="bg-gray-700 text-blue-200"
          className="p-2 rounded-full"
        >
          Dashboard
        </NavLink>
        <NavLink
          exact
          to="/dashboard/manageitems"
          activeClassName="bg-gray-700"
          className="p-2 rounded-full"
        >
          Manage Items
        </NavLink>
        <NavLink
          exact
          to="/dashboard/createitem"
          activeClassName="bg-gray-700"
          className="p-2 rounded-full"
        >
          Create Items
        </NavLink>
        {/* ... add more sidebar links */}
      </div>
      <div className="p-4">
        {/* Sidebar footer */}
        <p>Footer content</p>
      </div>
    </div>
  );
};

export default LeftBar;
