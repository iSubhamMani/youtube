import { Outlet, ScrollRestoration } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex py-4 justify-end">
      <ScrollRestoration />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
