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

  if (topNews) {
    return (
      <div>
        <NewsCard newsList={topNews.slice(0,10)}/>


      </div>
    );
  } else {
    return "loading....";
  }
};

export default Body;
