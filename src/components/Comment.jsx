const Comment = ({ data }) => {
  return (
    <div className="my-8">
      <div className="flex items-center gap-2">
        <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
          <img
            className="w-full h-full"
            src="https://preview.redd.it/high-resolution-remakes-of-the-old-default-youtube-avatar-v0-bgwxf7bec4ob1.png?width=640&crop=smart&auto=webp&s=99d5fec405e0c7fc05f94c1e1754f7dc29ccadbd"
            alt=""
          />
        </div>
        <span className="font-medium">{data?.name}</span>
      </div>
      <p className="mt-2">{data?.text}</p>
    </div>
  );
};

export default Comment;
