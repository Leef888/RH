import NavBar from './NavBar';
import {connect} from 'react-redux';
import {
    displayHomeActionCreator,
    displayAuthActionCreator,
    displayPageOneActionCreator,
    displayPageTwoActionCreator,
    displayContactsActionCreator
} from '../redux/reducer';

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        displayHome: () => {
            dispatch(displayHomeActionCreator())
        },
        displayAuth: () => {
            dispatch(displayAuthActionCreator())
        },
        displayPageOne: () => {
            dispatch(displayPageOneActionCreator())
        },
        displayPageTwo: () => {
            dispatch(displayPageTwoActionCreator())
        },
        displayContacts: () => {
            dispatch(displayContactsActionCreator())
        }
    }
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;