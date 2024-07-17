import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import ReviewPage from "./pages/ReviewPage";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
