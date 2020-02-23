import React from 'react';
import './StLots.css';
import Lot from './components/Lot';

function StLots(props) {

    let lotArea = props.stLotsData.map ((lotInfo) => <Lot name={lotInfo.name} id={lotInfo.id} />);

    return (
        <div className="StLots">
            <div>Intro</div>
            <div className="butonsDiv">
                <button onCklik={props.addStLot} value="">Add lot</button>
            </div>
            {lotArea}
            <div className="">end</div>
        </div>
    )
}

export default StLots;