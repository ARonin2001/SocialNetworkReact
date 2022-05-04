import React from "react";

import './PostHeader.css';

const PostHeader = ({avaImg, name, datePost, countComments}) => {
    return (
        <div class="post__header">
            <div class="post__user">
                <a href="#" class="post__user-link">
                    <div class="post__ava">
                        <img src={avaImg} alt="ava" class="post__ava-img" />
                    </div>
                    <div class="post__user-info">
                        <div class="post__name">
                            {name}
                        </div>
                        <span class="post__time sub-title">{datePost}</span>
                    </div>
                </a>
            </div>
            <div class="post__comments-count sub-title">
                Комментарии: <span class="post__comments-number">{countComments}</span>
            </div>
        </div>
    );
};

export default PostHeader;