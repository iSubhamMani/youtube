import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-8">
      <div className="col-span-11">
        <iframe
          width="1180"
          height="680"
          className="rounded-xl"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
