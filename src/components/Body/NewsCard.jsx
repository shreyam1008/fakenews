import React, { useEffect, useState } from "react";
import { getNews } from "../api";

const NewsCard = ({ newsList }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const promises = [];

      newsList.forEach((newsId) => promises.push(getNews(newsId)));

      const newsData = await Promise.all(promises);
      setNews(newsData);
    })();
  }, [newsList]);
  console.log(news);

  return (
    <>
      {!!news.length
        ? news.map((news, i) => {
            return (
              <li key={i}>
                {news.title}
                -_Aurthur= {news.by}
                --date
                {news.time}
              </li>
            );
          })
        : "loading...."}
    </>
  );
};

export default NewsCard;
