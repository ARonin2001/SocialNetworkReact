import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import './DialogsHeader.css';

const DialogsHeader = (props) => {
    return (
        <div className="dialogs__header">
            <div className="dialogs__search">
                <FontAwesomeIcon icon={faSearch} className={"dialogs__search-icon"} />
                <input type="text" name="user-name" id="dialogs__search-input" className="dialogs__search-input" placeholder="Find the user" />
            </div>
        </div>
    );
};

export default DialogsHeader;