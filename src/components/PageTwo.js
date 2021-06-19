import React from 'react';
import './pageTwo.css';
import LotContainer from './components/LotContainer';
import Paginator from "./components/Paginator";
import preloader from "../assets/preloader.svg";

function PageTwo(props) {

    let lotsArea = props.pageTwoData.map((lotData) => <LotContainer key={lotData._id}
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
    let inputValueOnPageTwo = React.createRef();

    return (
        <div className="DetLots">
            {props.isAuth ? <div>
                <div className="lotForm">
                    <input className="selectedImage_1" name='detLotImage' type="file"
                           onChange={props.imageOneOnPageTwoSelected}/><img className="selectedImage_1"
                                                                            src={props.lotOnPageTwoData.imageOneURL}
                                                                            alt='imageOne'/>
                    <input className="selectedImage_2" name='detLotImage' type="file"
                           onChange={props.imageTwoOnPageTwoSelected}/><img className="selectedImage_2"
                                                                            src={props.lotOnPageTwoData.imageTwoURL}
                                                                            alt='imageTwo'/>
                    <input className="selectedImage_3" name='detLotImage' type="file"
                           onChange={props.imageThreeOnPageTwoSelected}/><img className="selectedImage_3"
                                                                              src={props.lotOnPageTwoData.imageThreeURL}
                                                                              alt='imageThree'/>
                    <input className="selectedImage_4" name='detLotImage' type="file"
                           onChange={props.imageFourOnPageTwoSelected}/><img className="selectedImage_4"
                                                                             src={props.lotOnPageTwoData.imageFourURL}
                                                                             alt='imageFour'/>
                    <textarea ref={inputValueOnPageTwo} className="descriptionForm" name="desc"
                              onChange={props.inputOnPageTwoChanged} placeholder="Description field"
                              value={props.lotOnPageTwoData.desc}></textarea>
                </div>
                <div className="butonsDiv">
                    <button onClick={props.resetLotDataOnPageTwo}>reset</button>
                </div>
                <div className="butonsDiv">
                    <button onClick={() => {
                        props.addLotOnPageTwo(props.state, props.cookies)
                    }}>Add lot
                    </button>
                </div>
            </div> : null}
            <div className="intro">Intro</div>
            <Paginator
                setCurrentPage={props.setCurrentPageOnPageTwo}
                totalCount={props.totalCountOnPageTwo}
                pageSize={props.pageSize}
                currentPage={props.currentPageOnPageTwo}
            />
            {props.isFetching ?
                <div>
                    <img src={preloader} alt="" />
                </div> : lotsArea}
            <div className="">end</div>
        </div>
    )
}

export default PageTwo;