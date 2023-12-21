import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "../constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    appendChat: (state, action) => {
      state.messages.splice(LIVE_CHAT_OFFSET, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { appendChat } = chatSlice.actions;
export default chatSlice.reducer;
