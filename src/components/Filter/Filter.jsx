import React from "react";
import FilterItem from "./FilterItem/FilterItem";

import './Filter.css';
import { faHourglassEnd, faHourglassStart, faShuffle } from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {
    return (
        <div class="content__filter filter block">
            <div class="filter__container">
                <FilterItem value={"new posts"} icon={faHourglassStart} />
                <FilterItem value={"old posts"} icon={faHourglassEnd} />
                <FilterItem value={"random posts"} icon={faShuffle} />
            </div>
        </div>
    );
};

export default Filter;