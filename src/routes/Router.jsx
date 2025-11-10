// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import AllVehicles from "../pages/AllVehicles";
import MyVehicles from "../pages/MyVehicles";
import MyBookings from "../pages/MyBookings";
import AddVehicles from "../pages/AddVehicles";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allVehicles",
        element: <AllVehicles />,
      },
      {
        path: "myVehicles",
        element: <MyVehicles />,
      },
      {
        path: "myBookings",
        element: <MyBookings />,
      },
      {
        path: "addVehicle",
        element: <AddVehicles />,
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login></Login>
      }
    ],
  },
]);
