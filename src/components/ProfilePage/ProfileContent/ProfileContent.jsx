import React, {useEffect, useState} from "react";
import Filter from "../../Filter/Filter";
import PostWriter from "../../Posts/PostWriter/PostWriter";

import { faCircleUser, faGears, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './ProfileContent.css';

import AboutMe from "./AboutMe/AboutMe";
import Post from "../../Posts/Post/Post";
import UserLngContainer from '../../UserLng/UserLngContainer';

const ProfileContent = (props) => {
    let [activeItem, setActiveItem] = useState(null);

    // установить элемент по инедксу выбранному в блоке filter
    const setActiveFilterItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="profile__content">
            <PostWriter />
            <Filter values={["about me", "languages", "settings"]} icons={[faCircleUser, faGlobe, faGears]} method={setActiveFilterItem} />
            {
                [
                    <AboutMe aboutMe={props.profile.aboutMe} />,
                    <UserLngContainer languages={props.profile.languages} />
                ].filter((item, i) => i === activeItem)
            }
            
            <Post />         
        </div>
    )
};

export default ProfileContent;