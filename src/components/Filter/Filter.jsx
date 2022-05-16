import React from "react";
import FilterItem from "./FilterItem/FilterItem";

import './Filter.css';

const Filter = (props) => {
    return (
        <div className="content__filter filter block">
            <div className="filter__container">
                {
                    props.values.map((value, index) => {
                        return (
                            <FilterItem key={index} value={value} icon={props.icons[index]} index={index} method={props.method} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Filter;