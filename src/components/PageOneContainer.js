import PageOne from './PageOne';
import {connect} from 'react-redux';
import {
    imageOneOnPageOneSelectedActionCreator,
    imageTwoOnPageOneSelectedActionCreator,
    imageThreeOnPageOneSelectedActionCreator,
    imageFourOnPageOneSelectedActionCreator,
    inputOnPageOneChangedActionCreator,
    addLotOnPageOneActionCreator
} from '../redux/reducer';

let mapStateToProps = (state) => {
    return {
        lotOnPageOneData: state.state.lotOnPageOneData,
        pageOneData: state.state.pageOneData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        imageOneOnPageOneSelected: (e) => {
            dispatch(imageOneOnPageOneSelectedActionCreator(e))
        },
        imageTwoOnPageOneSelected: (e) => {
            dispatch(imageTwoOnPageOneSelectedActionCreator(e))
        },
        imageThreeOnPageOneSelected: (e) => {
            dispatch(imageThreeOnPageOneSelectedActionCreator(e))
        },
        imageFourOnPageOneSelected: (e) => {
            dispatch(imageFourOnPageOneSelectedActionCreator(e))
        },
        inputOnPageOneChanged: (e) => {
            dispatch(inputOnPageOneChangedActionCreator(e))
        },
        addLotOnPageOne: () => {
            dispatch(addLotOnPageOneActionCreator())
        }
    }
}

const PageOneContainer = connect(mapStateToProps, mapDispatchToProps)(PageOne);

export default PageOneContainer;