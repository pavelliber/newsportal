import React from "react";
import TopNews from "../top-news/top-news";
import LatestNews from "../latest-news/latest-news";

const MainPage = ({newsitems}) => {
    return (
        <div>
            <TopNews />
            <LatestNews newslist={newsitems} />
        </div>
    )
}

export default MainPage;