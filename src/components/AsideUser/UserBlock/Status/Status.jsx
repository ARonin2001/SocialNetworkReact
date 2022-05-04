import React from "react";

import './Status.css';

const Status = ({status}) => {
    return (
        <div className="user-mini__status">
            {status}
        </div>
    );
};

export default Status;