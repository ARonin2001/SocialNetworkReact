import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';

import { setMyFriends } from "../../../redux/reducers/usersReducer";
import { useEffect } from 'react';

const FriendsContainer = (props) => {

    const getMyFriends = () => {
        if(props.userId) {
            props.setMyFriends(props.userId);
        }
    };

    useEffect(() => {
        getMyFriends();
    }, []);

    return (
        <Friends users={props.users} friends={props.friends} />
    );
};

const mapStateToProps = state => {
    return {
        userId: state.auth._id,
        users: state.usersPage.users,
        friends: state.auth.friends,
    }
}

export default connect(
    mapStateToProps,
    {setMyFriends}
)
(FriendsContainer);