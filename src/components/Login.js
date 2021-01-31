import React from 'react';
import './Login.css';
import {Redirect} from "react-router-dom";

function Login(props) {
    if (props.isAuth === true) return <Redirect to={"/"}/>;
    return (
        <div className="auth">
            <div className="authForm">
                <div className="email">
                    <input className="input" name='email' type="email"
                                               onChange={props.emailInputChanged}
                                               value={props.email}
                                               placeholder="Email"
                />
                </div>
                <div className="password">
                    <input className="input" name='password' type="password"
                                                  onChange={props.passwordInputChanged}
                                                  value={props.password}
                                                  placeholder="Password"
                />
                </div>
                <div className="loginButton">
                    <button onClick={() => {
                        props.login(props.email, props.password, props.cookies)
                    }}>Login
                    </button>
                </div>
                <div className="resetButton">
                    <button onClick={props.resetInputsOnLoginPage}>Reset</button>
                </div>
                <div className="logoutButton">
                    <button onClick={props.logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Login;