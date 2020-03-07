import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addStLot, addDetLot, displayHome, displayStLots, displayDetLots, displayContacts} from './state';

export let reRender = (state) => {
ReactDOM.render(<App state={state} addStLot={addStLot} addDetLot={addDetLot} displayHome={displayHome} displayStLots={displayStLots} displayContacts={displayContacts} displayDetLots={displayDetLots} />, document.getElementById('root'));
};