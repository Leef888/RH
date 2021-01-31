import Lot from './Lot';
import {connect} from 'react-redux';
import {
    deleteLotOnPageOneThunkCreator,
    deleteLotOnPageTwoThunkCreator
} from '../../redux/reducer';

let mapStateToProps = (state, ownProps) => {
    return {
        content: state.state.content[0],
        id: ownProps.id,
        p_1: ownProps.p_1,
        p_2: ownProps.p_2,
        p_3: ownProps.p_3,
        p_4: ownProps.p_4,
        desc: ownProps.desc,
        cookies: ownProps.cookies,
        isAuth: ownProps.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteButtonClicked: (id, content, cookies) => {
            if (content === "PageOne") {
                dispatch(deleteLotOnPageOneThunkCreator(id, cookies))
            } else if (content === "PageTwo") {
                dispatch(deleteLotOnPageTwoThunkCreator(id, cookies))
            }
        }
    }
};

const LotContainer = connect(mapStateToProps, mapDispatchToProps)(Lot);

export default LotContainer;