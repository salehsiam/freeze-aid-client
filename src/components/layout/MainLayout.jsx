import { Outlet } from "react-router-dom";
import Banner from "../component/Banner";
import Navbar from "../component/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <Toaster />
    </div>
  );
};

export default MainLayout;
