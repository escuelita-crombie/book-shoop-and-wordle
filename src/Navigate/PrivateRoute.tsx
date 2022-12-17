import { useUserContext } from "../Context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { token } = useUserContext();
  if (!token) return <Navigate to={"/login"} />;
  return <Outlet />;
};

export default PrivateRoute;
