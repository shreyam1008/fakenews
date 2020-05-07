import React, { useEffect, useState } from "react";
import { getNews } from "../api";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';

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
              <Paper elevation={4}>
                <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {news.title}
                  </Typography>
                  <Typography color="textSecondary">
                    BY: {news.by} DATE: {news.time}
                  </Typography>
                </CardContent>
                <CardActions>
                <Button 
                variant="outlined" 
                color="primary" 
                href={news.url}>
        Read News
      </Button>
                </CardActions>
              </Card>

              </Paper>
              
            );
          })
        : "loading...."}
    </>
  );
};

export default NewsCard;
