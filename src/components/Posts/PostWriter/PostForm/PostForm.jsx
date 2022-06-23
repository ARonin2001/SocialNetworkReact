import React from "react";
import FormContent from "../FormContent/FormContent";
import PostBottom from "../PostBottom/PostBottom";

import './PostForm.css';

const PostForm = ({content, setContent, postImg, setPostImg, addPost}) => {
    return (
        <form className="post-write__form form-post">
            <FormContent content={content} setContent={setContent}/>
            <div className="line"></div>
            {/* Description for post */}
            <PostBottom postImg={postImg} setPostImg={setPostImg} addPost={addPost} />
        </form>
    );
};

export default PostForm;