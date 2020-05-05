import axios from "axios";
const apiCall = (call) =>
  `https://hacker-news.firebaseio.com/v0/${call}.json?print=pretty`;

export const getTopNews = async () => {
  try {
    const { data } = await axios.get(apiCall("topstories"));
    return  data ;
  } catch (error) {
    console.log(error);
  }
};

export const getNews = async (newsId) => {
  const {data} = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`
  );
  return data
};
