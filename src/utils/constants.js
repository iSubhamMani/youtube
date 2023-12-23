const GOOGLE_API_KEY = "AIzaSyD71bszl5g0psmEftyvCzhaOQYlfyTiHAA";

const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

const YOUTUBE_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const YOUTUBE_VIDEO_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;

const YOUTUBE_CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

const LIVE_CHAT_OFFSET = 25;

export {
  YOUTUBE_VIDEO_API,
  YOUTUBE_SUGGESTIONS_API,
  LIVE_CHAT_OFFSET,
  YOUTUBE_SEARCH_API,
  YOUTUBE_VIDEO_DETAILS_API,
  YOUTUBE_CHANNEL_API,
};
