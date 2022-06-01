import React from "react";

import MenuContainer from "./Menu/MenuContainer";
import UserBlockContainer from "./UserBlock/UserBlockContainer";

import './AsideUser.css';


const AsideUser = (props) => {
    return (
        <aside className="aside-left aside-user aside-user_left">
            <div className="aside-user__container __container-aside_left">
                {
                    props.isAuth &&
                        <UserBlockContainer />
                }

                <MenuContainer />
            </div>
        </aside>
    );
};

export default AsideUser;