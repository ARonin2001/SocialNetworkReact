import React from "react";
import { connect } from "react-redux";
import AsideRitght from './AsideRitght';

const AsideRitghtContainer = (props) => {
    return (
        <AsideRitght isAuth={props.isAuth}
            friendsCount={props.friendsCount} />
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        friendsCount: state.auth.friends.length,
    }
}

export default connect(
    mapStateToProps,
    null
)
(AsideRitghtContainer);