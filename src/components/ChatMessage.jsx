const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex flex-col gap-2 bg-[#f5f5f5] py-2 px-3 rounded-md">
      <div className="flex gap-2 items-center">
        <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
          <img
            className="w-full h-full"
            src="https://preview.redd.it/high-resolution-remakes-of-the-old-default-youtube-avatar-v0-bgwxf7bec4ob1.png?width=640&crop=smart&auto=webp&s=99d5fec405e0c7fc05f94c1e1754f7dc29ccadbd"
            alt=""
          />
        </div>
        <span className="font-medium whitespace-nowrap">{name}</span>
      </div>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
