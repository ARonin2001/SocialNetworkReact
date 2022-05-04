import React from "react";
import FormContent from "../FormContent/FormContent";
import PostBottom from "../PostBottom/PostBottom";

import './PostForm.css';

const PostForm = (props) => {
    return (
        <form class="post-write__form form-post">
            {/* Title */}
            {/* <FormTitle /> */}
            <FormContent/>
            <div class="line"></div>
            {/* Description for post */}
            <PostBottom />
        </form>
    );
};

export default PostForm;