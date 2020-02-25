import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addStLot} from './state';

export let reRender = (state) => {
ReactDOM.render(<App state={state} addStLot={addStLot} />, document.getElementById('root'));
};