import { Outlet } from "react-router-dom";
import Banner from "../component/Banner";
import Navbar from "../component/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../pages/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="mb-12">
        <Outlet></Outlet>
      </main>
      <Toaster />
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
