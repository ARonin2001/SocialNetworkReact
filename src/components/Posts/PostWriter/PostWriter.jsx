import React from "react";
import PostForm from "./PostForm/PostForm";

import './PostWriter.css';
import PostWriteTitle from "./PostWriteTitle/PostWriteTitle";

const PostWriter = ({title, setTitle, content, setContent, postImg, setPostImg, ...props}) => {
    return (
        <div className="post-write content__post-writer block">
            <div className="post-write__container">
                <PostWriteTitle title={title} setTitle={setTitle} />
                <div className="line"></div>

                {/* Form (title, news) */}
                <PostForm content={content} setContent={setContent} 
                    postImg={postImg} setPostImg={setPostImg} 
                    addPost={props.addPost} />
            </div>
        </div>
    );
};

export default PostWriter;