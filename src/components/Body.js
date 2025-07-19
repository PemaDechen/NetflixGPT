import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    { path: "*", element: <h1>404 – Not Found</h1> },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
