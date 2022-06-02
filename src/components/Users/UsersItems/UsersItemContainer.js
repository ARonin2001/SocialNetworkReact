import React, { useEffect } from "react";
import { connect } from "react-redux";
import UsersItems from "./UsersItem";
import { setListUsers } from "../../../redux/reducers/usersReducer";
import { addNewFriend, deleteFriend } from "../../../redux/reducers/authReducer";

const UsersItemContainer = (props) => {
    useEffect(() => {
        props.setListUsers(20, 1);
    }, []);

    const addFriend = async (friendId) => {
        if(props.isAuth && friendId) {
            await props.addNewFriend(friendId, props.userId);
        }
    }

    const deleteFriend = async (friendId) => {
        if(props.isAuth && friendId) {
            await props.deleteFriend(friendId, props.userId);
        }
    }

    return (
        <UsersItems isAuth={props.isAuth}
            userId={props.userId}
            users={props.users} 
            addFriend={addFriend} 
            deleteFriend={deleteFriend} 
            friends={props.friends} />
        
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth._id,
        users: state.usersPage.users,
        friends: state.auth.friends,
    }
}

export default connect(
    mapStateToProps,
    {setListUsers, addNewFriend, deleteFriend}
)
(UsersItemContainer);