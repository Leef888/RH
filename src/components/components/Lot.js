import React from 'react';
import './Lot.css';
import Image1 from './components/Image_1';
import Image2 from './components/Image_2';
import Image3 from './components/Image_3';
import Image4 from './components/Image_4';
import Description from './components/Description';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


function Lot(props) {
    const p_1 = "http://localhost:3001" + props.p_1;
    const p_2 = "http://localhost:3001" + props.p_2;
    const p_3 = "http://localhost:3001" + props.p_3;
    const p_4 = "http://localhost:3001" + props.p_4;

    const slideImages = [
        p_1,
        p_2,
        p_3,
        p_4
    ];

    const properties = {
        duration: 7000,
        transitionDuration: 700,
        infinite: true,
        indicators: true
    };

    return (
        <div className="Lot">
            <div className="slide-container">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className="dataBlock">
                <div className="images">
                    <Image1 id={props.id} url={props.p_1} className="i_1"/>
                    <Image2 id={props.id} url={props.p_2} className="i_2"/>
                    <Image3 id={props.id} url={props.p_3} className="i_3"/>
                    <Image4 id={props.id} url={props.p_4} className="i_4"/>
                </div>
                <div className="description">
                    <Description id={props.id} desc={props.desc} className="d"/>
                </div>
            </div>
            {props.isAuth ? <button onClick={() => {
                props.deleteButtonClicked(props.id, props.content, props.cookies)
            }}>delete</button> : null}
        </div>
    )
}

export default Lot;