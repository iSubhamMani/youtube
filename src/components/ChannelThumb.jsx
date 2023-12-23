import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";

const ChannelThumb = ({ snippet }) => {
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
    <div>
      <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
        <img
          className="w-full h-full"
          src={channelDetails?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
      </div>
    </div>
  );
};

export default ChannelThumb;
