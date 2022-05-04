import React from "react";


import './AsideUser.css';
import Menu from "./Menu/Menu";
import UserBlock from "./UserBlock/UserBlock";

const AsideUser = (props) => {
    return (
        <aside className="aside-left aside-user aside-user_left">
            <div className="aside-user__container __container-aside_left">
                <UserBlock />

                <Menu />
            </div>
        </aside>
    );
};

export default AsideUser;