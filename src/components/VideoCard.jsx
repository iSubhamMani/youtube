const VideoCard = ({ videoInfo }) => {
  if (!videoInfo) return;

  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="cursor-pointer">
      <div className="rounded-xl overflow-hidden my-2">
        <img
          className="object-cover w-full"
          src={thumbnails?.medium?.url}
          alt="Thumbnail"
        />
      </div>
      <div>
        <p className="font-medium line-clamp-2">{title}</p>
        <p className="text-sm text-gray-600 font-normal mt-1">{channelTitle}</p>
        <div>
          <span className="text-sm text-gray-600 font-normal">
            {statistics?.viewCount} views
          </span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
