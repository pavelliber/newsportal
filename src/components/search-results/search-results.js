import React, {Component} from "react";
import SearchResultItem from "./search-result-item";

export default class SearchResults extends Component {

    constructor(props) {

        super(props);

        this.state = {searchResults: props.searchResults};
    }

    render () {

        const {searchResults} = this.state;

        return (
            <div>
                {searchResults.map(
                    (item, index) => <SearchResultItem key={`item${index}`} searchResult={item} />
                )}
            </div>
        )
    }


}
