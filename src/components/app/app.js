import React, {Component} from 'react';
import Header from "../header/header";
import './app.css';
import SearchBar from "../search/search-bar";
import TopNews from "../top-news/top-news";
import LatestNews from "../latest-news/latest-news";

export default class App extends Component {

    constructor() {

        super();

        this.state = {
            newslist: [
                {topic:'topic 1', color:'#D8C2C2'},
                {topic:'topic 2', color:'#6F6176'},
                {topic:'topic 3', color:'#C45252'},
                {topic:'topic 4', color:'#E1DBA5'},
                {topic:'topic 5', color:'#C4C4C5'},
                {topic:'topic 6', color:'#E7D1F9'}
            ]
        }
    }

    render () {

        const {newslist} = this.state;
        return (
            <div className="app-container">
                <Header />
                <SearchBar />
                <TopNews />
                <LatestNews newslist={newslist}  />
            </div>
        )
    }
}

