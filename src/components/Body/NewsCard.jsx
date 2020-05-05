import React, {useEffect, useState} from 'react'
import {getNews} from '../api'


const NewsCard = ({newsId}) => {

    const [news, setNews] = useState(null)


    useEffect(() => {
        (async () => {
          setNews(await getNews(newsId));
        })();
      }, []);
    
    if(news){
    return (
       
        <div>
          {news.title}
        </div>
    )}
    else{
        return "loading...."
    }
}

export default NewsCard
