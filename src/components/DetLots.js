import React from 'react';
import './DetLots.css';
import Lot from './components/Lot';

function DetLots(props) {

    let lotArea = props.detLotsData.map ((lotInfo) => <Lot name={lotInfo.name} id={lotInfo.id} />);

    return (
        <div className="DetLots">
            <div className="intro">Intro</div>
            <div className="butonsDiv">
                <button onClick={props.addDetLot}>Add lot</button>
            </div>
            {lotArea}
            <div className="">end</div>
        </div>
    )
}

export default DetLots;