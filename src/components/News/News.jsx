import React from "react";
import Filter from "../Filter/Filter";
import PostContainer from "../Posts/Post/PostContainer";
import PostWriterContainer from "../Posts/PostWriter/PostWriterContainer";

import { faHourglassStart, faHourglassEnd, faShuffle } from '@fortawesome/free-solid-svg-icons';

import './News.css';

const MainContent = (props) => {
    return (
        <>
            <PostWriterContainer/>
            <Filter values={["old news", "new news", "random"]} icons={[faHourglassStart, faHourglassEnd, faShuffle]} />
            <PostContainer/>
        </>
    );
};

export default MainContent;