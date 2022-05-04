import React from "react";
import PostForm from "./PostForm/PostForm";

import './PostWriter.css';
import PostWriteTitle from "./PostWriteTitle/PostWriteTitle";

const PostWriter = (props) => {
    return (
        <div class="post-write content__post-writer block">
            <div class="post-write__container">
                <PostWriteTitle />
                <div class="line"></div>

                {/* Form (title, news) */}
                <PostForm/>
            </div>
        </div>
    );
};

export default PostWriter;