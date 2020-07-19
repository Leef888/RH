import PageTwo from './PageTwo';
import {connect} from 'react-redux';
import {
    imageOneOnPageTwoSelectedActionCreator,
    imageTwoOnPageTwoSelectedActionCreator,
    imageThreeOnPageTwoSelectedActionCreator,
    imageFourOnPageTwoSelectedActionCreator,
    inputOnPageTwoChangedActionCreator,
    addLotOnPageTwoActionCreator
} from '../redux/reducer';

let mapStateToProps = (state) => {
    return {
        lotOnPageTwoData: state.state.lotOnPageTwoData,
        pageTwoData: state.state.pageTwoData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        imageOneOnPageTwoSelected: (e) => {
            dispatch(imageOneOnPageTwoSelectedActionCreator(e))
        },
        imageTwoOnPageTwoSelected: (e) => {
            dispatch(imageTwoOnPageTwoSelectedActionCreator(e))
        },
        imageThreeOnPageTwoSelected: (e) => {
            dispatch(imageThreeOnPageTwoSelectedActionCreator(e))
        },
        imageFourOnPageTwoSelected: (e) => {
            dispatch(imageFourOnPageTwoSelectedActionCreator(e))
        },
        inputOnPageTwoChanged: (e) => {
            dispatch(inputOnPageTwoChangedActionCreator(e))
        },
        addLotOnPageTwo: () => {
            dispatch(addLotOnPageTwoActionCreator())
        }
    }
}

const PageTwoContainer = connect(mapStateToProps, mapDispatchToProps)(PageTwo);

export default PageTwoContainer;