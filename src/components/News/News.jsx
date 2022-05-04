import React from "react";
import Filter from "../Filter/Filter";
import PostContainer from "../Posts/Post/PostContainer";
import PostWriter from "../Posts/PostWriter/PostWriter";

import './News.css';

const MainContent = (props) => {
    return (
        <>
            <PostWriter/>
            <Filter/>
            <PostContainer/>
        </>
    );
};

export default MainContent;