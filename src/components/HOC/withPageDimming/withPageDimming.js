import React from "react";

import './withPageDimming.css';

let withPageDimming = (Component, closePageDimming) => {
    let darkPageComponent = (props) => {
        return (
            <div className="dark-page">
                <div className="dark-page__back" onClick={closePageDimming}></div>
                <div className="dark-page__component">
                    <Component {...props} />
                </div>
            </div>
        )
    }

    return darkPageComponent;
}

export default withPageDimming;