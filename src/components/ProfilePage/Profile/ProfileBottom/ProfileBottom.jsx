import React from "react";
import { useParams } from 'react-router-dom';

import User from "../User/User";
import ProfileBtn from "../ProfileBtn/ProfileBtn";

// icons
import { faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faCameraRotate } from '@fortawesome/free-solid-svg-icons';

import './ProfileBottom.css';

const ProfileBottom = (props) => {
    const params = useParams();
    const profileId = params.id;

    let friendsId = props.friends.map(u => u.id);

    return (
        <div className="profile__bottom">
            <User
                avaIMG={props.avaImg}
                name={props.name}
                lastName={props.lastName}
                status={""}
                openStatusEdit={props.openStatusEdit} 
                isStatusEdit={props.isStatusEdit}
                showUploadAva={props.showUploadAva} />

            <div className="profile__buttons">
                {
                    props.userId !== profileId &&
                    <>
                        {
                            !friendsId.includes(profileId) &&
                                <ProfileBtn btnText={"Add to friend"} 
                                    icon={faUserPlus} 
                                    action={"add"}
                                    clickMethod={props.addFriend} />
                        }
                        
                        {
                            friendsId.includes(profileId) &&
                                <ProfileBtn btnText={"delete friend"} 
                                    icon={faUserMinus} 
                                    action={"delete"}
                                    clickMethod={props.deleteFriend} />
                        }
                        
                    </>
                }
                
                <ProfileBtn btnText={"Upload back img"} icon={faCameraRotate} />
            </div>
        </div>
    );
};

export default ProfileBottom;