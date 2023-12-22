const SearchResultsVideoCard = ({ videoInfo }) => {
  if (!videoInfo) return;

  const { snippet } = videoInfo;
  const { channelTitle, title, thumbnails, description } = snippet;

  return (
    <div className="flex gap-4 cursor-pointer">
      <div>
        <div className="rounded-lg w-[350px] h-[200px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={thumbnails?.medium?.url}
            alt="Thumbnail"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="font-medium text-[1.20rem]">{title}</p>
        <p className="text-sm text-gray-600 font-normal">{channelTitle}</p>
        <p className="text-sm text-gray-600 font-normal">{description}</p>
      </div>
    </div>
  );
};

export default SearchResultsVideoCard;
