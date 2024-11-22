import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/HomePage/Home";
import Donation from "../pages/Donation/Donation";
import DonationDetails from "../pages/Donation/DonationDetails";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import UpdateProfile from "../component/UpdateProfile";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "donation",
        element: <Donation></Donation>,
        loader: () => fetch("/campaigns.json"),
      },

      {
        path: "how-to-help",
        element: <HowToHelp></HowToHelp>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <DonationDetails></DonationDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/campaigns.json"),
      },
      {
        path: "update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
