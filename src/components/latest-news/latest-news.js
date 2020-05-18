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
                {newslist.map(
                    (item, index) => <NewsItem key={`item${index}`} newsitem={item} />
                )}
            </div>
        )
    }


}
