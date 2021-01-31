import {} from '../api/api';

const ADD_LOT_ON_PAGE_ONE = 'ADD_LOT_ON_PAGE_ONE';
const IMAGE_ONE_ON_PAGE_ONE_SELECTED = 'IMAGE_ONE_ON_PAGE_ONE_SELECTED';
const IMAGE_TWO_ON_PAGE_ONE_SELECTED = 'IMAGE_TWO_ON_PAGE_ONE_SELECTED';
const IMAGE_THREE_ON_PAGE_ONE_SELECTED = 'IMAGE_THREE_ON_PAGE_ONE_SELECTED';
const IMAGE_FOUR_ON_PAGE_ONE_SELECTED = 'IMAGE_FOUR_ON_PAGE_ONE_SELECTED';
const INPUT_ON_PAGE_ONE_CHANGED = 'INPUT_ON_PAGE_ONE_CHANGED';

let initialState = {
    data: [],
    addLotData: {
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

const pageOneReducer = (state = initialState, action) => {

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

        case ADD_LOT_ON_PAGE_ONE:
            let fdOne = new FormData();
            fdOne.append('stLotImage', state.lotOnPageOneData.imageOne, state.lotOnPageOneData.imageOne.name)
            fdOne.append('stLotImage', state.lotOnPageOneData.imageTwo, state.lotOnPageOneData.imageTwo.name)
            fdOne.append('stLotImage', state.lotOnPageOneData.imageThree, state.lotOnPageOneData.imageThree.name)
            fdOne.append('stLotImage', state.lotOnPageOneData.imageFour, state.lotOnPageOneData.imageFour.name)
            fdOne.append('desc', state.lotOnPageOneData.desc)
            postLotOnPageOne(fdOne).then(res => {
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

        default:
            return state
    }
}

export default pageOneReducer;

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

export const addLotOnPageOneActionCreator = () => {
    return {type: ADD_LOT_ON_PAGE_ONE}
}