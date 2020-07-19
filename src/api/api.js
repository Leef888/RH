import * as axios from 'axios';

export const getLotsOnPageOne = () => {
    return axios.get('http://localhost:3001/stLots/')
};
export const getLotsOnPageTwo = () => { };

export const postLotOnPageOne = () => { };
export const postLotOnPageTwo = () => { };

export const deleteLot = () => { };