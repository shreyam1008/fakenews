import React, { useEffect, useState } from "react";
import { getTopNews } from "../api";

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
        {topNews.slice(0,10).map((news) => (
          <NewsCard newsId={news} />
        ))}
      </div>
    );
  } else {
    return "loading....";
  }
};

export default Body;
