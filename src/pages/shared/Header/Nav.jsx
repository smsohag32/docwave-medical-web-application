import { Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import avatarImage from "../../../assets/react.svg";
import useAuth from "../../../hooks/useAuth";
import { MdDashboard } from "react-icons/md";
const Nav = () => {
  const { user, logOut } = useAuth();

  // handleLogOut
  const handleLogOut = () => {
    logOut();
  };

  // nav link
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
        <div className="flex items-center md:order-2">
          <img
            className="rounded-full cursor-pointer mr-2"
            src={user && user.photoURL ? user.photoURL : avatarImage}
            alt="profile"
            height="30"
            width="30"
          />
          {user ? (
            <>
              <Dropdown className="" label={<MdDashboard />}>
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item icon={"S"}>
                  <Link to="/dashboard">Dashboard</Link>
                </Dropdown.Item>
                <Dropdown.Item icon={"w"}>Settings</Dropdown.Item>
                <Dropdown.Item icon={"s"}>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogOut} icon={"x"}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            </>
          ) : (
            <Link to="/singin">
              <Button gradientDuoTone="cyanToBlue" outline>
                Login
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>{linkItems}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
