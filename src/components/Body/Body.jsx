import React, { useEffect, useState } from "react";
import { getTopNews } from "../api";

import NewsCard from "./NewsCard";
import Pagination from './Pagination'

const Body = () => {
  const [topNews, setTopNews] = useState();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12); 

  

  useEffect(() => {
    (async () => {
      setTopNews(await getTopNews());
    })();
  }, []);

  //getting limited posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const newsList = topNews? topNews.slice(indexOfFirstPost, indexOfLastPost): [] 

  //to change page
  const paginate = pageNumber => setCurrentPage(pageNumber)




  

  return(
    (!!topNews) ? 
    <div>
        <NewsCard newsList={newsList}/>
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={topNews.length}
        paginate={paginate}
      />

      </div>
      :
      "loading...."
  )
};

export default Body;
