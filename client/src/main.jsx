import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import ReviewPage from "./pages/ReviewPage";
import LoginPage from "./pages/LoginPage";
import ProfilPage from "./pages/ProfilPage";

const ApiUrl = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        id: "homePage",
        element: <HomePage />,
      },
      {
        path: "/sign-up-page",
        id: "sign-up-page",
        element: <SignUpPage />,
      },
      {
        path: "/review-page",
        id: "review-page",
        element: <ReviewPage />,
        loader: async () => fetch(`${ApiUrl}/api/reviews/`),
      },
      {
        path: "/login-page",
        id: "login-page",
        element: <LoginPage />,
      },
      {
        path: "/profil-page",
        id: "profil-page",
        element: <ProfilPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
