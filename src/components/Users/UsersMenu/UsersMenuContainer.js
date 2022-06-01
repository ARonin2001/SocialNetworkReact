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
            props.setMyFriends(userId);
        }

    };

    return (
        <UsersMenu setAllUsers={setAllUsers} getMyFriends={getMyFriends} 
             />
    );
};

const mapStateToProps = state => {
    return {
        userId: state.auth.id,
    }
}

export default connect(
    mapStateToProps,
    {setListUsers, setMyFriends}
)
(UsersMenuContainer);