import React, {useEffect} from 'react';
import Menu from './Menu';
import { faHome, faCircleUser, faUserGroup, faMessage, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';

const MenuContainer = (props) => {
    let subLiMenuData = [
        {id: 1, title: "Home", link: `/profile/${props.userId}`, icon: faHome},
        {id: 2, title: "About me", link: "#", icon: faCircleUser },
        {id: 3, title: "Friends", link: "#", icon: faUserGroup},
        {id: 4, title: "Messages", link: "#", icon: faMessage},
        {id: 5, title: "News", link: "/news", icon: faNewspaper},
    ];

    return (
        <Menu subLi={subLiMenuData} />
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