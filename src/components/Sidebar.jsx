import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isMenuOpen } = useSelector((store) => store.app);

  if (!isMenuOpen) return null;

  return (
    <div className="w-[15%]">
      <div className="gap-4 fixed w-[12%]">
        <div className="px-1 mx-2 py-2 border-b-[1px] border-gray-300 pb-2">
          <ul className="flex flex-col gap-2">
            <Link to={"/"}>
              <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
                Home
              </li>
            </Link>
            <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
              Shorts
            </li>
            <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
              Subscriptions
            </li>
          </ul>
        </div>
        <div className="px-1 mx-2 py-2 border-b-[1px] border-gray-300 pb-2">
          <h1 className="px-2 mx-1 mb-2 font-medium text-lg">Explore</h1>
          <ul className="flex flex-col gap-2">
            <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
              Music
            </li>
            <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
              Movies
            </li>
            <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
              Gaming
            </li>
            <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
              News
            </li>
            <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
              Sports
            </li>
          </ul>
        </div>
        <div className="px-1 mx-2 py-2 border-b-[1px] border-gray-300 pb-2">
          <h1 className="px-2 mx-1 mb-2 font-medium text-lg">You</h1>
          <ul className="flex flex-col gap-2">
            <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
              Your channel
            </li>
            <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
              History
            </li>
            <li className="px-2 mx-1 py-2 rounded-lg hover:bg-[#eee] text-[0.9rem] cursor-pointer">
              Watch later
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
