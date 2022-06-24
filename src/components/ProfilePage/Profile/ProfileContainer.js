import React, {useEffect} from 'react';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { setProfileData } from '../../../redux/reducers/profileReducer';
import { addNewFriend, deleteFriend } from './../../../redux/reducers/authReducer';

const ProfileContainer = (props) => {
    const params = useParams();
    const profileId = params.id;

    useEffect(() => {
        if(profileId) {
            props.setProfileData(profileId);
        }
    }, [profileId]);

    const addFriend = async (profileId) => {
        if(props.isAuth && profileId) {
            await props.addNewFriend(profileId, props.userId);
        }
    }

    const deleteFriend = async (profileId) => {
        if(props.isAuth && profileId) {
            await props.deleteFriend(profileId, props.userId);
        }
    }

    return (
        <>
            <Profile profile={props.profile}
                friends={props.friends}
                userId={props.userId}
                addFriend={addFriend}
                deleteFriend={deleteFriend}

                avaImg={props.avaImg}
                aboutMe={props.aboutMe}
                 />
        </>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth._id,
        friends: state.auth.friends,
        profile: state.profilePage.profile,
        avaImg: state.auth.img.ava,
        aboutMe: state.auth.aboutMe,
    }
}

export default connect(
    mapStateToProps,
    {   
        setProfileData, 
        addNewFriend,
        deleteFriend,
    }
)
(ProfileContainer);