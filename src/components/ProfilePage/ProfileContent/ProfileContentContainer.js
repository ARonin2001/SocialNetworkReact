import React from 'react';
import { connect } from 'react-redux';
import ProfileContent from './ProfileContent';

const ProfileContentContainer = (props) => {
    return(
        <ProfileContent profile={props.profile} />
    )
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(
    mapStateToProps,
    null
)
(ProfileContentContainer);