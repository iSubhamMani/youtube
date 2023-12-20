import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col py-4">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
