import React from 'react';
import './Description.css';

function Description(props) {
    let desc = props.desc;
    return (
        <div className="d">{desc}</div>
    )
}

export default Description;