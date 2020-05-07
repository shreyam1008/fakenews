import React, { useEffect, useState } from "react";
import { getTopNews } from "../api";

import NewsCard from "./NewsCard";
// import Pagination from './Pagination'
import Pagination from '@material-ui/lab/Pagination';

const Body = () => {
  const [topNews, setTopNews] = useState();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3); 

  

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
  const handleChange = (event, pageNumber) => setCurrentPage(pageNumber)




  // const handleChange = (event, value) =>{

  // }

  return(
    (!!topNews) ? 
    <div>
        <NewsCard newsList={newsList}/>
        <Pagination
        // postsPerPage={postsPerPage}
        // totalPosts={topNews.length}
        // paginate={paginate}
        count={Math.ceil(topNews.length/postsPerPage)}
        onChange = {handleChange}
      />

      </div>
      :
      "loading...."
  )
};

export default Body;
