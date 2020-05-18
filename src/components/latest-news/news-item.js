import React from "react";
import './news-item.css';

const NewsItem = ({newsitem}) => {
    const {color, topic} = newsitem;
    return (
        <div className="news-item" style={{backgroundColor: color}}>
            {topic}
        </div>
    )
}

export default NewsItem;