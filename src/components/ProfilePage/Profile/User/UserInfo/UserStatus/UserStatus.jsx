import React from 'react';
import { connect } from 'react-redux';

import './UserStatus.css';

const UserStatus = ({status, openStatusEdit}) => {
    return (
        <div className="user__status" onDoubleClick={openStatusEdit}>
            {status ? status : "Status"}
        </div>
    );
};

let mapStateToProps = state => {
    return {
        // status: state.profilePage.profile.aboutMe.status
        status: state.auth.aboutMe.status
    }
}

export default connect(
    mapStateToProps,
    {}
)
(UserStatus);