import React, { Suspense, useState } from "react";

import AboutMeContent from './AboutMeContent/AboutMeContent';

import './AboutMe.css';

const AboutMeEditContainer = React.lazy(() => import("./AboutMeEdit/AboutMeEditContainer"));

const AboutMe = ({ aboutMe, ...props }) => {
    let [isEditAboutMe, setEditAboutMe] = useState(false);

    return (
        <div className="about-me block content__about-me">
            <div className="about-me__container p-13">
                <h2 className="about-me__title title">About me</h2>
                <div className="line"></div>
                {
                    isEditAboutMe &&
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutMeEditContainer setEditAboutMe={setEditAboutMe} aboutMe={aboutMe} />
                        </Suspense>
                }
                {
                    !isEditAboutMe &&
                        <>
                            <AboutMeContent aboutMe={aboutMe} />
                            <button className="about-me__btn btn" onClick={() => setEditAboutMe(true)}>EDIT</button>
                        </>
                        
                }
            </div>
        </div>
    )
};

export default AboutMe;