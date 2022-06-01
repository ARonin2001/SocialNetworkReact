import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

const HeaderContainer = (props) => {
    let fullName = "Your name";

    if(props.isAuth) {
        fullName = `${props.name} ${props.lastName}`;
        fullName = fullName.substring(0, 10) + "...";
    }
    

    return (
        <Header isAuth={props.isAuth}
            fullName={fullName} 
            ava={props.ava} />
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        name: state.auth.aboutMe.name,
        lastName: state.auth.aboutMe.lastName,
        ava: state.auth.img.ava,
    }
}

export default connect(
    mapStateToProps,
    null
)
(HeaderContainer);