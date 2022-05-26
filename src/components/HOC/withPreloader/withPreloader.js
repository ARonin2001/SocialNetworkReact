import React, { Component } from "react";

import './withPreloader.css';

const withPreloader = (Component) => {
    const preloaderComponent = ({isPreloader, ...props}) => {
        return (
            <div className='preloader__container'>
                <div className={`preloader ${isPreloader ? 'active': ''}`}>
                    
                </div>
                <Component {...props} />
            </div>
        )
    }

    return preloaderComponent;
};

export default withPreloader;