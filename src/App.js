import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import StLots from './components/StLots';
import DetLots from './components/DetLots';
import Contacts from './components/Contacts';
import Home from './components/Home';

function App(props) {

  let contentArea = props.state.content.map( (name) => {
    if ((name) === "StLots") {
      return <StLots stLotsData={props.state.stLotsData} addStLot={props.addStLot} />;
    } else if ((name) === "DetLots") {
      return <DetLots detLotsData={props.state.detLotsData} addDetLot={props.addDetLot} />;
    } else if ((name) === "Contacts") {
      return <Contacts />;
    } else {
      return <Home displayStLots={props.displayStLots} displayDetLots={props.displayDetLots} displayContacts={props.displayContacts} />;
    }
  });

  return (
    <div className="app">
      <div className="navBar"><NavBar displayHome={props.displayHome} displayStLots={props.displayStLots} displayDetLots={props.displayDetLots} displayContacts={props.displayContacts} /></div>
      <div className="content">
        {contentArea}
      </div>
    </div>
  );
}

export default App;
