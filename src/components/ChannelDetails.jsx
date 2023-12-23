import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";
import { modifyCount } from "../utils/helper";

const ChannelDetails = ({ snippet }) => {
  const { channelId } = snippet;
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_API + channelId);
    const fData = await data.json();
    setChannelDetails(fData.items[0]);
  };

  return (
    <div className="flex items-center">
      <div className="w-[38px] h-[38px] overflow-hidden rounded-full">
        <img
          className="w-full h-full"
          src={channelDetails?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
      </div>
      <div className="flex flex-col ml-2">
        <span className="font-medium ">{snippet.channelTitle}</span>
        <span className="text-sm text-gray-600">
          {modifyCount(channelDetails?.statistics?.subscriberCount)} subscribers
        </span>
      </div>
    </div>
  );
};

export default ChannelDetails;
