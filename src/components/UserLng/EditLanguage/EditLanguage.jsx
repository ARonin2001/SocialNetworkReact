import React, { useState } from "react";
import Select from "../../Select/Select";

import './EditLanguage.css';

const EditLanguage = ({ title, method, ...props }) => {
    let [level, setLevel] = useState(3);

    const levels = [
        { _id: 1, name: 1 },
        { _id: 2, name: 2 },
        { _id: 3, name: 3 },
    ]

    return (
        <div className="edit-lng block">
            <div className="edit-lng__container p-13">
                <h3 className="edit-lng__title title">{title}</h3>
                <div className="line"></div>

                <div className="edit-lng__select-container">
                    <div className="add-lng__section">
                        <Select title={"Language level"} name={"level"} values={levels} errors={""} change={e => {setLevel(e.target.value); console.log(e.target.value)}} value={level} />
                    </div>
                </div>

                <button className="add-lng__btn btn" onClick={() => method(level)}>EDIT</button>
            </div>
        </div>
    );
};

export default EditLanguage;