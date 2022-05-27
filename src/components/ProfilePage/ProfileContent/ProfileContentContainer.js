import React from 'react';
import { connect } from 'react-redux';
import ProfileContent from './ProfileContent';

const ProfileContentContainer = (props) => {
    return(
        <ProfileContent languages={props.languages} />
    )
};

const mapStateToProps = state => {
    return {
        languages: state.profilePage.profile.languages
    }
}

export default connect(
    mapStateToProps,
    null
)
(ProfileContentContainer);