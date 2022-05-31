import React, {useEffect} from 'react';
import Menu from './Menu';
import { faHome, faCircleUser, faUserGroup, faMessage, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';

const MenuContainer = (props) => {
    let subLiMenuData = [
        {title: "Home", link: `/profile/${props.userId}`, icon: faHome},
        {title: "Friends", link: "/users", icon: faUserGroup},
        {title: "Messages", link: "#", icon: faMessage},
        {title: "News", link: "/news", icon: faNewspaper},
    ];

    return (
        <Menu isAuth={props.isAuth} subLi={subLiMenuData} />
    );
};

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.id,
    }
};

export default connect(
    mapStateToProps,
    {}
)
(MenuContainer);