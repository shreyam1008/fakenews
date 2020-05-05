import axios from "axios";
const apiCall = (call) =>
  `https://hacker-news.firebaseio.com/v0/${call}.json?print=pretty`;

export  const getNews =async () => {
  try {
    const {data} = await axios.get(apiCall('topstories'))
    // console.log(data)
    return {data}
  } catch (error) {
    console.log(error)
  }
    
}