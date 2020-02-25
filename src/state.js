import { reRender } from './render';

let state = {
    stLotsData: []
};

export let addStLot = () => {
    let newLot = {
        neme: '',
        id: ''
    };
    state.stLotsData.push (newLot);
    reRender(state);
};

export default state;