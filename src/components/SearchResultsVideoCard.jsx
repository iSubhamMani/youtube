import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import ChannelThumb from "./ChannelThumb";

const SearchResultsVideoCard = ({ videoInfo, videoId }) => {
  const [duration, setDuration] = useState(null);
  momentDurationFormatSetup(moment);

  useEffect(() => {
    getVideoDuration();
  }, []);

  const getVideoDuration = async () => {
    const data = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId);
    const fData = await data.json();

    setDuration(fData.items[0]?.contentDetails?.duration);
  };

  const { snippet } = videoInfo;
  const { channelTitle, title, thumbnails, description } = snippet;

  if (!videoInfo || !duration) return;

  const processedDuration = moment.duration(duration).format("hh:mm:ss");

  return (
    <div className="flex gap-4 cursor-pointer">
      <div>
        <div className="rounded-lg relative w-[350px] h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={thumbnails?.medium?.url}
            alt="Thumbnail"
          />
          <span className="px-1 rounded-[4px] bg-black text-sm font-medium text-white absolute bottom-1 right-2 bg-opacity-80">
            {processedDuration}
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="font-medium text-[1.20rem]">{title}</p>
        <div className="flex items-center gap-2">
          <ChannelThumb snippet={snippet} />
          <p className="text-sm text-gray-600 font-normal">{channelTitle}</p>
        </div>
        <p className="text-sm text-gray-600 font-normal">{description}</p>
      </div>
    </div>
  );
};

export default SearchResultsVideoCard;
