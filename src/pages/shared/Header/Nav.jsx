import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import avatarImage from "../../../assets/react.svg";
const Nav = () => {
  const user = null;
  const linkItems = (
    <>
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
        to="/stores"
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
  );
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <Link to="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Doc<span className="text-yellow-500">W</span>ave
            </span>
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <img
            className="rounded-full mr-2"
            src={user && user.photoURL ? user.photoURL : avatarImage}
            alt="profile"
            height="30"
            width="30"
          />
          <Link to="/singin">
            <Button gradientDuoTone="cyanToBlue" outline>
              Login
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{linkItems}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
