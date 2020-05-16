import React, {Component} from 'react';
import Header from "../header/Header";
import './app.css';

export default class App extends Component {

    render () {
        return (
            <div className="app-container">
                <Header />
                <section>Search</section>
                <section>Top News</section>
                <section>Latest news</section>
            </div>
        )
    }
}

