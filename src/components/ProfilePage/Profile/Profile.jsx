import React, {useState} from 'react';

// default IMG
import backDefault from '../../../assets/img/avaBackground.jpg';

//css
import './Profile.css';

// components
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileTop from './ProfileTop/ProfileTop';
import ProfileBottom from './ProfileBottom/ProfileBottom';
import UserLngContainer from '../../UserLng/UserLngContainer';
// import AddingLanguageContainer from '../../UserLng/AddingLanguage/AddingLanguageContainer';
import withPageDimming from '../../HOC/withPageDimming/withPageDimming';
import AvaUploadContainer from './User/Ava/AvaUpload/AvaUploadContainer';
const AddingLanguageContainer = React.lazy(() => import('../../UserLng/AddingLanguage/AddingLanguageContainer'));

const Profile = ({profile, ...props}) => {

    let [isLanguagesBlock, setLanguagesBlock] = useState(false);
    let [isStatusEdit, setStatusEdit] = useState(false);
    let [isShowUploadAva, setShowUploadAva] = useState(false);
    let [isAddLng, setAddLng] = useState(false);

    // user languages block
    const openLanguagesBlock = () => setLanguagesBlock(true);
    const closeLanguagesBlock = () => setLanguagesBlock(false);

    const closeAddLanguage = () => {
        setAddLng(false);  
    } 

    // status block
    const openStatusEdit = () => setStatusEdit(true);
    const closeStatusEdit = () => setStatusEdit(false);

    // ava img block
    const closeUploadAva = () => {
        if(isShowUploadAva)
            setShowUploadAva(false);
    }
    const showUploadAva = () => {
        if(!isShowUploadAva)
            setShowUploadAva(true);
    }

    const onClickBackgroundCoverage  = () => {
        closeLanguagesBlock();
        closeStatusEdit();
        closeUploadAva();
        closeAddLanguage();
    }

    const AddingLng = withPageDimming(AddingLanguageContainer, closeAddLanguage);
    const AvaUploadPageDimming = withPageDimming(AvaUploadContainer, closeUploadAva);
    const UserLngPageDimming = withPageDimming(UserLngContainer, closeLanguagesBlock);

    return (
        <div className="profile main__profile">
            <div className="profile__container">
                <div className="background__coverage" onClick={onClickBackgroundCoverage}></div>
                <ProfileTop languages={profile.languages} openLanguagesBlock={openLanguagesBlock} />
                <ProfileBottom openStatusEdit={openStatusEdit} 
                    closeStatusEdit={closeStatusEdit}
                    isStatusEdit={isStatusEdit} 
                    showUploadAva={showUploadAva} 
                    name={props.aboutMe.name}
                    lastName={props.aboutMe.lastName}
                    avaImg={props.avaImg}
                    status={profile.aboutMe.status}
                    friends={props.friends}
                    userId={props.userId}
                    addFriend={props.addFriend}
                    deleteFriend={props.deleteFriend} 

                    closeUploadAva={closeUploadAva}

                    />

                {/* user languages */}
                {
                    isLanguagesBlock && 
                        <UserLngPageDimming languages={profile.languages} />
                }
                {
                    isShowUploadAva && 
                        <AvaUploadPageDimming closeUploadAva={closeUploadAva} />
                }
                {
                    isAddLng && 
                        <AddingLng />
                }
            </div>

            <ProfileBackground backgroundIMG={backDefault}  />
        </div>
    );
};

export default Profile;