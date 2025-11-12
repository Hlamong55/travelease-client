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
import PrivateRoute from "./PrivateRoute";
import VehicleDetails from "../pages/VehicleDetails";
import ErrorPage from "../pages/ErrorPage";

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
        path: "vehicle/:id",
        element: 
          <VehicleDetails></VehicleDetails>
  
      },
      {
        path: "myVehicles",
        element: <PrivateRoute>
          <MyVehicles />
        </PrivateRoute>,
      },
      {
        path: "myBookings",
        element: <PrivateRoute>
          <MyBookings />
        </PrivateRoute>,
      },
      {
        path: "addVehicle",
        element: <PrivateRoute>
          <AddVehicles />
        </PrivateRoute>,
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>
      }
    ],
  },
]);
