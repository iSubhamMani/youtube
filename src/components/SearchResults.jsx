import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchResultsVideoCard from "./SearchResultsVideoCard";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/slices/appSlice";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  const getSearchResults = async () => {
    setIsLoading(true);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const fData = await data.json();

    setSearchResults(fData?.items);
    setIsLoading(false);
  };

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="px-8 w-full flex flex-col gap-4">
      {searchResults?.map((result) => (
        <Link
          key={result.id.videoId || result.id.channelId || result.id.playlistId}
          to={"/watch?v=" + result.id.videoId}
        >
          <SearchResultsVideoCard
            videoInfo={result}
            videoId={
              result.id.videoId || result.id.channelId || result.id.playlistId
            }
          />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
