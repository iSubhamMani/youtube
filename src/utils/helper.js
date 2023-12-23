const nameList = [
  "Aarav",
  "Aanya",
  "Aditi",
  "Advait",
  "Aisha",
  "Akshay",
  "Amara",
  "Anika",
  "Arjun",
  "Avani",
  "Ayush",
  "Chetan",
  "Dia",
  "Divya",
  "Eesha",
  "Eshaan",
  "Gauri",
  "Hari",
  "Ishaan",
  "Jai",
  "Kavya",
  "Krishna",
  "Laksh",
  "Mira",
  "Neha",
  "Nikhil",
  "Nina",
  "Om",
  "Pooja",
  "Rahul",
  "Riya",
  "Rohan",
  "Sanaya",
  "Sarika",
  "Shreya",
  "Siddharth",
  "Simran",
  "Tanvi",
  "Uday",
  "Urvi",
  "Varun",
  "Vidya",
  "Yash",
  "Zara",
  "Zayn",
  "Zoya",
];

const chatMessages = [
  "Hey there! How are you?",
  "Hi! What's up?",
  "Good morning! Did you have a good night's sleep?",
  "Hello! I hope your day is going well.",
  "Hey, any plans for the weekend?",
  "Hi, how's work going for you today?",
  "Good to see you! What's new?",
  "Hello! I was thinking about our last conversation.",
  "Hey, have you tried that new restaurant downtown?",
  "Hi! How's the weather on your side?",
  "Good afternoon! Anything exciting happening today?",
  "Hello! What's your favorite book or movie?",
  "Hey, do you have any travel plans coming up?",
  "Hi there! How's the family doing?",
  "Good to chat with you again! What's on your mind?",
  "Hello! Did you catch the latest episode of that show?",
  "Hey, have you heard any interesting news lately?",
  "Hi! What's your go-to stress-relief activity?",
  "Good evening! How was your day?",
  "Hello! I just finished a great book, any recommendations?",
  "Hey, what's your favorite type of music?",
  "Hi there! How do you usually spend your weekends?",
  "Good to see you! How's the project you're working on?",
  "Hello! Any exciting plans for the upcoming holidays?",
  "Hey, do you follow any sports? How's your favorite team doing?",
  "Hi! What's the most memorable trip you've ever taken?",
  "Good morning! Coffee or tea to start your day?",
  "Hello! How do you stay motivated during busy weeks?",
  "Hey there! What's your favorite way to relax after a long day?",
  "Hi! Any new hobbies or interests you've picked up recently?",
  "Good to chat with you again! How's your week going so far?",
  "Hello! Any favorite quotes or life mottos you live by?",
  "Hey, did you try that new recipe you were talking about?",
  "Hi there! What's the best piece of advice you've ever received?",
  "Good evening! How do you handle stress?",
  "Hello! I'm curious, what's your dream vacation destination?",
  "Hey, any exciting plans for the upcoming weekend?",
  "Hi! What's the last movie you watched and enjoyed?",
  "Good to see you! How's your fitness routine going?",
  "Hello! Do you have any pets? Tell me about them!",
  "Hey there! What's your favorite season and why?",
  "Hi! Any interesting podcasts you've been listening to?",
  "Good morning! How do you kickstart your day with energy?",
  "Hello! Any favorite apps or tools that you can't live without?",
  "Hey, have you ever attended a live concert? How was it?",
  "Hi! What's your favorite childhood memory?",
  "Good to chat with you again! What's your guilty pleasure food?",
  "Hello! How do you handle challenges or setbacks?",
  "Hey, any upcoming plans for self-improvement or learning?",
  "Hi there! What's the most adventurous thing you've ever done?",
  "Good evening! Any favorite board games or card games?",
  "Hello! How do you stay creative in your daily life?",
];

export const generateMessages = () => {
  return chatMessages[Math.floor(Math.random() * chatMessages.length)];
};

export const generateNames = () => {
  return nameList[Math.floor(Math.random() * nameList.length)];
};

export const modifyCount = (viewCount) => {
  if (viewCount >= 1000 && viewCount < 1000000) {
    return Math.floor(viewCount / 1000) + "K";
  } else if (viewCount >= 1000000) {
    return Math.floor(viewCount / 1000000) + "M";
  }
};

export const modifyDateTime = (data) => {
  const date = new Date(data);
  return (
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  );
};
