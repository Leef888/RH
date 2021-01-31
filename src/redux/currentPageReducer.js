import {} from '../api/api';

const DISPLAY_HOME = 'DISPLAY_HOME';
const DISPLAY_AUTH = 'DISPLAY_AUTH';
const DISPLAY_PAGE_ONE = 'DISPLAY_PAGE_ONE';
const DISPLAY_PAGE_TWO = 'DISPLAY_PAGE_TWO';
const DISPLAY_CONTACTS = 'DISPLAY_CONTACTS';
const DELETE_LOT = 'DELETE_LOT';

let initialState = {
    content: ["Home"]
}

const currentPageReducer = (state = initialState, action) => {

    switch (action.type) {

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
                return state;
            });
            return state;

        case DISPLAY_PAGE_TWO:
            state.content = [];
            state.content.push("PageTwo");
            getLotsOnPageTwo().then(data => {
                // let count = res.data.count;
                state.pageTwoData = data.detLots;
                return state;
            });
            return state;

        case DISPLAY_CONTACTS:
            state.content = [];
            state.content.push("Contacts");
            return state;

        case DELETE_LOT:
            if (state.content[0] === "PageOne") {
                let lotURL = 'http://localhost:3001/stLots/' + action.id
                deleteLotOnPageOne(lotURL).then(res => {
                    // displayStLots();
                    alert(`Lot ${action.id} deleted!`)
                    return state
                })
                return state
            } else if (state.content[0] === "PageTwo") {
                let lotURL = 'http://localhost:3001/detLots/' + action.id
                deleteLotOnPageTwo(lotURL).then(res => {
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

export default currentPageReducer;

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
export const deleteLotActionCreator = (id) => {
    return {type: DELETE_LOT, id: id}
}