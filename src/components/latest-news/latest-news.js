import React, {Component} from "react";
import NewsItem from "./news-item";
import './latest-news.css';

export default class LatestNews extends Component {

    constructor(props) {

        super(props);

        this.state = {newslist: props.newslist};
    }

    render () {

        const {newslist} = this.state;

        return (
            <div className="latest-news">
                {Array.prototype.map.call(newslist, function (item) {
                    return <NewsItem newsitem={item} />
                }, this)}
            </div>
        )
    }


}
