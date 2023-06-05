import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
};

export default PrivateRoute;
