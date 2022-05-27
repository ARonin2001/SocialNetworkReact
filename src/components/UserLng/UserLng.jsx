import React, {useState} from "react";

import UserLanguages from "./UserLanguages/UserLanguages";

import AddingLanguageContainer from '../UserLng/AddingLanguage/AddingLanguageContainer';
import './UserLng.css';
import withPageDimming from './../HOC/withPageDimming/withPageDimming';

const UserLng = (props) => {

    let [typeLng, setTypeLng] = useState(null);
    let [isLevel, setLevel] = useState(false);
    let [isAddLng, setIsAddLng] = useState(false);

    const openAddLanguage = (typeLng, level) => {
        setTypeLng(typeLng);
        setLevel(level);
        setIsAddLng(true);
    }
    const closeAddLanguages = () => {
        setIsAddLng(false);
    }

    const AddingLanguageWithPageDimming = withPageDimming(AddingLanguageContainer, closeAddLanguages);

    return (
        <div className="user-lng block">
            {
                isAddLng &&
                    <AddingLanguageWithPageDimming typeLng={typeLng} isLevel={isLevel} />
            }
            <div className="user-lng__container">
                <div className="user-lng__header">
                    <h2 className="user-lng__title title">
                        Languages
                    </h2>
                </div>

                <div className="line"></div>
                {/* items */}
                <UserLanguages languages={props.languages}
                    openAddLanguage={openAddLanguage} />
            </div>
        </div>
    );
};

export default UserLng;