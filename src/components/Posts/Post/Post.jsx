import React from "react";

import avaDefault from '../../../assets/img/avaDefault.png';
import PostContent from "./PostContent/PostContent";

import PostHeader from "./PostHeader/PostHeader";

import './Post.css';
import postImg from '../../../assets/img/forPost.jpg';
import PostFooter from "./PostFooter/PostFooter";

const Post = (props) => {
    let datePost = new Date(props.date).toLocaleString();

    return (
        <div className="posts__post post block">
            <div className="post__container">
                <PostHeader avaImg={avaDefault} name={"Jovani Giorgio"} datePost={datePost} />
                <div className="line"></div>
                <PostContent title={props.title} content={props.textContent} 
                postImg={props.postImg}/>
                <div className="line"></div>
                <PostFooter countLikes={props.likesCount} />
            </div>
        </div>
    );
};

export default Post;