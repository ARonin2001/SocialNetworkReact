import React from "react";

import './PostContent.css';

const PostContent = ({title, content, postImg}) => {
    return (
        <div className="post__content">
            <h2 className="post__title title">{title}</h2>
            <div className="post__text">
                {content}
            </div>
            <div className="post__img-container">
                <img src={postImg} alt="post" className="post__img" />
            </div>
        </div>
    );
};

export default PostContent;