import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/HomePage/Home";

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
        element: <h2>this is donation</h2>,
      },
      {
        path: "campaigns",
        element: <h2>Campaigns</h2>,
      },
      {
        path: "how-to-help",
        element: <h2>How to help</h2>,
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
    ],
  },
]);

export default router;
