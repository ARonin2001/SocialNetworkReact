import React, { useEffect } from "react";
import { connect } from "react-redux";
import UsersItems from "./UsersItem";
import { setListUsers } from "../../../redux/reducers/usersReducer";

const UsersItemContainer = (props) => {
    useEffect(() => {
        props.setListUsers(20, 1);
    }, []);

    return (
        <UsersItems users={props.users} />
    );
};

const mapStateToProps = state => {
    return {
        users: state.usersPage.users
    }
}

export default connect(
    mapStateToProps,
    {setListUsers}
)
(UsersItemContainer);