import React, {useState} from "react";

import './UserInfo.css';
import UserStatus from "./UserStatus/UserStatus";
import InputStatusContainer from './UserStatus/InputStatus/InputStatusContainer';

const UserInfo = ({name, status}) => {
    let [isEditStatus, setEditStatus] = useState(false);

    const OnEditStatus = () => {
        setEditStatus(true);
    }

    return (
        <>
            {
                isEditStatus && 
                    <InputStatusContainer />
            }
            {
                !isEditStatus && 
                    <div className="user__info">
                        <div className="user__name">
                            {name}
                        </div>
                        <UserStatus status={status} OnEditStatus={OnEditStatus} />
                    </div>
            }
        </>
        
    );
};

export default UserInfo;