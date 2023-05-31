import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import CreateService from "../pages/CreateService/CreateService";
import CreateProducts from "../pages/CreateProduct/CreateProducts";

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
]);

export default routes;
