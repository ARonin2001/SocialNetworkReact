import React from "react";

import Input from './../../../../../../Input/Input';

import './InputStatus.css';

const InputStatus = (props) => {
    return (
        <div className="input-status__container block">
            <form className="input-status__form" id="status__form">
                <Input title={"Status"} type={"text"} name={"status"} value={""} errors={""} />
                
                <button className="btn input-status__btn" type={"submit"}>SAVE</button>
            </form>
        </div>
    );
};

export default InputStatus;