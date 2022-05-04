import React from "react";

import './PostBottom.css';

const PostBottom = (props) => {
    return (
        <div class="form-post_bottom">
            <div class="form-post__img-container">
                <input type="file" name="post-image" id="form-post__img-input" class="form-post__img-input" accept=".jpg, .jpeg, .png" />
                <label class="form-post__img-label" for="form-post__img-input">
                </label>
            </div>
            <button type="button" class="from-post__button btn">ОПУБЛИКОВАТЬ</button>
        </div>
    );
};

export default PostBottom;
