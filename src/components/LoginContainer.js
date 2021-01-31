import Login from './Login';
import {connect} from 'react-redux';
import {
    emailInputChangedActionCreator,
    passwordInputChangedActionCreator,
    resetInputsOnLoginPageActionCreator,
    loginThunkCreator,
    logoutActionCreator
} from '../redux/reducer';
import { withCookies } from 'react-cookie';

let mapStateToProps = (state, ownProps) => {
    return {
        isAuth: state.state.isAuth,
        email: state.state.authData.email,
        password: state.state.authData.password,
        cookies: ownProps.cookies
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        emailInputChanged: (e) => {
            dispatch(emailInputChangedActionCreator(e))
        },
        passwordInputChanged: (e) => {
            dispatch(passwordInputChangedActionCreator(e))
        },
        resetInputsOnLoginPage: () => {
            dispatch(resetInputsOnLoginPageActionCreator())
        },
        login: (email, password, cookies) => {
            dispatch(loginThunkCreator(email, password, cookies));
            dispatch(resetInputsOnLoginPageActionCreator())
        },
        logout: () => {
            dispatch(logoutActionCreator())
        }
    }
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withCookies(LoginContainer);