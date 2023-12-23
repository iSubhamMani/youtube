import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/slices/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/slices/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // make an API call after every key press but if the
    // diff between two keystrokes is < 200ms --> decline the call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const searchResults = await data.json();
    setSuggestions(searchResults[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: searchResults[1],
      })
    );
  };

  const handleNavToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col z-10 px-6 pt-2 pb-4 items-center sticky top-0 bg-white">
      <div className="flex items-center col-span-1 gap-6">
        <i
          className="fa-solid fa-bars fa-xl cursor-pointer text-gray-500 "
          onClick={handleNavToggle}
        ></i>
        <div className="flex items-center gap-1">
          <i className="fa-brands fa-youtube text-[#ff1515] fa-xl"></i>
          <h2 className="font-medium text-xl">YouTube</h2>
        </div>
      </div>
      <div className="col-span-10 flex flex-col items-center">
        <div className="flex border-2 border-gray-300 rounded-full overflow-hidden w-[45%] max-w-[600px] min-w-[200px]">
          <input
            type="text"
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="outline-none w-full px-4 py-[0.4em]"
            placeholder="Search"
          />
          <button className=" bg-[#ebebeb] px-4 py-1">
            <Link
              to={"/results?search_query=" + searchQuery.split(" ").join("+")}
              onClick={() => setShowSuggestions(false)}
            >
              <i className="fa-solid fa-magnifying-glass text-zinc-500"></i>
            </Link>
          </button>
        </div>
        {suggestions.length !== 0 && showSuggestions && (
          <div className="shadow-2xl border-[1px] border-gray-200 overflow-hidden rounded-xl bg-white w-[40%] max-w-[520px] min-w-[200px] absolute top-[100%]">
            <ul className="flex flex-col mt-4">
              {suggestions.map((suggestion) => (
                <Link
                  key={suggestion}
                  to={
                    "/results?search_query=" + suggestion.split(" ").join("+")
                  }
                  onClick={() => setShowSuggestions(false)}
                >
                  <li className="font-medium px-4 py-1  cursor-pointer hover:bg-gray-100">
                    {suggestion}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex gap-8 items-center">
        <i className="fa-solid fa-video fa-lg cursor-pointer"></i>
        <i className="fa-regular fa-bell fa-lg cursor-pointer"></i>
        <i className="fa-solid fa-user fa-lg cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Header;
