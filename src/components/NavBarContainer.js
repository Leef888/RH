import NavBar from './NavBar';
import {connect} from 'react-redux';
import {
    displayHomeActionCreator,
    logoutActionCreator,
    displayPageOneActionCreator,
    displayPageTwoActionCreator,
    displayContactsActionCreator,
    getLotsOnPageOneThunkCreator,
    getLotsOnPageTwoThunkCreator
} from '../redux/reducer';

let mapStateToProps = (state) => {
    return {
        isAuth: state.state.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        displayHome: () => {
            dispatch(displayHomeActionCreator())
        },
        logout: () => {
            dispatch(logoutActionCreator())
        },
        displayPageOne: () => {
            dispatch(displayPageOneActionCreator());
            dispatch(getLotsOnPageOneThunkCreator())
        },
        displayPageTwo: () => {
            dispatch(displayPageTwoActionCreator());
            dispatch(getLotsOnPageTwoThunkCreator())
        },
        displayContacts: () => {
            dispatch(displayContactsActionCreator())
        }
    }
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;