import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import './FilterItem.css';

const FilterItem = ({value, icon}) => {
    return (
        <div class="filter__item">
            <button class="filter__btn">
                <FontAwesomeIcon icon={icon}/>
                <span class="filter__btn-text">{value}</span>
            </button>
        </div>
    );
};

export default FilterItem;