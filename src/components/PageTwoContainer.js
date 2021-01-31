import PageTwo from './PageTwo';
import {connect} from 'react-redux';
import {
    imageOneOnPageTwoSelectedActionCreator,
    imageTwoOnPageTwoSelectedActionCreator,
    imageThreeOnPageTwoSelectedActionCreator,
    imageFourOnPageTwoSelectedActionCreator,
    inputOnPageTwoChangedActionCreator,
    addLotOnPageTwoThunkCreator, resetLotDataOnPageTwoActionCreator
} from '../redux/reducer';

let mapStateToProps = (state, ownProps) => {
    return {
        isAuth: state.state.isAuth,
        lotOnPageTwoData: state.state.lotOnPageTwoData,
        pageTwoData: state.state.pageTwoData,
        content: state.state.content[0],
        cookies: ownProps.cookies
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        imageOneOnPageTwoSelected: (e) => {
            dispatch(imageOneOnPageTwoSelectedActionCreator(e))
            e.target.value = null
        },
        imageTwoOnPageTwoSelected: (e) => {
            dispatch(imageTwoOnPageTwoSelectedActionCreator(e))
            e.target.value = null
        },
        imageThreeOnPageTwoSelected: (e) => {
            dispatch(imageThreeOnPageTwoSelectedActionCreator(e))
            e.target.value = null
        },
        imageFourOnPageTwoSelected: (e) => {
            dispatch(imageFourOnPageTwoSelectedActionCreator(e))
            e.target.value = null
        },
        inputOnPageTwoChanged: (e) => {
            dispatch(inputOnPageTwoChangedActionCreator(e))
        },
        resetLotDataOnPageTwo: () => {
            dispatch(resetLotDataOnPageTwoActionCreator())
        },
        addLotOnPageTwo: (state, cookies) => {
            dispatch(addLotOnPageTwoThunkCreator(state, cookies))
        }
    }
}

const PageTwoContainer = connect(mapStateToProps, mapDispatchToProps)(PageTwo);

export default PageTwoContainer;