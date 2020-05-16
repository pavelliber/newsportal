import React from "react";
import './news-item.css';

const NewsItem = ({newsitem}) => {
    const bgColor = newsitem.color;
    return (
        <div className="news-item" style={{backgroundColor: bgColor}}>
            {newsitem.topic}
        </div>
    )
}

export default NewsItem;