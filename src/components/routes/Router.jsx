import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/HomePage/Home";
import Donation from "../pages/Donation/Donation";
import DonationDetails from "../pages/Donation/DonationDetails";
import HowToHelp from "../pages/HowToHelp";

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
        path: "campaigns",
        element: <h2>Campaigns</h2>,
      },
      {
        path: "how-to-help",
        element: <HowToHelp></HowToHelp>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <h2>Dashboard</h2>,
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
    ],
  },
]);

export default router;
