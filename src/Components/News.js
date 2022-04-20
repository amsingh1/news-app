import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";

export default function News(props) {
  const [news, setNews] = useState([]);
  

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=87b69066c02e49ff9fea024fe06d496c`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles));

    
  }, []);

  const listOfNews = news.map((item) => (
    <div className="col">
      <NewsItems
        key={item.description}
        img={
          item.urlToImage
            ? item.urlToImage
            : "http://www.clker.com/cliparts/q/L/P/Y/t/6/no-image-available-md.png"
        }
        description={
          item.description ? item.description.slice(0, 60) : "No Description"
        }
        url={item.url}
        title={item.title ? item.title.slice(0, 25) : "No Title"}
      />{" "}
    </div>
  ));
  return (
    <div>
      
      <h2 className="title">{props.category}</h2>

      <div className="row newscontainer">{listOfNews}</div>
    </div>
  );
}
