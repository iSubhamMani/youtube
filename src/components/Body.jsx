import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col py-4">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
