import * as axios from 'axios';
import { getLotsOnPageOne } from '../api/api';

const DISPLAY_HOME = 'DISPLAY_HOME';
const DISPLAY_AUTH = 'DISPLAY_AUTH';
const DISPLAY_PAGE_ONE = 'DISPLAY_PAGE_ONE';
const DISPLAY_PAGE_TWO = 'DISPLAY_PAGE_TWO';
const DISPLAY_CONTACTS = 'DISPLAY_CONTACTS';
const ADD_LOT_ON_PAGE_ONE = 'ADD_LOT_ON_PAGE_ONE';
const ADD_LOT_ON_PAGE_TWO = 'ADD_LOT_ON_PAGE_TWO';
const DELETE_LOT = 'DELETE_LOT';
const IMAGE_ONE_ON_PAGE_ONE_SELECTED = 'IMAGE_ONE_ON_PAGE_ONE_SELECTED';
const IMAGE_TWO_ON_PAGE_ONE_SELECTED = 'IMAGE_TWO_ON_PAGE_ONE_SELECTED';
const IMAGE_THREE_ON_PAGE_ONE_SELECTED = 'IMAGE_THREE_ON_PAGE_ONE_SELECTED';
const IMAGE_FOUR_ON_PAGE_ONE_SELECTED = 'IMAGE_FOUR_ON_PAGE_ONE_SELECTED';
const INPUT_ON_PAGE_ONE_CHANGED = 'INPUT_ON_PAGE_ONE_CHANGED';
const IMAGE_ONE_ON_PAGE_TWO_SELECTED = 'IMAGE_ONE_ON_PAGE_TWO_SELECTED';
const IMAGE_TWO_ON_PAGE_TWO_SELECTED = 'IMAGE_TWO_ON_PAGE_TWO_SELECTED';
const IMAGE_THREE_ON_PAGE_TWO_SELECTED = 'IMAGE_THREE_ON_PAGE_TWO_SELECTED';
const IMAGE_FOUR_ON_PAGE_TWO_SELECTED = 'IMAGE_FOUR_ON_PAGE_TWO_SELECTED';
const INPUT_ON_PAGE_TWO_CHANGED = 'INPUT_ON_PAGE_TWO_CHANGED';

let initialState = {
    content: ["Home"],
    pageOneData: [],
    pageTwoData: [],
    lotOnPageOneData: {
        imageOne: null,
        imageOneURL: null,
        imageTwo: null,
        imageTwoURL: null,
        imageThree: null,
        imageThreeURL: null,
        imageFour: null,
        imageFourURL: null,
        desc: null
    },
    lotOnPageTwoData: {
        imageOne: null,
        imageOneURL: null,
        imageTwo: null,
        imageTwoURL: null,
        imageThree: null,
        imageThreeURL: null,
        imageFour: null,
        imageFourURL: null,
        desc: null
    }
}

