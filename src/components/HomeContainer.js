import Home from './Home';
import {connect} from 'react-redux';
import {
    displayPageOneActionCreator,
    displayPageTwoActionCreator,
    displayContactsActionCreator,
    getLotsOnPageOneThunkCreator,
    getLotsOnPageTwoThunkCreator
} from '../redux/reducer';

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        displayPageOne: () => {
            dispatch(displayPageOneActionCreator())
            dispatch(getLotsOnPageOneThunkCreator())
        },
        displayPageTwo: () => {
            dispatch(displayPageTwoActionCreator())
            dispatch(getLotsOnPageTwoThunkCreator())
        },
        displayContacts: () => {
            dispatch(displayContactsActionCreator())
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;