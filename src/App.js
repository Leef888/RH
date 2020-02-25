import React from 'react';
import NavBar from './components/NavBar';
import StLots from './components/StLots';
import Contacts from './components/Contacts';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar className="navBar" />
        <div className="content">
          <Route path='/StLots' render={() => <StLots stLotsData={props.state.stLotsData} addStLot={props.addStLot} />} />
          <Route path='/Contacts' render={() => <Contacts />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
