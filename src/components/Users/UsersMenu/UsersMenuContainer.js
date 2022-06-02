import React from "react";
import { connect } from "react-redux";
import UsersMenu from "./UsersMenu";
import { setListUsers, setMyFriends } from "../../../redux/reducers/usersReducer";

const UsersMenuContainer = (props) => {
    const setAllUsers = async () => {
        await props.setListUsers(20, 1);
    }
    const getMyFriends = () => {
        if(props.userId) {
            props.setMyFriends(props.userId);
        }
    };

    return (
        <UsersMenu setAllUsers={setAllUsers} getMyFriends={getMyFriends} 
            friendsCount={props.friendsCount}
            isAuth={props.isAuth} />
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth._id,
        friendsCount: state.auth.friends.length,
    }
}

export default connect(
    mapStateToProps,
    {setListUsers, setMyFriends}
)
(UsersMenuContainer);