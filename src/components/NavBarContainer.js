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
        isAuth: state.state.isAuth,
        currentPageOnPageOne: state.state.currentPageOnPageOne,
        currentPageOnPageTwo: state.state.currentPageOnPageTwo,
        pageSize: state.state.pageSize
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
        displayPageOne: (currentPageOnPageOne, pageSize) => {
            dispatch(displayPageOneActionCreator());
            dispatch(getLotsOnPageOneThunkCreator(currentPageOnPageOne, pageSize))
        },
        displayPageTwo: (currentPageOnPageTwo, pageSize) => {
            dispatch(displayPageTwoActionCreator());
            dispatch(getLotsOnPageTwoThunkCreator(currentPageOnPageTwo, pageSize))
        },
        displayContacts: () => {
            dispatch(displayContactsActionCreator())
        }
    }
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;