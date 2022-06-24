import React from "react";

import Ava from "./Ava/Ava";
import UserInfo from './UserInfo/UserInfo';

import './User.css';

const User = ({name, avaIMG, status, ...props}) => {
    return (
        <div className="user">
            {/* Отдельная комнонента */}
            <Ava avaIMG={avaIMG}  showUploadAva={props.showUploadAva} />
            {/* name, lastName and status */}
            <UserInfo name={name} lastName={props.lastName} 
                status={status} 
                openStatusEdit={props.openStatusEdit}
                closeStatusEdit={props.closeStatusEdit} 
                isStatusEdit={props.isStatusEdit} />
        </div>
    );
};

export default User;