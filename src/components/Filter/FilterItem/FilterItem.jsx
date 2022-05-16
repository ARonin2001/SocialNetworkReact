import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import './FilterItem.css';

const FilterItem = ({value, icon, method, index}) => {
    return (
        <div className="filter__item" onClick={() => {method(index)}}>
            <button className="filter__btn">
                <FontAwesomeIcon icon={icon}/>
                <span className="filter__btn-text">{value}</span>
            </button>
        </div>
    );
};

export default FilterItem;