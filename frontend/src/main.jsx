import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginForm from "./pages/Login/LoginForm";
import RegisterForm from "./pages/Register/RegisterForm";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppPage from "./components/BuyerPage/AppPage";
import SellAHome from "./pages/SellAHome/SellAHome";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/login",
    element: <LoginForm/>,
  },

  {
    path: "/register",
    element: <RegisterForm/>,
  }, 

  {
    path: "/buy-a-home",
    element: <AppPage />,
  },

  {
    path: "/sell-a-home",
    element: <SellAHome />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
