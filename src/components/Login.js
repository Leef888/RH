import React from 'react';
import './Login.css';

function Login() {    
    return (
        <div className="StLots">
            <div className="intro">Intro</div>
            <div>
                <form action="http://localhost:3001/stLots/" method="post" enctype="multipart/form-data">
                    <input type="reset" value="Reset" /><br></br>
                    <input name='stLotImage' type="file"></input><br></br>
                    <input name='stLotImage' type="file"></input><br></br>
                    <input name='stLotImage' type="file"></input><br></br>
                    <input name='stLotImage' type="file"></input><br></br>
                    <textarea name="desc" ></textarea><br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="">end</div>
        </div>
    )
}

export default Login;