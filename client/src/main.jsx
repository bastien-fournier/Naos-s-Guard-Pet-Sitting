import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import ReviewPage from "./pages/ReviewPage";
import LoginPage from "./pages/LoginPage";

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
        element: <SignUpForm />,
      },
      {
        path: "/review-page",
        id: "review-page",
        element: <ReviewPage />,
      },
      {
        path: "/login-page",
        id: "login-page",
        element: <LoginPage />,
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
