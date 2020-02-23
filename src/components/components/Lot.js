import React from 'react';
import './Lot.css';
import Image1 from './components/Image_1';
import Image2 from './components/Image_2';
import Image3 from './components/Image_3';
import Image4 from './components/Image_4';
import Description from './components/Description';

function Lot() {
    return (
        <div className="Lot">
            <Image1 className="i_1" />
            <Image2 className="i_2" />
            <Image3 className="i_3" />
            <Image4 className="i_4" />
            <Description className="d" />
        </div>
    )
}

export default Lot;