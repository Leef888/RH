import { reRender } from './render';

let i = 1;
let j = 1;

let state = {
    content: ["Home"],
    stLotsData: [],
    detLotsData: []
};

export let displayHome = () => {
    state.content = [];
    state.content.push("Home");
    reRender(state);
}

export let displayStLots = () => {
    state.content = [];
    state.content.push("StLots");
    reRender(state);
};

export let displayDetLots = () => {
    state.content = [];
    state.content.push("DetLots");
    reRender(state);
};

export let displayContacts = () => {
    state.content = [];
    state.content.push("Contacts");
    reRender(state);
};

export let addStLot = () => {
    let newLot = {
        neme: '',
        id: i
    };
    state.stLotsData.push(newLot);
    reRender(state);
    i++;
};

export let addDetLot = () => {
    let newLot = {
        neme: '',
        id: j
    };
    state.detLotsData.push(newLot);
    reRender(state);
    j++;
};

export default state;