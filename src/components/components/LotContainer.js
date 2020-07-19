import React from 'react';
import Lot from './Lot';
import {
    deleteLotActionCreator
} from '../../redux/reducer';

function LotContainer(props) {
    let deleteButtonClicked = () => {
        props.dispatch(deleteLotActionCreator(props.id))
    }
    return (<Lot
        id={props.id}
        p_1={props.p_1}
        p_2={props.p_2}
        p_3={props.p_3}
        p_4={props.p_4}
        desc={props.desc}
        deleteButtonClicked={deleteButtonClicked}
    />)
}

export default LotContainer;