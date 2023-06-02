import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Sharec/Footer.jsx/Footer";
import Navbar from "../pages/Sharec/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {isLogin || <Navbar />}
      <Outlet />
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
