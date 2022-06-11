import React from "react";
import { useState } from "react";

import './PostWriteTitle.css';

const PostWriteTitle = (props) => {

    let [isTitleChange, setIsTitleChange] = useState(false);
    const toggleIsTitleChange = (e) => {
        setIsTitleChange(!isTitleChange);
    }

    return (
        <>
            {!isTitleChange ? 
                <h3 className="post-write__title title" onClick={toggleIsTitleChange}>Your Title</h3>
                :  <h3 className="post-write__title-input title" autofocus tabIndex={0} 
                    onBlur={toggleIsTitleChange}></h3>
            }

        </>
    );
};

export default PostWriteTitle;