import React from 'react';

import InputImg from '../../../../../Inputs/InputImg/InputImg';
import AvatarImg from '../../../../../AvatarImg/AvatarImg';

import './AvaUpload.css';

const AvaUpload = ({formik, ...props}) => {
    console.log("Formik: " + formik);
    return (
        <div className="ava-upload block p-13">
            <h3 className="ava-upload__title title">Upload ava img</h3>
            <div className="line"></div>
            <div className="ava-upload__content">
                <form onSubmit={formik.handleSubmit} className="ava-upload__form" id="ava-form">
                    <InputImg labelTitle={"Upload img"} name={"avaImg"} 
                        value={formik.values.img}
                        onChange={formik.handleChange}
                        error={formik.errors} />
                    <button type="submit" className="ava-upload__btn btn">SAVE</button>
                </form>

                <AvatarImg avaIMG={""} />
            </div>

        </div>
    )
};

export default AvaUpload;