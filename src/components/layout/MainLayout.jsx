import { Outlet } from "react-router-dom";
import Banner from "../component/Banner";
import Navbar from "../component/Navbar";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
