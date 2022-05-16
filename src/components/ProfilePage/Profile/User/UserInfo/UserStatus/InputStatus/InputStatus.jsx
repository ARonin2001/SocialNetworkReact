import React from "react";

import Input from './../../../../../../Input/Input';

import './InputStatus.css';

const InputStatus = ({formik}) => {
    return (
        <div className="input-status__container block">
            <form onSubmit={formik.handleSubmit} className="input-status__form" id="status__form">
                <Input title={"Status"} type={"text"} name={"status"} onChange={formik.handleChange} value={formik.values.status} errors={formik.errors} />
                
                <button className="btn input-status__btn" type={"submit"}>SAVE</button>
            </form>
        </div>
    );
};

export default InputStatus;