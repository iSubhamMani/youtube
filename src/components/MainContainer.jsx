import { useDispatch } from "react-redux";
import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";
import { useEffect } from "react";
import { openMenu } from "../utils/slices/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <div className="col-span-11 px-8">
      <ButtonList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
