import React from "react";
import Post from "./Post";

import './Post.css';

const PostContainer = (props) => {
    return (
        <div className="content__posts posts ">
            <div className="posts__container">
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default PostContainer;