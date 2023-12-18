import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11 px-6">
      <ButtonList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