const stateReduser = (state = initialState, action) => {

    switch (action.type) {

        case IMAGE_ONE_ON_PAGE_ONE_SELECTED:
            state.lotOnPageOneData.imageOne = null;
            state.lotOnPageOneData.imageOneURL = null;
            state.lotOnPageOneData.imageOne = action.e.target.files[0];
            action.e.target.value = null;
            state.lotOnPageOneData.imageOneURL = URL.createObjectURL(state.lotOnPageOneData.imageOne);
            return state

        case IMAGE_TWO_ON_PAGE_ONE_SELECTED:
            state.lotOnPageOneData.imageTwo = null;
            state.lotOnPageOneData.imageTwoURL = null;
            state.lotOnPageOneData.imageTwo = action.e.target.files[0];
            action.e.target.value = null;
            state.lotOnPageOneData.imageTwoURL = URL.createObjectURL(state.lotOnPageOneData.imageTwo);
            return state

        case IMAGE_THREE_ON_PAGE_ONE_SELECTED:
            state.lotOnPageOneData.imageThree = null;
            state.lotOnPageOneData.imageThreeURL = null;
            state.lotOnPageOneData.imageThree = action.e.target.files[0];
            action.e.target.value = null;
            state.lotOnPageOneData.imageThreeURL = URL.createObjectURL(state.lotOnPageOneData.imageThree);
            return state

        case IMAGE_FOUR_ON_PAGE_ONE_SELECTED:
            state.lotOnPageOneData.imageFour = null;
            state.lotOnPageOneData.imageFourURL = null;
            state.lotOnPageOneData.imageFour = action.e.target.files[0];
            action.e.target.value = null;
            state.lotOnPageOneData.imageFourURL = URL.createObjectURL(state.lotOnPageOneData.imageFour);
            return state

        case INPUT_ON_PAGE_ONE_CHANGED:
            state.lotOnPageOneData.desc = null;
            state.lotOnPageOneData.desc = action.e.target.value;
            return state

        case IMAGE_ONE_ON_PAGE_TWO_SELECTED:
            state.lotOnPageTwoData.imageOne = null;
            state.lotOnPageTwoData.imageOneURL = null;
            state.lotOnPageTwoData.imageOne = action.e.target.files[0];
            action.e.target.value = null;
            state.lotOnPageTwoData.imageOneURL = URL.createObjectURL(state.lotOnPageTwoData.imageOne);
            return state

        case IMAGE_TWO_ON_PAGE_TWO_SELECTED:
            state.lotOnPageTwoData.imageTwo = null;
            state.lotOnPageTwoData.imageTwoURL = null;
            state.lotOnPageTwoData.imageTwo = action.e.target.files[0];
            action.e.target.value = null;
            state.lotOnPageTwoData.imageTwoURL = URL.createObjectURL(state.lotOnPageTwoData.imageTwo);
            return state

        case IMAGE_THREE_ON_PAGE_TWO_SELECTED:
            state.lotOnPageTwoData.imageThree = null;
            state.lotOnPageTwoData.imageThreeURL = null;
            state.lotOnPageTwoData.imageThree = action.e.target.files[0];
            action.e.target.value = null;
            state.lotOnPageTwoData.imageThreeURL = URL.createObjectURL(state.lotOnPageTwoData.imageThree);
            return state

        case IMAGE_FOUR_ON_PAGE_TWO_SELECTED:
            state.lotOnPageTwoData.imageFour = null;
            state.lotOnPageTwoData.imageFourURL = null;
            state.lotOnPageTwoData.imageFour = action.e.target.files[0];
            action.e.target.value = null;
            state.lotOnPageTwoData.imageFourURL = URL.createObjectURL(state.lotOnPageTwoData.imageFour);
            return state

        case INPUT_ON_PAGE_TWO_CHANGED:
            state.lotOnPageTwoData.desc = null;
            state.lotOnPageTwoData.desc = action.e.target.value;
            return state

        case DISPLAY_HOME:
            state.content = [];
            state.content.push("Home");
            return state;

        case DISPLAY_AUTH:
            state.content = [];
            state.content.push("Author");
            return state;

        case DISPLAY_PAGE_ONE:
            state.content = [];
            state.content.push("PageOne");
            getLotsOnPageOne().then(res => {
                // let count = res.data.count;
                state.pageOneData = res.data.stLots;
            });
            return state;

        case DISPLAY_PAGE_TWO:
            state.content = [];
            state.content.push("PageTwo");
            axios.get('http://localhost:3001/detLots/').then(res => {
                // let count = res.data.count;
                state.pageTwoData = res.data.detLots;
            });
            return state;

        case DISPLAY_CONTACTS:
            state.content = [];
            state.content.push("Contacts");
            return state;

        case ADD_LOT_ON_PAGE_ONE:
            let fdOne = new FormData();
            fdOne.append('stLotImage', state.lotOnPageOneData.imageOne, state.lotOnPageOneData.imageOne.name)
            fdOne.append('stLotImage', state.lotOnPageOneData.imageTwo, state.lotOnPageOneData.imageTwo.name)
            fdOne.append('stLotImage', state.lotOnPageOneData.imageThree, state.lotOnPageOneData.imageThree.name)
            fdOne.append('stLotImage', state.lotOnPageOneData.imageFour, state.lotOnPageOneData.imageFour.name)
            fdOne.append('desc', state.lotOnPageOneData.desc)
            axios.post('http://localhost:3001/stLots/', fdOne).then(res => {
                if (res.status === 201) {
                    state.lotOnPageOneData.imageOne = null;
                    state.lotOnPageOneData.imageOneURL = null;
                    state.lotOnPageOneData.imageTwo = null;
                    state.lotOnPageOneData.imageTwoURL = null;
                    state.lotOnPageOneData.imageThree = null;
                    state.lotOnPageOneData.imageThreeURL = null;
                    state.lotOnPageOneData.imageFour = null;
                    state.lotOnPageOneData.imageFourURL = null;
                    // displayDetLots();
                    return state
                }
            });
            return state

        case ADD_LOT_ON_PAGE_TWO:
            let fdTwo = new FormData();
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageOne, state.lotOnPageTwoData.imageOne.name)
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageTwo, state.lotOnPageTwoData.imageTwo.name)
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageThree, state.lotOnPageTwoData.imageThree.name)
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageFour, state.lotOnPageTwoData.imageFour.name)
            fdTwo.append('desc', state.lotOnPageTwoData.desc)
            axios.post('http://localhost:3001/detLots/', fdTwo).then(res => {
                if (res.status === 201) {
                    state.lotOnPageTwoData.imageOne = null;
                    state.lotOnPageTwoData.imageOneURL = null;
                    state.lotOnPageTwoData.imageTwo = null;
                    state.lotOnPageTwoData.imageTwoURL = null;
                    state.lotOnPageTwoData.imageThree = null;
                    state.lotOnPageTwoData.imageThreeURL = null;
                    state.lotOnPageTwoData.imageFour = null;
                    state.lotOnPageTwoData.imageFourURL = null;
                    // displayDetLots();
                    return state
                }
            });
            return state

        case DELETE_LOT:
            if (state.content[0] === "PageOne") {
                let lotURL = 'http://localhost:3001/stLots/' + action.id
                axios.delete(`${lotURL}`).then(res => {
                    // displayStLots();
                    alert(`Lot ${action.id} deleted!`)
                    return state
                })
                return state
            } else if (state.content[0] === "PageTwo") {
                let lotURL = 'http://localhost:3001/detLots/' + action.id
                axios.delete(`${lotURL}`).then(res => {
                    // displayDetLots();
                    alert(`Lot ${action.id} deleted!`)
                    return state
                })
                return state
            }
        break
        default:
            return state
    }
}

