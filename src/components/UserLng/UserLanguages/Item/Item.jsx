import React from "react";

import { faBullseye, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Item.css';
import LanguageBtn from "../../../LanguageBtn/LanguageBtn";
import LanguageLevelBtn from "../../../LanguageLevelBtn/LanguageLevelBtn";

const Item = ({title, languages, isLevel=faBullseye}) => {
    return (
        <div className="user-lng__item">
            <div className="user-lng__sub-title">
                {title}
                <FontAwesomeIcon icon={faSquarePlus} className={"user-lng__item-icon"} />
            </div>
            <div class="user-lng__language-items">
                {
                    languages.map(language => {
                        if(isLevel)
                            return <LanguageBtn 
                                key={language.id} 
                                classes={"user-lng__language"} 
                                language={language.lng} />
                                
                        return <LanguageLevelBtn 
                                language={language.lng}
                                level={language.level} />
                    })
                }
            </div>
        </div>
    );
};

export default Item;