const GOOGLE_API_KEY = "AIzaSyD71bszl5g0psmEftyvCzhaOQYlfyTiHAA";

const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export { YOUTUBE_VIDEO_API, YOUTUBE_SEARCH_API };
