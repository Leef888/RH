import React from 'react';
import './StLots.css';
import Lot from './components/Lot';

function StLots(props) {

    let lotArea = props.stLotsData.map ((lotInfo) => <Lot name={lotInfo.name} id={lotInfo.id} />);

    return (
        <div className="StLots">
            <div className="intro">Intro</div>
            <div>
                <button onClick={props.addStLot}>Add lot</button>
            </div>
            {lotArea}
            <div className="">end</div>
        </div>
    )
}

export default StLots;