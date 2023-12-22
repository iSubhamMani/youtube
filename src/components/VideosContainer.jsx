import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerHome from "./ShimmerHome";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    setIsLoading(true);
    const data = await fetch(YOUTUBE_VIDEO_API);
    const fData = await data.json();

    setVideos(fData.items);
    setIsLoading(false);
  };

  return isLoading ? (
    <ShimmerHome />
  ) : (
    <div
      className="py-8 grid gap-4"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideosContainer;
