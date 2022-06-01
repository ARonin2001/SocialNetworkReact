import React from "react";
import { connect } from "react-redux";
import UsersSearch from "./UsersSearch";
import { setUsersByNameOrLastName, setListUsers } from './../../../redux/reducers/usersReducer';


const UsersSearchContainer = (props) => {
    const setUsers = async (name) => {
        await props.setUsersByNameOrLastName(name);
    }

    const setAllUsers = async(name) => {
        await props.setListUsers(20, 1);
    }

    return (
        <UsersSearch setUsers={setUsers} 
            setAllUsers={setAllUsers} />
    )
};

export default connect(
    null,
    { setUsersByNameOrLastName, setListUsers }
)
(UsersSearchContainer);