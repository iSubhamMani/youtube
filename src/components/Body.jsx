import { Outlet, ScrollRestoration } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex py-4 justify-end">
        <ScrollRestoration />
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
