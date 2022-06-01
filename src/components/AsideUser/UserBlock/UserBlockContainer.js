import React from 'react';
import { connect } from 'react-redux';

import UserBlock from './UserBlock';

const UserBlockContainer = (props) => {
    return (
        <UserBlock userId={props.userId}
            name={props.name}
            lastName={props.lastName}
            img={props.img}
            status={props.status} />
    );
};

const mapStateToProps = state => {
    return {
        userId: state.auth._id,
        name: state.auth.aboutMe.name,
        lastName: state.auth.aboutMe.lastName,
        img: state.auth.img,
        status: state.auth.aboutMe.status,
    }
}

export default connect(
    mapStateToProps,
    null
)
(UserBlockContainer);