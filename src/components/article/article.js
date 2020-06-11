import React from "react";
import './article.css';

const Article = ({articleId, articleContent, content}) => {

    const articleObj = articleContent.find(x => x.id === articleId);

    if (!articleObj) return null;

    const {text, topic, img} = articleObj;

    return (
        <div>
            <div className='article-img-container'>
                <img src={img} alt="news" />
            </div>
            <div>
                <h2>{topic}</h2>
                <p>{text}</p>
            </div>
            <p>{content}</p>
        </div>
    )
}

export default Article;