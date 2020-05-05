import React, { useEffect, useState } from "react";
import { getTopNews } from "../api";

import newsCard from "./NewsCard";
import NewsCard from "./NewsCard";

const Body = () => {
  const [topNews, setTopNews] = useState();
  

  useEffect(() => {
    (async () => {
      setTopNews(await getTopNews());
    })();
  }, []);
  // console.log(getNewsList("23066922"));

  if (topNews) {
    return (
      <ul>
        {topNews.data.map((news) => (
          <NewsCard newsId={news} />
        ))}
      </ul>
    );
  } else {
    return "loading....";
  }
};

export default Body;
