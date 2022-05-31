import React from "react";
import UserInfo from "../UserInfo/UserInfo";

import './AboutMeContent.css';

const AboutMeContent = ({aboutMe}) => {
    return (
        <div className="about-me__content">
            {
                Object.entries(aboutMe).map(item => {
                    return (
                        <UserInfo title={item[0]} text={item[1]} />
                    )
                })
            }
        </div>
        
    );
};

export default AboutMeContent;