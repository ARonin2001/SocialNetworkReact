import React from "react";
import { useState } from "react";

import './PostWriteTitle.css';

const PostWriteTitle = (props) => {

    return (
        <>
            <input className="post-write__title title" name="post-title" placeholder="Your Title" 
                onChange={(e) => props.setTitle(e.target.value)} value={props.title} />
            {/* {!isTitleChange ? 
                <h3 className="post-write__title title" onClick={toggleIsTitleChange}>Your Title</h3>
                :  <h3 className="post-write__title-input title" autofocus tabIndex={0} 
                    onBlur={toggleIsTitleChange}></h3>
            } */}

        </>
    );
};

export default PostWriteTitle;