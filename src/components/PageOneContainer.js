import PageOne from './PageOne';
import {connect} from 'react-redux';
import {
    imageOneOnPageOneSelectedActionCreator,
    imageTwoOnPageOneSelectedActionCreator,
    imageThreeOnPageOneSelectedActionCreator,
    imageFourOnPageOneSelectedActionCreator,
    inputOnPageOneChangedActionCreator,
    addLotOnPageOneThunkCreator,
    resetLotDataOnPageOneActionCreator, setCurrentPageOnPageOneActionCreator, getLotsOnPageOneThunkCreator
} from '../redux/reducer';

let mapStateToProps = (state, ownProps) => {
    return {
        currentPageOnPageOne: state.state.currentPageOnPageOne,
        pageSize: state.state.pageSize,
        totalCountOnPageOne: state.state.totalCountOnPageOne,
        isAuth: state.state.isAuth,
        lotOnPageOneData: state.state.lotOnPageOneData,
        pageOneData: state.state.pageOneData,
        content: state.state.content[0],
        cookies: ownProps.cookies,
        isFetching: state.state.isFetching
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        imageOneOnPageOneSelected: (e) => {
            dispatch(imageOneOnPageOneSelectedActionCreator(e));
            e.target.value = null
        },
        imageTwoOnPageOneSelected: (e) => {
            dispatch(imageTwoOnPageOneSelectedActionCreator(e));
            e.target.value = null;
        },
        imageThreeOnPageOneSelected: (e) => {
            dispatch(imageThreeOnPageOneSelectedActionCreator(e));
            e.target.value = null;
        },
        imageFourOnPageOneSelected: (e) => {
            dispatch(imageFourOnPageOneSelectedActionCreator(e));
            e.target.value = null;
        },
        inputOnPageOneChanged: (e) => {
            dispatch(inputOnPageOneChangedActionCreator(e))
        },
        resetLotDataOnPageOne: () => {
            dispatch(resetLotDataOnPageOneActionCreator())
        },
        addLotOnPageOne: (state, cookies) => {
            dispatch(addLotOnPageOneThunkCreator(state, cookies))
        },
        setCurrentPageOnPageOne: (pageNumber, pageSize) => {
            dispatch(getLotsOnPageOneThunkCreator(pageNumber, pageSize));
            dispatch(setCurrentPageOnPageOneActionCreator(pageNumber))
        }
    }
};

const PageOneContainer = connect(mapStateToProps, mapDispatchToProps)(PageOne);

export default PageOneContainer;