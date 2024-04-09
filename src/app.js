import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AllNotes from "./components/AllNotes";
import Reminders from "./components/Reminders";
import EditLables from "./components/EditLables";
import Archive from "./components/Archieve";
import Trash from "./components/Trash";



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
      {
        path: "/editLables",
        element: <EditLables/>,
      },
      {
        path: "/archive",
        element: <Archive/>,
      },
      {
        path: "/trash",
        element: <Trash/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);