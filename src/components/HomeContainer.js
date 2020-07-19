import Home from './Home';
import {connect} from 'react-redux';
import {
    displayPageOneActionCreator,
    displayPageTwoActionCreator,
    displayContactsActionCreator
} from '../redux/reducer';

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
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

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;