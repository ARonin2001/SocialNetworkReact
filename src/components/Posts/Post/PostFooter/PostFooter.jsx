import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './PostFooter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const PostFooter = ({countLikes}) => {
    let [isLiked, setLike] = useState(false);

    const toggleLike = () => {
        setLike(!isLiked);
    }

    return (
        <div className="post__footer">
            <NavLink to="#" className="post__btn btn">ДАЛЕЕ</NavLink>
            <button className={`post__likes ${isLiked ? 'active': ''}`} 
                onClick={toggleLike}>
                <span className="post__like-count">{countLikes}</span>
                <FontAwesomeIcon icon={faHeart} className="post__like" />
            </button>
        </div>
    );
};

export default PostFooter;