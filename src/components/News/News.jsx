import React from "react";
import Filter from "../Filter/Filter";
import PostContainer from "../Posts/Post/PostContainer";
import PostWriter from "../Posts/PostWriter/PostWriter";

import { faHourglassStart, faHourglassEnd, faShuffle } from '@fortawesome/free-solid-svg-icons';

import './News.css';

const MainContent = (props) => {
    return (
        <>
            <PostWriter/>
            <Filter values={["old news", "new news", "random"]} icons={[faHourglassStart, faHourglassEnd, faShuffle]} />
            <PostContainer/>
        </>
    );
};

export default MainContent;