import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../utils/UseAuth/useAuth";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
