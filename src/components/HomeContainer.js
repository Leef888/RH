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
    return {
        currentPageOnPageOne: state.state.currentPageOnPageOne,
        currentPageOnPageTwo: state.state.currentPageOnPageTwo,
        pageSize: state.state.pageSize
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
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
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;