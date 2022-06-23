import React from "react";
import Post from "./Post";

import { connect } from "react-redux";

import './Post.css';

const PostContainer = (props) => {
    return (
        <div className="content__posts posts ">
            <div className="posts__container">
                {
                    props.posts.map(post => {
                        return (
                            <Post title={post.title}
                                textContent={post.textContent}
                                postImg={post.img}
                                date={post.date}
                                likesCount={post.likesCount} />
                        )
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        posts: state.postsPage.posts,
    }
}

export default connect(
    mapStateToProps,
    null
)
(PostContainer);