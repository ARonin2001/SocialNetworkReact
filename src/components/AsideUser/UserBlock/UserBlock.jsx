import React from "react";

import './UserBlock.css';
import Status from "./Status/Status";
import AvaBack from "./AvaBack/AvaBack";
import Ava from "./Ava/Ava";

const UserBlock = (props) => {
    return (
        <div className="user-mini aside-user__user-mini block">
            <div className="user-mini__container">
                {/* background img */}
                <AvaBack />

                <div className="user-mini__bottom">
                    {/* user avatar (img and name) */}
                    <Ava userId={props.userId} 
                        name={props.name} lastName={props.lastName} 
                        ava={props.img.ava} />
                    
                    <div className="line"></div>

                    {/* user status */}
                    <Status status={props.status}/>
                </div>
            </div>
        </div>
    );
};

export default UserBlock;