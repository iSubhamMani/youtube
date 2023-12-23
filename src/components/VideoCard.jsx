import { modifyCount } from "../utils/helper";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import ChannelThumb from "./ChannelThumb";

const VideoCard = ({ videoInfo }) => {
  if (!videoInfo) return;

  momentDurationFormatSetup(moment);

  const { snippet, statistics, contentDetails } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  const processedDuration = moment
    .duration(contentDetails.duration)
    .format("hh:mm:ss");

  return (
    <div className="cursor-pointer">
      <div className="rounded-xl overflow-hidden my-2 relative">
        <img
          className="object-cover w-full"
          src={thumbnails?.medium?.url}
          alt="Thumbnail"
        />
        <span className="px-1 rounded-[4px] bg-black text-sm font-medium text-white absolute bottom-1 right-2 bg-opacity-80">
          {processedDuration}
        </span>
      </div>
      <div className="flex gap-2 mt-3">
        <ChannelThumb snippet={snippet} />
        <div>
          <p className="font-medium line-clamp-2">{title}</p>
          <p className="text-sm text-gray-600 font-medium mt-1">
            {channelTitle}
          </p>
          <div>
            <span className="text-sm text-gray-600 font-medium">
              {modifyCount(statistics?.viewCount)} views
            </span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
