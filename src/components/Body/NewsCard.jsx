import React, { useEffect, useState } from "react";
import { getNews } from "../api";



const NewsCard = ({ newsList }) => {
  const [news, setNews] = useState([]);





useEffect(() => {

  (async () => {
    const promises = []

    newsList.forEach(
      newsId => 
        promises.push(getNews(newsId))
      )
    
    const newsData = await Promise.all(promises)
    setNews(newsData)

    
  })()

  }, [])

  


  return(
  <>
  {news.map((news, i)=>{
    return(
      <li key={i}>
        {news.title}
      </li>
    )
  })}
  {!!news.length? "wotking": "loading...."}
  </>
  )
}

export default NewsCard;
