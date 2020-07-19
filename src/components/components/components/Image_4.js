import React from 'react';
import './Image_4.css';

function Image4(props) {
    let src = "http://localhost:3001" + props.url
    return (
        <img src={src} alt='imageFour' className="i_4"></img>
    )
}

export default Image4;