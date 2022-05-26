import React, {useEffect} from 'react';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { setProfileData } from '../../../redux/reducers/profileReducer';

const ProfileContainer = (props) => {
    const params = useParams();
    const userId = params.id;

    useEffect(() => {
        if(userId) {
            props.setProfileData(userId);
        }
    }, [userId]);

    return (
        <>
            <Profile profile={props.profile} />
        </>
    );
};

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(
    mapStateToProps,
    {setProfileData}
)
(ProfileContainer);