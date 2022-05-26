import React from "react";

import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Item.css';
import LanguageBtn from "../../../LanguageBtn/LanguageBtn";
import LanguageLevelBtn from "../../../LanguageLevelBtn/LanguageLevelBtn";

const Item = ({title, languages, ...props}) => {
    let typeLng;
    let isLevel = false;
    if(title.toLowerCase() === "native")
        typeLng = "native";
    else if(title.toLowerCase() === "fluent")
        typeLng = "fluent";
    else {
        typeLng = "learning";
        isLevel = true;
    }

    return (
        <div className="user-lng__item">
            <div className="user-lng__sub-title">
                {title}
                <FontAwesomeIcon icon={faSquarePlus} className={"user-lng__item-icon"} 
                    onClick={() => props.openAddLanguage(typeLng, isLevel)}  />
            </div>
            <div className="user-lng__language-items">
                {
                    languages.map(language => {
                        if(!language.level)
                            return <LanguageBtn 
                                key={language._id} 
                                classes={"user-lng__language"} 
                                language={language.name} />
                                
                        return <LanguageLevelBtn
                                key={language._id} 
                                language={language.name}
                                level={language.level} />
                    })
                }
            </div>
        </div>
    );
};

export default Item;