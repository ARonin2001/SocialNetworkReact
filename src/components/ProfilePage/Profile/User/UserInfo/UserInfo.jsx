import React, {useState} from "react";

import './UserInfo.css';
import UserStatus from "./UserStatus/UserStatus";
import InputStatusContainer from './UserStatus/InputStatus/InputStatusContainer';

const UserInfo = ({name, status, ...props}) => {
    return (
        <>
            {
                props.isStatusEdit && 
                    <InputStatusContainer />
            }
            {
                !props.isStatusEdit && 
                    <div className="user__info">
                        <div className="user__name">
                            {name}
                        </div>
                        <UserStatus status={status} openStatusEdit={props.openStatusEdit} />
                    </div>
            }
        </>
        
    );
};

export default UserInfo;