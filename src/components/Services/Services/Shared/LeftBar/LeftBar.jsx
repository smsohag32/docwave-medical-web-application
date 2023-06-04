import { BiLogIn } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const LeftBar = () => {
  const admin = false;

  return (
    <div className="bg-gray-800 text-white h-screen w-1/6 fixed flex flex-col ">
      <div className="p-4">
        {/* Logo or branding */}
        <h1 className="text-white text-2xl primary-text">DocWave</h1>
      </div>
      <div className="flex flex-1 flex-col mt-5 px-2 space-y-6">
        {/* Sidebar links */}
        {admin ? (
          <>
            <NavLink
              exact
              to="/dashboard/adminhome"
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
          </>
        ) : (
          <>
            <NavLink
              exact
              to="/dashboard/userhome"
              activeClassName="bg-gray-700 text-blue-200"
              className="p-2 rounded-full"
            >
              Dashboard
            </NavLink>
            <NavLink
              exact
              to="/dashboard/myappointment"
              activeClassName="bg-gray-700"
              className="p-2 rounded-full"
            >
              My Appointment
            </NavLink>
            <NavLink
              exact
              to="/dashboard/review"
              activeClassName="bg-gray-700"
              className="p-2 rounded-full"
            >
              Submit Review
            </NavLink>
            <hr />

            <NavLink
              className={({ isActive }) => (isActive ? "primary-text" : "")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-text" : "")}
              to="/stores"
            >
              Medicine Store
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-text" : "")}
              to="/doctors"
            >
              Doctors
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-text" : "")}
              to="/forums"
            >
              Health Forum
            </NavLink>
          </>
        )}
        {/* ... add more sidebar links */}
      </div>
      <div className="p-4">
        {/* Sidebar footer */}
        <button className="flex gap-3 items-center justify-between">
          <BiLogIn />
          Sing out
        </button>
      </div>
    </div>
  );
};

export default LeftBar;
