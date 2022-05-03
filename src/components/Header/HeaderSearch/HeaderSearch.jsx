import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './HeaderSearch.css';


const HeaderSearch = (props) => {
    return (
        <div className="header__search">
            <div className="header__search-input-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="header__search-icon" />
                <input type="text" className="header__input-search" placeholder="Searching..." />
            </div>
        </div>
    );
}

export default HeaderSearch;