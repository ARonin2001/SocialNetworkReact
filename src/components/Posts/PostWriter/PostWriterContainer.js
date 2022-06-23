import React, {useState} from "react";
import { connect } from "react-redux";

import PostWriter from "./PostWriter";

import {addNewPost} from "../../../redux/reducers/postReducer";

const PostWriterContainer = (props) => {
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [postImg, setPostImg] = useState(null);

    const isInputsEmpty = () => {
        if(title === '' || content === '')
            return true;
        return false;
    }

    const addPost = () => {
        if(!isInputsEmpty() && props.isAuth) {
            const newPost = {
                title,
                textContent: content,
                postImg,
            }
            
            props.addNewPost(props.userId, newPost);
        }
    };

    return (
        <PostWriter 
            title={title} setTitle={setTitle}
            content={content} setContent={setContent}
            postImg={postImg} setPostImg={setPostImg}
            addPost={addPost} />
    );
};

const mapStateToProps = state => {
    return {
        userId: state.auth._id,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {
        addNewPost
    }
)(PostWriterContainer);

