import React, { useEffect, useState } from "react";
import { getNews } from "../api";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({



});

const NewsCard = ({ newsList }) => {
  const [news, setNews] = useState([]);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

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
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {news.title}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    BY: {news.by} DATE: {news.time}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">READ NEWS</Button>
                </CardActions>
              </Card>
            );
          })
        : "loading...."}
    </>
  );
};

export default NewsCard;
