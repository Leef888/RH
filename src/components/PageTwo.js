import React from 'react';
import './DetLots.css';
import LotContainer from './components/LotContainer';

function PageTwo(props) {

    let lotsArea = props.pageTwoData.map((lotData) => <LotContainer key={lotData._id}
        id={lotData._id}
        p_1={lotData.p_1}
        p_2={lotData.p_2}
        p_3={lotData.p_3}
        p_4={lotData.p_4}
        desc={lotData.desc}
        dispatch={props.dispatch}
    />);

    return (
        <div className="DetLots">
            <div className="intro">Intro</div>
            <div className="lotForm">
                <input className="selectedImage_1" name='detLotImage' type="file" onChange={props.imageOneOnPageTwoSelected}/><img className="selectedImage_1" src={props.lotOnPageTwoData.imageOneURL} alt='imageOne' /><br></br>
                <input className="selectedImage_2" name='detLotImage' type="file" onChange={props.imageTwoOnPageTwoSelected}/><img className="selectedImage_2" src={props.lotOnPageTwoData.imageTwoURL} alt='imageTwo' /><br></br>
                <input className="selectedImage_3" name='detLotImage' type="file" onChange={props.imageThreeOnPageTwoSelected}/><img className="selectedImage_3" src={props.lotOnPageTwoData.imageThreeURL} alt='imageThree' /><br></br>
                <input className="selectedImage_4" name='detLotImage' type="file" onChange={props.imageFourOnPageTwoSelected}/><img className="selectedImage_4" src={props.lotOnPageTwoData.imageFourURL} alt='imageFour' /><br></br>
                <textarea className="descriptionForm" name="desc" onChange={props.inputOnPageTwoChanged} ></textarea><br></br>
            </div>
            <div className="butonsDiv">
                <button onClick={props.addLotOnPageTwo}>Add lot</button>
            </div>
            {lotsArea}
            <div className="">end</div>
        </div>
    )
}

export default PageTwo;