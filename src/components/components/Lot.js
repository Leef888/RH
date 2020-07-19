import React from 'react';
import './Lot.css';
import Image1 from './components/Image_1';
import Image2 from './components/Image_2';
import Image3 from './components/Image_3';
import Image4 from './components/Image_4';
import Description from './components/Description';

function Lot(props) {
    return (
        <div className="Lot">
            <Image1 id={props.id} url={props.p_1} className="i_1" />
            <Image2 id={props.id} url={props.p_2} className="i_2" />
            <Image3 id={props.id} url={props.p_3} className="i_3" />
            <Image4 id={props.id} url={props.p_4} className="i_4" />
            <Description id={props.id} desc={props.desc} className="d" />
            <button onClick={props.deleteButtonClicked}>delete</button>
        </div>
    )
}

export default Lot;