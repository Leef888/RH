import * as axios from 'axios';

let reRender = () => {
    console.log('');
};

let i = 1;
let j = 1;

let state = {
    content: ["Home"],
    stLotsData: [],
    detLotsData: [],
    imageOne: null,
    imageOneURL: null,
    imageTwo: null,
    imageTwoURL: null,
    imageThree: null,
    imageThreeURL: null,
    imageFour: null,
    imageFourURL: null,
    desc: null,
};

export let imageOneSelected = (e) => {
    state.imageOne = null;
    state.imageOneURL = null;
    state.imageOne = e.target.files[0];
    e.target.value = null;
    state.imageOneURL = URL.createObjectURL(state.imageOne);
    reRender(state);
}
export let imageTwoSelected = (e) => {
    state.imageTwo = null;
    state.imageTwoURL = null;
    state.imageTwo = e.target.files[0];
    e.target.value = null;
    state.imageTwoURL = URL.createObjectURL(state.imageTwo);
    reRender(state);
}
export let imageThreeSelected = (e) => {
    state.imageThree = null;
    state.imageThreeURL = null;
    state.imageThree = e.target.files[0];
    e.target.value = null;
    state.imageThreeURL = URL.createObjectURL(state.imageThree);
    reRender(state);
}
export let imageFourSelected = (e) => {
    state.imageFour = null;
    state.imageFourURL = null;
    state.imageFour = e.target.files[0];
    e.target.value = null;
    state.imageFourURL = URL.createObjectURL(state.imageFour);
    reRender(state);
}
export let inputChanged = (e) => {
    state.desc = null;
    state.desc = e.target.value;
}

export let displayHome = () => {
    state.content = [];
    state.content.push("Home");
    reRender(state);
};

export let displayAuthor = () => {
    state.content = [];
    state.content.push("Author");
    reRender(state);
};

export let displayStLots = () => {
    state.content = [];
    state.content.push("StLots");
    axios.get('http://localhost:3001/stLots/').then(res => {
        let count = res.data.count;
        state.stLotsData = res.data.stLots;
        reRender(state);
    });
};

export let displayDetLots = () => {
    state.content = [];
    state.content.push("DetLots");
    axios.get('http://localhost:3001/detLots/').then(res => {
        let count = res.data.count;
        state.detLotsData = res.data.detLots;
        reRender(state);
    });
};

export let displayContacts = () => {
    state.content = [];
    state.content.push("Contacts");
    reRender(state);
};

export let addStLot = () => {
    // let config = {headers: {'Access-Control-Allow-Origin': '*'}};
    let newLot = {
        neme: '',
        id: i
    };
    state.stLotsData.push(newLot);
    reRender(state);
    i++;
};

export let addDetLot = () => {
    const fd = new FormData();
    fd.append('detLotImage', state.imageOne, state.imageOne.name)
    fd.append('detLotImage', state.imageTwo, state.imageTwo.name)
    fd.append('detLotImage', state.imageThree, state.imageThree.name)
    fd.append('detLotImage', state.imageFour, state.imageFour.name)
    fd.append('desc', state.desc)
    axios.post('http://localhost:3001/detLots/', fd).then(res => {
        if (res.status === 201) {
            state.imageOne = null;
            state.imageOneURL = null;
            state.imageTwo = null;
            state.imageTwoURL = null;
            state.imageThree = null;
            state.imageThreeURL = null;
            state.imageFour = null;
            state.imageFourURL = null;
            displayDetLots();
        }
    })
};

export let deleteLot = (id) => {
    if (state.content[0] === "StLots") {
        let lotURL = 'http://localhost:3001/stLots/' + id
        axios.delete(`${lotURL}`).then(res => {
            displayStLots();
            alert(`Lot ${id} deleted!`)
        })
    } else if (state.content[0] === "DetLots") {
        let lotURL = 'http://localhost:3001/detLots/' + id
        axios.delete(`${lotURL}`).then(res => {
            displayDetLots();
            alert(`Lot ${id} deleted!`)
        })
    }
}

export let subscribe = (observer) => {
    reRender = observer;
};

export default state;