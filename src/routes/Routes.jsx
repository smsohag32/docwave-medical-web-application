import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import CreateService from "../pages/CreateService/CreateService";
import CreateProducts from "../pages/CreateProduct/CreateProducts";
import Dashboard from "../layouts/Dashboard";
import ManageItems from "../pages/Dashboard/AdminDashboard/ManageItems";
import CreateItems from "../pages/Dashboard/AdminDashboard/CreateItems";
import Doctors from "../pages/Doctors/Doctors/Doctors";
import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome";
import UserHome from "../pages/Dashboard/UserDashboard/UserHome";
import UserAppointment from "../pages/Dashboard/UserDashboard/UserAppointment";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "doctors",
        element: <Doctors />,
        loader: () => fetch(`${import.meta.env.VITE_API_LINK}/totaldoctors`),
      },
      {
        path: "/singin",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "createService",
        element: <CreateService />,
      },
      {
        path: "createProduct",
        element: <CreateProducts></CreateProducts>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "adminhome",
        element: <AdminHome />,
      },
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "myappointment",
        element: <UserAppointment />,
      },

      {
        path: "/dashboard/manageitems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "/dashboard/createitem",
        element: <CreateItems />,
      },
    ],
  },
]);

export default routes;
