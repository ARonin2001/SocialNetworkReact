import React, {useState} from 'react';

// default IMG
import backDefault from '../../../assets/img/avaBackground.jpg';

//css
import './Profile.css';

// components
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileTop from './ProfileTop/ProfileTop';
import ProfileBottom from './ProfileBottom/ProfileBottom';
import UserLng from '../../UserLng/UserLng';
import AddingLanguageContainer from '../../UserLng/AddingLanguage/AddingLanguageContainer';
import withPageDimming from '../../HOC/withPageDimming/withPageDimming';
import AvaUploadContainer from './User/Ava/AvaUpload/AvaUploadContainer';

const Profile = ({profile}) => {

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
    const UserLngPageDimming = withPageDimming(UserLng, closeLanguagesBlock);

    return (
        <div className="profile main__profile">
            <div className="profile__container">
                <div className="background__coverage" onClick={onClickBackgroundCoverage}></div>
                <ProfileTop languages={profile.languages} openLanguagesBlock={openLanguagesBlock} />
                <ProfileBottom openStatusEdit={openStatusEdit} isStatusEdit={isStatusEdit} 
                    showUploadAva={showUploadAva} 
                    name={profile.aboutMe.name}
                    lastName={profile.aboutMe.lastName}
                    avaImg={profile.img.ava}
                    status={profile.aboutMe.status}
                    />

                {/* user languages */}
                {
                    isLanguagesBlock && 
                        <UserLngPageDimming languages={profile.languages} />
                }
                {
                    isShowUploadAva && 
                        <AvaUploadPageDimming />
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