import React, {useState} from "react";
import Filter from "../../Filter/Filter";
import PostWriter from "../../Posts/PostWriter/PostWriter";
import AboutMe from "./AboutMe/AboutMe";

import './ProfileContent.css';
import { faCircleUser, faGears, faGlobe } from '@fortawesome/free-solid-svg-icons';
import UserLng from "../../UserLng/UserLng";
import Post from "../../Posts/Post/Post";

const ProfileContent = (props) => {
    const filterItems = [
        <AboutMe />,
        <UserLng languages={props.profile.languages} />
    ];

    let [activeItem, setActiveItem] = useState(null);

    // установить элемент по инедксу выбранному в блоке filter
    const setActiveFilterItem = (index) => {
        filterItems.map((item, i) => {
            if(index === i)
                setActiveItem(item)
        })
    }

    return (
        <div className="profile__content">
            <PostWriter />
            <Filter values={["about me", "languages", "settings"]} icons={[faCircleUser, faGlobe, faGears]} method={setActiveFilterItem} />
            {
                activeItem
            }   
            <Post />         
        </div>
    )
};

export default ProfileContent;