import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppPage from './components/BuyerPage/AppPage';
import Main from './components/ResidencePage/Main';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SellAHome from "./pages/SellAHome/SellAHome";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import Agent from './components/Agent/Agent';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/buy-a-home",
    element: <AppPage />,
  },

  {
    path: "/sell-a-home",
    element: <SellAHome />,
  },
  {
    path: "/residencies",
    element: <Main />
  },
  {
    path: "/agent",
    element: <Agent />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
