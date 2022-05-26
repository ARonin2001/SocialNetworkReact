import React from "react";

import './PostBottom.css';

const PostBottom = (props) => {
    return (
        <div className="form-post_bottom">
            <div className="form-post__img-container">
                <input type="file" name="post-image" id="form-post__img-input" className="form-post__img-input" accept=".jpg, .jpeg, .png" />
                <label className="form-post__img-label" htmlFor="form-post__img-input">
                </label>
            </div>
            <button type="button" className="from-post__button btn">ОПУБЛИКОВАТЬ</button>
        </div>
    );
};

export default PostBottom;
