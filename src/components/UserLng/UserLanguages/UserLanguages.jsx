import React from "react";
import LanguageBtn from "../../LanguageBtn/LanguageBtn";
import Item from "./Item/Item";

import './UserLanguages.css';

const UserLanguages = (props) => {
    return (
        <div className="user-lng__items">
            <Item title={"Native"} LanguageBtn={<LanguageBtn />} languages={[{id: 1, lng: "Русский"}, {id: 2, lng: "Japanese"}, {id:3, lng: "Englesh"}]} />

            <Item title={"Fluent"} languages={[{id: 1, lng: "Deutsch"}, {id: 2, lng: "Japanese"}, {id:3, lng: "Franch"}]} />

            {/* This is different language item */}
            <Item isLevel={true} title={"Learning"} languages={[{id: 1, lng: "Deutsch", level: 3}, {id: 2, lng: "Japanese", level: 1}, {id:3, lng: "Franch", level: 1}, {id:4, lng: "Chines", level: 2}]} />
        </div>
    );
};

export default UserLanguages;