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
      <div>
        {topNews.data.slice(0,20).map((news) => (
          <NewsCard newsId={news} />
        ))}
      </div>
    );
  } else {
    return "loading....";
  }
};

export default Body;
