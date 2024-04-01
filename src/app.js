import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AllNotes from "./components/AllNotes";
import Reminders from "./components/Reminders";



const AppLayout = () => {
  return (
    <div className="container w-[100%] overflow-hidden ">
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <AllNotes />,
      },
      {
        path: "/reminders",
        element: <Reminders/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);