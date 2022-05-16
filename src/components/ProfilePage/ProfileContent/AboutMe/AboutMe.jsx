import React from "react";

import UserInfo from './UserInfo/UserInfo';

import './AboutMe.css';

const AboutMe = (props) => {
    return (
        <div className="about-me block content__about-me">
            <div className="about-me__container p-13">
                <h2 className="about-me__title title">About me</h2>
                <div className="line"></div>
                <UserInfo title={"Name"} text={"Mister Bin"} />
                <UserInfo title={"Gender"} text={"Ламинат"} />
                <UserInfo title={"Description"} text={"Люблю читать книги"} />
                <UserInfo title={"Hobbs"} text={"Книги, программирование, спорт (workout), наслаждение природой и т.д."} />
            </div>
        </div>
    )
};

export default AboutMe;