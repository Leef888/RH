import {} from '../api/api';

const ADD_LOT_ON_PAGE_TWO = 'ADD_LOT_ON_PAGE_TWO';
const IMAGE_ONE_ON_PAGE_TWO_SELECTED = 'IMAGE_ONE_ON_PAGE_TWO_SELECTED';
const IMAGE_TWO_ON_PAGE_TWO_SELECTED = 'IMAGE_TWO_ON_PAGE_TWO_SELECTED';
const IMAGE_THREE_ON_PAGE_TWO_SELECTED = 'IMAGE_THREE_ON_PAGE_TWO_SELECTED';
const IMAGE_FOUR_ON_PAGE_TWO_SELECTED = 'IMAGE_FOUR_ON_PAGE_TWO_SELECTED';
const INPUT_ON_PAGE_TWO_CHANGED = 'INPUT_ON_PAGE_TWO_CHANGED';

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

const pageTwoReducer = (state = initialState, action) => {

    switch (action.type) {

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

        case ADD_LOT_ON_PAGE_TWO:
            let fdTwo = new FormData();
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageOne, state.lotOnPageTwoData.imageOne.name)
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageTwo, state.lotOnPageTwoData.imageTwo.name)
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageThree, state.lotOnPageTwoData.imageThree.name)
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageFour, state.lotOnPageTwoData.imageFour.name)
            fdTwo.append('desc', state.lotOnPageTwoData.desc)
            postLotOnPageTwo(fdTwo).then(res => {
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

        default:
            return state
    }
}

export default pageTwoReducer;

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

export const addLotOnPageTwoActionCreator = () => {
    return {type: ADD_LOT_ON_PAGE_TWO}
}