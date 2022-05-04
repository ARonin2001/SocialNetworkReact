import React from "react";

import './PostContent.css';

const PostContent = ({title, content, postImg}) => {
    return (
        <div class="post__content">
            <h2 class="post__title title">{title}</h2>
            <div class="post__text">
                {content}
            </div>
            <div class="post__img-container">
                <img src={postImg} alt="post" class="post__img" />
            </div>
        </div>
    );
};

export default PostContent;