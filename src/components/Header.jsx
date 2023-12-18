const Header = () => {
  return (
    <div className="grid grid-flow-col px-4 py-2 items-center">
      <div className="flex items-center col-span-1 gap-6">
        <i className="fa-solid fa-bars fa-xl cursor-pointer text-gray-500"></i>
        <div className="flex items-center gap-1">
          <i className="fa-brands fa-youtube text-[#ff1515] fa-xl"></i>
          <h2 className="font-medium text-xl">YouTube</h2>
        </div>
      </div>
      <div className="col-span-10 flex justify-center">
        <div className="flex border-2 border-gray-300 rounded-full overflow-hidden w-[45%] max-w-[600px] min-w-[200px]">
          <input
            type="text"
            className="outline-none w-full px-4 py-[0.4em]"
            placeholder="Search"
          />
          <button className=" bg-[#ebebeb] px-4 py-1">
            <i className="fa-solid fa-magnifying-glass text-zinc-500"></i>
          </button>
        </div>
      </div>
      <div className="col-span-1 flex gap-8 items-center">
        <i class="fa-solid fa-video fa-lg cursor-pointer"></i>
        <i class="fa-regular fa-bell fa-lg cursor-pointer"></i>
        <i className="fa-solid fa-user fa-lg cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Header;