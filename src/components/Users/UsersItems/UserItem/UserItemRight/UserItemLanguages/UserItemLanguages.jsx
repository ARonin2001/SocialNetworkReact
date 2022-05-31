import React from "react";

import UserItemLanguage from "./UserItemLanguage/UserItemLanguage";

import './UserItemLanguages.css';

const UserItemLanguages = ({languages}) => {
    let allLanguages = [...languages.native, ...languages.fluent, ...languages.learning];
    let sameLanguages = [];
    // убираем дубликаты языков
    allLanguages = allLanguages.filter((item, key) => {
        if(!sameLanguages.includes(item.name) && key < 7) {
            sameLanguages.push(item.name);
            return item;
        }
    });

    return (
        <div className="user__languages">
            {
                allLanguages.map((lng, key) => <UserItemLanguage key={key} language={lng.name} />)
            }
        </div>
    );
};

export default UserItemLanguages;