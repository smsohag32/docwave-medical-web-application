import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-20 justify-between gap-3 items-center default-container text-white bg-inherit bg-base-100">
      <div>
        <Link className="text-3xl font-bold" to="/">
          DocWave
        </Link>
      </div>
      <div>searching</div>
      <div>
        <ul className="menu menu-horizontal gap-5 text-md font-bold items-center px-1">
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="/getAppointment"
          >
            Get Appointment
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="/myappointment"
          >
            My Appointment
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="/createService"
          >
            Create Service
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="/createProduct"
          >
            Create Products
          </NavLink>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
