import React from 'react';
import './StLots.css';
import LotContainer from './components/LotContainer';
import preloader from '../assets/preloader.svg';
import Paginator from "./components/Paginator";

function PageOne(props) {

    let lotsArea = props.pageOneData.map((lotData) => <LotContainer key={lotData._id}
                                                                    id={lotData._id}
                                                                    p_1={lotData.p_1}
                                                                    p_2={lotData.p_2}
                                                                    p_3={lotData.p_3}
                                                                    p_4={lotData.p_4}
                                                                    desc={lotData.desc}
                                                                    dispatch={props.dispatch}
                                                                    content={props.content}
                                                                    cookies={props.cookies}
                                                                    isAuth={props.isAuth}
    />);
    let inputValueOnPageOne = React.createRef();

    return (
        <div className="StLots">
            <div className="intro">Intro</div>
            {props.isAuth ? <div>
                <div className="lotForm">
                    <input className="selectedImage_1" name='stLotImage' type="file"
                           onChange={props.imageOneOnPageOneSelected}/><img className="selectedImage_1"
                                                                            src={props.lotOnPageOneData.imageOneURL}
                                                                            alt='imageOne'/>
                    <input className="selectedImage_2" name='stLotImage' type="file"
                           onChange={props.imageTwoOnPageOneSelected}/><img className="selectedImage_2"
                                                                            src={props.lotOnPageOneData.imageTwoURL}
                                                                            alt='imageTwo'/>
                    <input className="selectedImage_3" name='stLotImage' type="file"
                           onChange={props.imageThreeOnPageOneSelected}/><img className="selectedImage_3"
                                                                              src={props.lotOnPageOneData.imageThreeURL}
                                                                              alt='imageThree'/>
                    <input className="selectedImage_4" name='stLotImage' type="file"
                           onChange={props.imageFourOnPageOneSelected}/><img className="selectedImage_4"
                                                                             src={props.lotOnPageOneData.imageFourURL}
                                                                             alt='imageFour'/>
                    <textarea ref={inputValueOnPageOne} className="descriptionForm" name="desc"
                              onChange={props.inputOnPageOneChanged} value={props.lotOnPageOneData.desc}></textarea>
                </div>
                <div className="butonsDiv">
                    <button onClick={props.resetLotDataOnPageOne}>reset</button>
                </div>
                <div className="butonsDiv">
                    <button onClick={() => {
                        props.addLotOnPageOne(props.state, props.cookies)
                    }}>Add lot
                    </button>
                </div>
            </div> : null}
            <div className="intro">Intro</div>
            <Paginator
                setCurrentPage={props.setCurrentPageOnPageOne}
                totalCount={props.totalCountOnPageOne}
                pageSize={props.pageSize}
                currentPage={props.currentPageOnPageOne}
            />
            <div className="intro">Intro</div>
            {props.isFetching ?
                <div>
                    <img src={preloader} alt="" />
                </div> : lotsArea}
            <div className="">end</div>
        </div>
    )
}

export default PageOne;