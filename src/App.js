import React from 'react';
import './App.css';
import NavBarContainer from './components/NavBarContainer';
import PageOneContainer from './components/PageOneContainer';
import PageTwoContainer from './components/PageTwoContainer';
import Contacts from './components/Contacts';
import HomeContainer from './components/HomeContainer';
import LoginContainer from './components/LoginContainer';
import { withCookies } from 'react-cookie';

function App(props) {

  let contentArea = props.state.content.map((name) => {
    if ((name) === "PageOne") {
      return <PageOneContainer cookies={props.cookies} key='pageOne' dispatch={props.dispatch} state={props.state} />;
    } else if ((name) === "PageTwo") {
      return <PageTwoContainer cookies={props.cookies} key='pageTwo' dispatch={props.dispatch} state={props.state} />;
    } else if ((name) === "Contacts") {
      return <Contacts key='contacts' />;
    } else if ((name) === "Auth") {
      return <LoginContainer cookies={props.cookies} key='login' />;
    } else {
      return <HomeContainer key='home' dispatch={props.dispatch} />;
    }
  });

  return (
    <div className="app">
      <div className="navBar"><NavBarContainer dispatch={props.dispatch} /></div>
      <div className="content">
        {contentArea}
      </div>
    </div>
  );
}

export default withCookies(App);