export default stateReduser;

export const imageOneOnPageOneSelectedActionCreator = (e) => {
    return {type: IMAGE_ONE_ON_PAGE_ONE_SELECTED, e: e}
}
export const imageTwoOnPageOneSelectedActionCreator = (e) => {
    return {type: IMAGE_TWO_ON_PAGE_ONE_SELECTED, e: e}
}
export const imageThreeOnPageOneSelectedActionCreator = (e) => {
    return {type: IMAGE_THREE_ON_PAGE_ONE_SELECTED, e: e}
}
export const imageFourOnPageOneSelectedActionCreator = (e) => {
    return {type: IMAGE_FOUR_ON_PAGE_ONE_SELECTED, e: e}
}
export const inputOnPageOneChangedActionCreator = (e) => {
    return {type: INPUT_ON_PAGE_ONE_CHANGED, e: e}
}

export const imageOneOnPageTwoSelectedActionCreator = (e) => {
    return {type: IMAGE_ONE_ON_PAGE_TWO_SELECTED, e: e}
}
export const imageTwoOnPageTwoSelectedActionCreator = (e) => {
    return {type: IMAGE_TWO_ON_PAGE_TWO_SELECTED, e: e}
}
export const imageThreeOnPageTwoSelectedActionCreator = (e) => {
    return {type: IMAGE_THREE_ON_PAGE_TWO_SELECTED, e: e}
}
export const imageFourOnPageTwoSelectedActionCreator = (e) => {
    return {type: IMAGE_FOUR_ON_PAGE_TWO_SELECTED, e: e}
}
export const inputOnPageTwoChangedActionCreator = (e) => {
    return {type: INPUT_ON_PAGE_TWO_CHANGED, e: e}
}

export const displayHomeActionCreator = () => {
    return {type: DISPLAY_HOME}
}
export const displayAuthActionCreator = () => {
    return {type: DISPLAY_AUTH}
}
export const displayPageOneActionCreator = () => {
    return {type: DISPLAY_PAGE_ONE}
}
export const displayPageTwoActionCreator = () => {
    return {type: DISPLAY_PAGE_TWO}
}
export const displayContactsActionCreator = () => {
    return {type: DISPLAY_CONTACTS}
}

export const addLotOnPageOneActionCreator = () => {
    return {type: ADD_LOT_ON_PAGE_ONE}
}
export const addLotOnPageTwoActionCreator = () => {
    return {type: ADD_LOT_ON_PAGE_TWO}
}
export const deleteLotActionCreator = (id) => {
    return {type: DELETE_LOT, id: id}
}