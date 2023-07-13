import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginForm from "./pages/Login/LoginForm";
import RegisterForm from "./pages/Register/RegisterForm";
import AppPage from './components/BuyerPage/AppPage';
import Seller from "./components/Seller/Seller";
import Main from './components/ResidencePage/Main';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <LoginForm />,
  },

  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/buy-a-home",
    element: <AppPage />,
  },

  {
    path: "/sell-a-home",
    element: <Seller />,
  },
  {
    path: "/residencies",
    element: <Main />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
