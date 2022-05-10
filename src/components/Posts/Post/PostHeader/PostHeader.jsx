import React from "react";

import './PostHeader.css';

const PostHeader = ({avaImg, name, datePost, countComments}) => {
    return (
        <div className="post__header">
            <div className="post__user">
                <a href="#" className="post__user-link">
                    <div className="post__ava">
                        <img src={avaImg} alt="ava" className="post__ava-img" />
                    </div>
                    <div className="post__user-info">
                        <div className="post__name">
                            {name}
                        </div>
                        <span className="post__time sub-title">{datePost}</span>
                    </div>
                </a>
            </div>
            <div className="post__comments-count sub-title">
                Комментарии: <span className="post__comments-number">{countComments}</span>
            </div>
        </div>
    );
};

export default PostHeader;