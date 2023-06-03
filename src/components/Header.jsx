import { useLocation } from "react-router-dom";
import { dashboardData } from "../data";
import { useGlobalContext } from "../context";

const Header = () => {
  const { checkIndex, register } = useGlobalContext();
  const location = useLocation();

  return (
    <div className="header">
      {location.pathname === "/" ? (
        <h1>{register ? "Sign up" : "Sign in"}</h1>
      ) : location.pathname === "/dashboard" ? (
        <h1>Dashboard</h1>
      ) : location.pathname === "/disease" ? (
        <h1>{dashboardData[checkIndex - 1].disease}</h1>
      ) : (
        <h1>Error Page</h1>
      )}
    </div>
  );
};

export default Header;
