import React from "react";
import history from "../../services/history";
import './search-bar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input/>
            <button onClick={() => history.push('/search/')}>SEARCH</button>
        </div>
    )
}

export default SearchBar;