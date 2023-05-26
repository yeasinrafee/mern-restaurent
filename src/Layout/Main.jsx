import { Outlet } from "react-router-dom";
import Footer from "../pages/Sharec/Footer.jsx/Footer";
import Navbar from "../pages/Sharec/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
