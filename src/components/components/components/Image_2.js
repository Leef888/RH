import React from 'react';
import './Image_2.css';

function Image2(props) {
    let src = "http://localhost:3001" + props.url
    return (
        <img src={src} alt='imageTwo' className="i_2"></img>
    )
}

export default Image2;