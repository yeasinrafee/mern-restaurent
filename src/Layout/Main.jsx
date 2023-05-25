import { Outlet } from "react-router-dom";
import Footer from "../pages/Sharec/Footer.jsx/Footer";

const Main = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
