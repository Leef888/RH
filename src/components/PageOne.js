import React from 'react';
import './StLots.css';
import LotContainer from './components/LotContainer';

function PageOne(props) {

    let lotsArea = props.pageOneData.map((lotData) => <LotContainer key={lotData._id}
        id={lotData._id}
        p_1={lotData.p_1}
        p_2={lotData.p_2}
        p_3={lotData.p_3}
        p_4={lotData.p_4}
        desc={lotData.desc}
        dispatch={props.dispatch}
    />);

    return (
        
        <div className="StLots">
            <div className="intro">Intro</div>
            <div className="lotForm">
                <input className="selectedImage_1" name='stLotImage' type="file" onChange={props.imageOneOnPageOneSelected}/><img className="selectedImage_1" src={props.lotOnPageOneData.imageOneURL} alt='imageOne' /><br></br>
                <input className="selectedImage_2" name='stLotImage' type="file" onChange={props.imageTwoOnPageOneSelected}/><img className="selectedImage_2" src={props.lotOnPageOneData.imageTwoURL} alt='imageTwo' /><br></br>
                <input className="selectedImage_3" name='stLotImage' type="file" onChange={props.imageThreeOnPageOneSelected}/><img className="selectedImage_3" src={props.lotOnPageOneData.imageThreeURL} alt='imageThree' /><br></br>
                <input className="selectedImage_4" name='stLotImage' type="file" onChange={props.imageFourOnPageOneSelected}/><img className="selectedImage_4" src={props.lotOnPageOneData.imageFourURL} alt='imageFour' /><br></br>
                <textarea className="descriptionForm" name="desc" onChange={props.inputOnPageOneChanged} ></textarea><br></br>
            </div>
            <div className="butonsDiv">
                <button onClick={props.addLotOnPageOne}>Add lot</button>
            </div>
            {lotsArea}
            <div className="">end</div>
        </div>
    )
}

export default PageOne;