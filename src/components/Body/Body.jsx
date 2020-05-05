import React, { useEffect, useState } from "react";
import axios from "axios";
import { getNews } from "../api";

const Body = () => {
  const newsList = getNews()

  const [newsList, setNewsList] = useState();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
      );
      setNewsList(data);
    }
    fetchData();
  }, []);
  console.log(newsList)

  if(newsList){
    return (
        <ul>
            {newsList.map((news)=>
                  <li>{news}</li>
            )}
          </ul>
        );
  }
  else{
      return "loading...."
  }
  
};

export default Body;
