import React, {Component} from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import './app.css';

import Header from "../header";
import SearchBar from "../search";
import MainPage from "../main-page";
import SearchResults from "../search-results";
import Article from "../article";

import history from "../../services";


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
            ],
            searchResults: [
                {id:'1', topic:'Hong Kong: US and allies defend \'bastion of freedom\'', text:'The US, UK, Australia and Canada have issued fresh condemnation of Beijing\'s new security law for Hong Kong, which they say has "flourished as a bastion of freedom".', img:'https://ichef.bbc.co.uk/wwhp/999/cpsprodpb/0338/production/_112542800_mediaitem112542797.jpg'},
                {id:'2', topic:'Trump to take \'big action\' against social media', text:'US President Donald Trump is expected to sign an executive order redefining the legal protections given to social media platforms.', img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/4050/production/_112546461_trump-afp2.jpg'},
                {id:'3', topic:'Coronavirus deaths in US top 100,000', text:'The US has passed 100,000 deaths in the coronavirus outbreak in less than four months.', img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/173ED/production/_112531259_mediaitem112531258.jpg'},
                {id:'4', topic:'Coronavirus: How exposed is your job?', text:'Millions of workers are doing their day jobs from makeshift set-ups in their living rooms and kitchens, while those in England who can\'t work from home are now encouraged to go back in if they can do so safely.', img:'https://ichef.bbci.co.uk/news/660/cpsprodpb/97A9/production/_112252883_coronavirus_jobs_by_risk_index_976.jpg'},
            ],

            fakeContent: 'China is facing mounting criticism over its plan to impose a security law on Hong Kong which would make it a crime to undermine Beijing\'s authority in the territory.\n' +
                '\n' +
                'The US, UK, Australia and Canada have condemned the legislation. President Trump is expected to announce his response later on Friday.\n' +
                '\n' +
                'China has rejected foreign criticism.\n' +
                '\n' +
                'By law, Hong Kong has some freedoms - of the press and association - not guaranteed on the mainland.\n' +
                '\n' +
                'These are a legacy of the agreement under which Hong Kong was handed back from the UK to China in 1997.\n' +
                '\n' +
                'There are fears the law - which has sparked a wave of protests - could end Hong Kong\'s unique status.\n' +
                '\n' +
                'The move has already sparked a new wave of anti-mainland protests in Hong Kong.\n' +
                '\n' +
                'China\'s new law: Why is Hong Kong worried?\n' +
                'The background you need on Hong Kong\'s protests\n' +
                '\'All necessary measures\'\n' +
                'On Wednesday, US Secretary of State Mike Pompeo told Congress that Hong Kong no longer merited special treatment under US law, potentially paving the way for it to be stripped of trading privileges such as lower tariffs than mainland China.\n' +
                '\n' +
                'The EU has warned that imposing sanctions would not solve the crisis.\n' +
                '\n' +
                '"Our relationship with China is based on mutual respect and trust... but this decision calls this into question and I think that we have to raise the issue in our continued dialogue with China", EU High Representative for Foreign Affairs Josep Borrell said after talks with foreign ministers on Friday.\n' +
                '\n' +
                'China\'s foreign ministry said it would take "all necessary measures" in response to any potential sanctions.\n' +
                '\n' +
                'Hong Kong\'s justice secretary Teresa Cheng told the BBC\'s Chinese service that any threat of sanctions was unacceptable.\n' +
                '\n' +
                '"Are the sanctions being imposed with a view to coerce another state to change their policy...? Any such sanctions are not going to benefit anyone".\n' +
                '\n' +
                'What other international reaction has there been?\n' +
                'A request by the US to bring the matter before the United Nations Security Council earlier this week was blocked by China.\n' +
                '\n' +
                'On Thursday, the US, UK, Australia and Canada issued a joint statement criticising the plan. In it, they said that imposing the security law would undermine the "one country, two systems" framework agreed before Hong Kong was handed over from British to Chinese rule in 1997.\n' +
                '\n' +
                'The framework guaranteed Hong Kong some autonomy and afforded rights and freedoms that do not exist in mainland China.\n' +
                '\n' +
                'China\'s new law: Why is Hong Kong worried?\n' +
                'How is Hong Kong run?\n' +
                'UK Foreign Secretary Dominic Raab said the UK could offer British National (Overseas) passport holders in Hong Kong a path to UK citizenship. Currently, they have the right to visit the UK for up to six months without a visa.\n' +
                '\n' +
                'Taiwan\'s parliament has backed a plan to offer sanctuary to people who want to flee Hong Kong, but China - which considers Taiwan to be part of its own territory - has warned the island not to get involved.\n' +
                '\n' +
                'China also says all BNO passport holders are Chinese nationals, and if the UK changes this practice, it would violate international law.'
        }
    }

    render () {

        const {newslist, searchResults, fakeContent} = this.state;

        return (
            <div className="app-container">
               <Router history={history}>
                    <Header />
                    <SearchBar />

                    <Switch>
                        <Route path='/' exact render={() => <MainPage newsitems={newslist} /> } />
                        <Route path='/search/' render={() => <SearchResults searchResults={searchResults} />} />
                        <Route path='/article/:id' render={({match}) => {
                            const {id} = match.params;
                            return <Article
                                articleId={id}
                                articleContent={searchResults}
                                content={fakeContent} />
                        }} />
                        <Route render={() => '404 :)'} />
                    </Switch>
               </Router>
            </div>
        )
    }
}

