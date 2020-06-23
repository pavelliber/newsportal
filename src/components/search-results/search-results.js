import React from "react";
import SearchResultItem from "./search-result-item";
import withData from "../hoc";
import {APIService} from "../../services";

const SearchResults = ({articleId, data }) => {

    return (
        <div>
            {data.map(
                (item, index) => <SearchResultItem key={`item${index}`} searchResult={item} />
            )}
        </div>
    )

}

const { getSearchResults } = new APIService();
export default withData(SearchResults, getSearchResults);