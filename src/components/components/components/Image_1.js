import React from 'react';
import './Image_1.css';

function Image1(props) {
    let src = "http://localhost:3001" + props.url
    return (
        // <div className="i_1">Image_1</div>

        <img src={src} alt='imageOne' className="i_1"></img>
    )
}

export default Image1;