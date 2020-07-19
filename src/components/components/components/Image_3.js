import React from 'react';
import './Image_3.css';

function Image3(props) {
    let src = "http://localhost:3001" + props.url
    return (
        <img src={src} alt='imageThree' className="i_3"></img>
    )
}

export default Image3;