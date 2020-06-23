import React from "react";
import TopNews from "../top-news";
import LatestNews from "../latest-news";
import {APIService} from "../../services";
import withData from "../hoc";

const MainPage = ( {data} ) => {

    return (
        <div>
            <TopNews />
            <LatestNews newslist={data} />
        </div>
    )

}

const { getMainNewsList } = new APIService();
export default withData(MainPage, getMainNewsList);