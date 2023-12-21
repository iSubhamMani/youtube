import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { appendChat } from "../utils/slices/chatSlice";
import { generateMessages, generateNames } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const submitLiveMessage = () => {
    dispatch(
      appendChat({
        name: "Subham Mani",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // API polling
      dispatch(
        appendChat({
          name: generateNames(),
          message: generateMessages(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="border-2 border-gray-300 rounded-xl py-2">
      <h1 className="font-medium py-2 px-4  border-b-[1px] border-gray-400">
        Live Chat
      </h1>
      <div className="flex pr-2 px-4 flex-col-reverse gap-2 overflow-auto h-[600px]  w-full min-w-[300px]">
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage
            key={index}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        ))}
      </div>
      <form className="flex items-center gap-2 px-4">
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Type your message"
          className="border-b-2 my-4 w-full border-gray-400 px-2 py-1 outline-none"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            submitLiveMessage();
          }}
          className="bg-red-500 px-4 py-1 text-white font-medium rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
