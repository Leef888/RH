import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let stLotsData = [
    {name: '', id: 1},
    {name: '', id: 2},
    {name: '', id: 3},
    {name: '', id: 4},
    {name: '', id: 5},
    {name: '', id: 6},
    {name: '', id: 7},
    {name: '', id: 8},
    {name: '', id: 9}
];

let addStLot = () => {
    stLotsData.push();
}

ReactDOM.render(<App stLotsData={stLotsData} addStLot={addStLot} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
