import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import './UsersSearch.css';

const UsersSearch = ({setUsers, setAllUsers}) => {
    let [name, setName] = useState("");

    const setUserNameOrLastName = (e) => {
        setName(e.target.value);
    }

    useEffect(() => {
        if(!name)
            setAllUsers();
        else
            setUsers(name);
    }, [name]);

    return (
        <div className="users__search">
            <div className="users__input-container">
                <FontAwesomeIcon icon={faSearch} className={"users__search-icon"} />
                <input type="text" className="users__searching" id="users__searching" placeholder="User name..."  
                    value={name}
                    onChange={setUserNameOrLastName}  />
            </div>
        </div>
    );
};

export default UsersSearch;