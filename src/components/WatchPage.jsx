import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { modifyCount, modifyDateTime } from "../utils/helper";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";
import ChannelDetails from "./ChannelDetails";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_DETAILS_API + searchParams.get("v"));
    const fData = await data.json();
    setVideoDetails(fData.items[0]);
  };

  if (!videoDetails) return;

  const { snippet, statistics } = videoDetails;

  return (
    <div className="px-8 w-full">
      <div className="flex gap-4">
        <div className="w-full">
          <div>
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
          <div className="mt-4">
            <p className="font-semibold text-[1.35rem]">{snippet?.title}</p>
            <div className="flex items-center mt-2 justify-between">
              <div className="flex items-center">
                <ChannelDetails snippet={snippet} />
                <button className="ml-8 rounded-full px-4 py-2 font-medium border-[1px] text-sm border-gray-200">
                  Join
                </button>
                <button className="ml-2 rounded-full px-4 py-2 font-medium text-sm bg-gray-100">
                  Subscribe
                </button>
              </div>
              <div className="flex">
                <div className="flex gap-2 items-center rounded-full bg-gray-100 px-4 py-2">
                  <button className="pr-2 border-r-[1px] border-black flex items-center gap-1">
                    <i className="fa-regular fa-thumbs-up"></i>
                    {modifyCount(statistics.likeCount)}
                  </button>
                  <button className="">
                    <i className="fa-regular fa-thumbs-down"></i>
                  </button>
                </div>
                <button className="flex items-center gap-2 ml-4 rounded-full px-4 py-2 font-medium border-[1px] text-sm border-gray-200">
                  <i className="fa-solid fa-share"></i>Share
                </button>
                <button className="flex items-center ml-4 gap-2 rounded-full px-4 py-2 font-medium border-[1px] text-sm border-gray-200">
                  <i className="fa-solid fa-download"></i>Download
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 px-2 py-2 rounded-lg bg-gray-200 ">
            <div className="flex gap-2">
              <p className="text-sm font-medium">
                {modifyCount(statistics.viewCount)} views
              </p>
              <p className="text-sm font-medium">
                Published on {modifyDateTime(snippet.publishedAt)}
              </p>
            </div>
            <p className="text-sm">{snippet.description}</p>
          </div>
          <CommentsContainer commentsCount={statistics.commentCount} />
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
