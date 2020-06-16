import React from "react";
import './article.css';
import {APIService} from "../../services";
import withData from "../hoc";
import { AuthContext } from "../../services";


const Article = ({ data }) => {

    const {text, topic, img, content} = data;

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
            <AuthContext.Consumer>
                {
                    value => (
                        value === false  ?
                            <p>Please register to get early time access to fresh news</p> : null)
                }
            </AuthContext.Consumer>
        </div>
    )
}


const { getArticleContent, getLimitedArticleContent } = new APIService();
export default withData(Article, getArticleContent, getLimitedArticleContent);
