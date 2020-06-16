import React, {Component} from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import './app.css';

import Header from "../header";
import SearchBar from "../search";
import MainPage from "../main-page";
import SearchResults from "../search-results";
import Article from "../article";

import history from "../../services";
import ErrorWrapper from "../error-wrapper";
import {AuthContext} from "../../services";


export default class App extends Component {

    render () {

        const loggedInStatus = false;

        return (
            <ErrorWrapper>
                <AuthContext.Provider value={loggedInStatus}>
                    <div className="app-container">
                       <Router history={history}>
                            <Header />
                            <SearchBar />

                            <Switch>
                                <Route path='/' exact render={() => <MainPage /> } />
                                <Route path='/search/' render={() => <SearchResults/>} />
                                <Route path='/article/:id' render={({match}) => {
                                    const {id} = match.params;
                                    return <Article apiData = {id} />
                                }} />
                                <Route render={() => '404 :)'} />
                            </Switch>
                       </Router>
                    </div>
                </AuthContext.Provider>
            </ErrorWrapper>
        )
    }
}

