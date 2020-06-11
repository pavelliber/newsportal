import React from "react";
import './search-result-item.css';
import history from "../../services";

const SearchResultItem = ({searchResult}) => {
    const {id, text, topic, img} = searchResult;

    function handleClick(e) {
        e.preventDefault();
        history.push('/article/' + id);
    }
    return (
        <div className='search-result-item'>
            <div className='search-result-tile'>
                <img src={img} alt="news" />
            </div>
            <div className='search-result-text'>
                <h2><a href='#' onClick={handleClick}> {topic} </a></h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SearchResultItem;