import React from "react";
import Item from "./Item/Item";

import './UserLanguages.css';

const UserLanguages = (props) => {
    return (
        <div className="user-lng__items">
            {
                Object.entries(props.languages).map(item => {
                    let titleFirstSymbolUpperCase = item[0][0].toUpperCase() + item[0].substring(1);
                    
                    return (
                        <Item key={item[0]} title={titleFirstSymbolUpperCase} languages={item[1]} 
                        openAddLanguage={props.openAddLanguage} />
                    )
                })
            }
        </div>
    );
};

export default UserLanguages;