import React from "react";

import avaDefault from '../../../assets/img/avaDefault.png';
import PostContent from "./PostContent/PostContent";

import PostHeader from "./PostHeader/PostHeader";

import './Post.css';
import postImg from '../../../assets/img/forPost.jpg';
import PostFooter from "./PostFooter/PostFooter";

const Post = (props) => {
    return (
        <div className="posts__post post block">
            <div className="post__container">
                <PostHeader avaImg={avaDefault} name={"Jovani Giorgio"} datePost={"04.05.2022"} countComments={567}/>
                <div className="line"></div>
                <PostContent title={"Fond SCP"} content={"Фонд SCP — вымышленная организация, являющаяся предметом одноимённого проекта совместного веб-творчества, в русском переводе также известная просто как Фонд или Организация. Созданные в рамках проекта тексты описывают деятельность Фонда, несущего ответственность за содержание аномальных предметов..."} 
                postImg={postImg}/>
                <div className="line"></div>
                <PostFooter countLikes={256} />
            </div>
        </div>
    );
};

export default Post;