import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar default-container text-white bg-inherit bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact bg-white dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            <NavLink to="/">Home</NavLink>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link className="text-3xl font-bold" to="/">
          DocWave
        </Link>
      </div>
      <div className="navbar-center items-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 text-xs font-bold items-center px-1">
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="/"
          >
            Home
          </NavLink>
          <li className="z-50 duration-300 transform" tabIndex={0}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Shop
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul className="p-10  transition-all mt-3 duration-500 bg-slate-200 bg-opacity-50 text-black">
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
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
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-outline btn-primary" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
