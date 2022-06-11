import React from "react";
import FormContent from "../FormContent/FormContent";
import PostBottom from "../PostBottom/PostBottom";

import './PostForm.css';

const PostForm = (props) => {
    return (
        <form className="post-write__form form-post">
            <FormContent/>
            <div className="line"></div>
            {/* Description for post */}
            <PostBottom />
        </form>
    );
};

export default PostForm;