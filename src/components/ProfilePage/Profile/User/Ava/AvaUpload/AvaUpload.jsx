import React from 'react';

import InputImg from '../../../../../Inputs/InputImg/InputImg';

import './AvaUpload.css';

const AvaUpload = ({formik, ...props}) => {
    return (
        <div className="ava-upload block p-13">
            <h3 className="ava-upload__title title">Upload img</h3>
            <div className="line"></div>
            <div className="ava-upload__content">
                <form onSubmit={formik.handleSubmit} className="ava-upload__form" id="ava-form">
                    <InputImg labelTitle={"Upload img"} name={"avaImg"} 
                        onChange={(e) => 
                            formik.setFieldValue('avaImg', e.currentTarget.files[0])}
                        error={formik.errors} />
                    <button type="submit" className="ava-upload__btn btn">SAVE</button>
                </form>
            </div>

        </div>
    )
};

export default AvaUpload;