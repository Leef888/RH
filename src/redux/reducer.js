import {
    getLotsOnPageOne,
    getLotsOnPageTwo,
    postLotOnPageOne,
    postLotOnPageTwo,
    deleteLotOnPageOne,
    deleteLotOnPageTwo,
    loginApi
} from '../api/api';

const EMAIL_INPUT_CHANGED = 'EMAIL_INPUT_CHANGED';
const PASSWORD_INPUT_CHANGED = 'PASSWORD_INPUT_CHANGED';
const CLEAR_ON_LOGIN_PAGE = 'CLEAR_ON_LOGIN_PAGE';
const DISPLAY_HOME = 'DISPLAY_HOME';
const DISPLAY_AUTH = 'DISPLAY_AUTH';
const DISPLAY_PAGE_ONE = 'DISPLAY_PAGE_ONE';
const SET_PAGE_ONE_DATA = 'SET_PAGE_ONE_DATA';
const DISPLAY_PAGE_TWO = 'DISPLAY_PAGE_TWO';
const SET_PAGE_TWO_DATA = 'SET_PAGE_TWO_DATA';
const DISPLAY_CONTACTS = 'DISPLAY_CONTACTS';
const CLEAR_ON_PAGE_ONE = 'CLEAR_ON_PAGE_ONE';
const CLEAR_ON_PAGE_TWO = 'CLEAR_ON_PAGE_TWO';
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
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

let initialState = {
    isAuth: false,
    content: ["Home"],
    pageOneData: [],
    pageTwoData: [],
    authData: {
        email: '',
        password: ''
    },
    lotOnPageOneData: {
        imageOne: null,
        imageOneURL: null,
        imageTwo: null,
        imageTwoURL: null,
        imageThree: null,
        imageThreeURL: null,
        imageFour: null,
        imageFourURL: null,
        desc: ''
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
        desc: ''
    }
};

const stateReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {

        case LOGOUT:
            stateCopy = {
                ...state,
                isAuth: false
            };
            return stateCopy;

        case LOGIN:
            stateCopy = {
                ...state,
                isAuth: true
            };
            return stateCopy;

        case IMAGE_ONE_ON_PAGE_ONE_SELECTED:
            stateCopy = {
                ...state,
                lotOnPageOneData: {
                    ...state.lotOnPageOneData,
                    imageOne: action.e.target.files[0]
                }
            };
            stateCopy = {
                ...stateCopy,
                lotOnPageOneData: {
                    ...stateCopy.lotOnPageOneData,
                    imageOneURL: URL.createObjectURL(stateCopy.lotOnPageOneData.imageOne)
                }
            };
            return stateCopy;

        case IMAGE_TWO_ON_PAGE_ONE_SELECTED:
            stateCopy = {
                ...state,
                lotOnPageOneData: {
                    ...state.lotOnPageOneData,
                    imageTwo: action.e.target.files[0]
                }
            };
            stateCopy = {
                ...stateCopy,
                lotOnPageOneData: {
                    ...stateCopy.lotOnPageOneData,
                    imageTwoURL: URL.createObjectURL(stateCopy.lotOnPageOneData.imageTwo)
                }
            };
            return stateCopy;

        case IMAGE_THREE_ON_PAGE_ONE_SELECTED:
            stateCopy = {
                ...state,
                lotOnPageOneData: {
                    ...state.lotOnPageOneData,
                    imageThree: action.e.target.files[0]
                }
            };
            stateCopy = {
                ...stateCopy,
                lotOnPageOneData: {
                    ...stateCopy.lotOnPageOneData,
                    imageThreeURL: URL.createObjectURL(stateCopy.lotOnPageOneData.imageThree)
                }
            };
            return stateCopy;

        case IMAGE_FOUR_ON_PAGE_ONE_SELECTED:
            stateCopy = {
                ...state,
                lotOnPageOneData: {
                    ...state.lotOnPageOneData,
                    imageFour: action.e.target.files[0]
                }
            };
            stateCopy = {
                ...stateCopy,
                lotOnPageOneData: {
                    ...stateCopy.lotOnPageOneData,
                    imageFourURL: URL.createObjectURL(stateCopy.lotOnPageOneData.imageFour)
                }
            };
            return stateCopy;

        case INPUT_ON_PAGE_ONE_CHANGED:
            stateCopy = {
                ...state,
                lotOnPageOneData: {
                    ...state.lotOnPageOneData,
                    desc: action.e.target.value
                }
            };
            return stateCopy;

        case EMAIL_INPUT_CHANGED:
            stateCopy = {
                ...state,
                authData: {
                    ...state.authData,
                    email: action.e.target.value
                }
            };
            return stateCopy;

        case PASSWORD_INPUT_CHANGED:
            stateCopy = {
                ...state,
                authData: {
                    ...state.authData,
                    password: action.e.target.value
                }
            };
            return stateCopy;

        case CLEAR_ON_LOGIN_PAGE:
            stateCopy = {
                ...state,
                authData: {
                    ...state.authData,
                    email: '',
                    password: ''
                }
            };
            return stateCopy;

        case IMAGE_ONE_ON_PAGE_TWO_SELECTED:
            stateCopy = {
                ...state,
                lotOnPageTwoData: {
                    ...state.lotOnPageTwoData,
                    imageOne: action.e.target.files[0]
                }
            };
            stateCopy = {
                ...stateCopy,
                lotOnPageTwoData: {
                    ...stateCopy.lotOnPageTwoData,
                    imageOneURL: URL.createObjectURL(stateCopy.lotOnPageTwoData.imageOne)
                }
            };
            return stateCopy;

        case IMAGE_TWO_ON_PAGE_TWO_SELECTED:
            stateCopy = {
                ...state,
                lotOnPageTwoData: {
                    ...state.lotOnPageTwoData,
                    imageTwo: action.e.target.files[0]
                }
            };
            stateCopy = {
                ...stateCopy,
                lotOnPageTwoData: {
                    ...stateCopy.lotOnPageTwoData,
                    imageTwoURL: URL.createObjectURL(stateCopy.lotOnPageTwoData.imageTwo)
                }
            };
            return stateCopy;

        case IMAGE_THREE_ON_PAGE_TWO_SELECTED:
            stateCopy = {
                ...state,
                lotOnPageTwoData: {
                    ...state.lotOnPageTwoData,
                    imageThree: action.e.target.files[0]
                }
            };
            stateCopy = {
                ...stateCopy,
                lotOnPageTwoData: {
                    ...stateCopy.lotOnPageTwoData,
                    imageThreeURL: URL.createObjectURL(stateCopy.lotOnPageTwoData.imageThree)
                }
            };
            return stateCopy;

        case IMAGE_FOUR_ON_PAGE_TWO_SELECTED:
            stateCopy = {
                ...state,
                lotOnPageTwoData: {
                    ...state.lotOnPageTwoData,
                    imageFour: action.e.target.files[0]
                }
            };
            stateCopy = {
                ...stateCopy,
                lotOnPageTwoData: {
                    ...stateCopy.lotOnPageTwoData,
                    imageFourURL: URL.createObjectURL(stateCopy.lotOnPageTwoData.imageFour)
                }
            };
            return stateCopy;

        case INPUT_ON_PAGE_TWO_CHANGED:
            stateCopy = {
                ...state,
                lotOnPageTwoData: {
                    ...state.lotOnPageTwoData,
                    desc: action.e.target.value
                }
            };
            return stateCopy;

        case DISPLAY_HOME:
            stateCopy = {
                ...state,
                content: ["Home"]
            };
            return stateCopy;

        case DISPLAY_AUTH:
            stateCopy = {
                ...state,
                content: ["Auth"]
            };
            return stateCopy;

        case DISPLAY_PAGE_ONE:
            stateCopy = {
                ...state,
                content: ["PageOne"]
            };
            return stateCopy;

        case SET_PAGE_ONE_DATA:
            stateCopy = {
                ...state,
                pageOneData: action.data.stLots
            };
            return stateCopy;

        case DISPLAY_PAGE_TWO:
            stateCopy = {
                ...state,
                content: ["PageTwo"]
            };
            return stateCopy;

        case SET_PAGE_TWO_DATA:
            stateCopy = {
                ...state,
                pageTwoData: action.data.detLots
            };
            return stateCopy;

        case DISPLAY_CONTACTS:
            stateCopy = {
                ...state,
                content: ["Contacts"]
            };
            return stateCopy;

        case CLEAR_ON_PAGE_ONE:
            stateCopy = {
                ...state,
                lotOnPageOneData: {
                    ...state.lotOnPageOneData,
                    imageOne: null,
                    imageOneURL: null,
                    imageTwo: null,
                    imageTwoURL: null,
                    imageThree: null,
                    imageThreeURL: null,
                    imageFour: null,
                    imageFourURL: null,
                    desc: ''
                }
            };
            return stateCopy;

        case CLEAR_ON_PAGE_TWO:
            stateCopy = {
                ...state,
                lotOnPageTwoData: {
                    ...state.lotOnPageTwoData,
                    imageOne: null,
                    imageOneURL: null,
                    imageTwo: null,
                    imageTwoURL: null,
                    imageThree: null,
                    imageThreeURL: null,
                    imageFour: null,
                    imageFourURL: null,
                    desc: ''
                }
            };
            return stateCopy;
        default:
            return state
    }
};

export default stateReducer;

export const loginActionCreator = () => {
    return {type: LOGIN}
};
export const logoutActionCreator = () => {
    return {type: LOGOUT}
};

export const imageOneOnPageOneSelectedActionCreator = (e) => {
    return {type: IMAGE_ONE_ON_PAGE_ONE_SELECTED, e: e}
};
export const imageTwoOnPageOneSelectedActionCreator = (e) => {
    return {type: IMAGE_TWO_ON_PAGE_ONE_SELECTED, e: e}
};
export const imageThreeOnPageOneSelectedActionCreator = (e) => {
    return {type: IMAGE_THREE_ON_PAGE_ONE_SELECTED, e: e}
};
export const imageFourOnPageOneSelectedActionCreator = (e) => {
    return {type: IMAGE_FOUR_ON_PAGE_ONE_SELECTED, e: e}
};
export const inputOnPageOneChangedActionCreator = (e) => {
    return {type: INPUT_ON_PAGE_ONE_CHANGED, e: e}
};

export const emailInputChangedActionCreator = (e) => {
    return {type: EMAIL_INPUT_CHANGED, e: e}
};
export const passwordInputChangedActionCreator = (e) => {
    return {type: PASSWORD_INPUT_CHANGED, e: e}
};
export const resetInputsOnLoginPageActionCreator = () => {
    return {type: CLEAR_ON_LOGIN_PAGE}
};

export const imageOneOnPageTwoSelectedActionCreator = (e) => {
    return {type: IMAGE_ONE_ON_PAGE_TWO_SELECTED, e: e}
};
export const imageTwoOnPageTwoSelectedActionCreator = (e) => {
    return {type: IMAGE_TWO_ON_PAGE_TWO_SELECTED, e: e}
};
export const imageThreeOnPageTwoSelectedActionCreator = (e) => {
    return {type: IMAGE_THREE_ON_PAGE_TWO_SELECTED, e: e}
};
export const imageFourOnPageTwoSelectedActionCreator = (e) => {
    return {type: IMAGE_FOUR_ON_PAGE_TWO_SELECTED, e: e}
};
export const inputOnPageTwoChangedActionCreator = (e) => {
    return {type: INPUT_ON_PAGE_TWO_CHANGED, e: e}
};

export const displayHomeActionCreator = () => {
    return {type: DISPLAY_HOME}
};
export const displayAuthActionCreator = () => {
    return {type: DISPLAY_AUTH}
};
export const displayPageOneActionCreator = () => {
    return {type: DISPLAY_PAGE_ONE}
};
export const setPageOneDataActionCreator = (data) => {
    return {type: SET_PAGE_ONE_DATA, data: data}
};
export const displayPageTwoActionCreator = () => {
    return {type: DISPLAY_PAGE_TWO}
};
export const setPageTwoDataActionCreator = (data) => {
    return {type: SET_PAGE_TWO_DATA, data: data}
};
export const displayContactsActionCreator = () => {
    return {type: DISPLAY_CONTACTS}
};

export const resetLotDataOnPageOneActionCreator = () => {
    return {type: CLEAR_ON_PAGE_ONE}
};
export const resetLotDataOnPageTwoActionCreator = () => {
    return {type: CLEAR_ON_PAGE_TWO}
};


export const getLotsOnPageOneThunkCreator = () => {
    return (dispatch) => {
        getLotsOnPageOne().then(data => {
            dispatch(setPageOneDataActionCreator(data))
        });
    }
};
export const getLotsOnPageTwoThunkCreator = () => {
    return (dispatch) => {
        getLotsOnPageTwo().then(data => {
            dispatch(setPageTwoDataActionCreator(data))
        });
    }
};

export const addLotOnPageOneThunkCreator = (state, cookies) => {
    return (dispatch) => {
        let fdOne = new FormData();
        if (state.lotOnPageOneData.imageOne != null
            && state.lotOnPageOneData.imageTwo != null
            && state.lotOnPageOneData.imageThree != null
            && state.lotOnPageOneData.imageFour != null) {
            fdOne.append('stLotImage', state.lotOnPageOneData.imageOne, state.lotOnPageOneData.imageOne.name);
            fdOne.append('stLotImage', state.lotOnPageOneData.imageTwo, state.lotOnPageOneData.imageTwo.name);
            fdOne.append('stLotImage', state.lotOnPageOneData.imageThree, state.lotOnPageOneData.imageThree.name);
            fdOne.append('stLotImage', state.lotOnPageOneData.imageFour, state.lotOnPageOneData.imageFour.name);
            fdOne.append('desc', state.lotOnPageOneData.desc);
            postLotOnPageOne(fdOne, cookies).then(res => {
                dispatch(getLotsOnPageOneThunkCreator());
                if (res.status === 201) {
                    dispatch(resetLotDataOnPageOneActionCreator())
                } else {
                    alert(res)
                }
            });
        } else {
            postLotOnPageOne(fdOne, cookies).then(res => {
                alert(res)
            })
        }
    }
};
export const addLotOnPageTwoThunkCreator = (state, cookies) => {
    return (dispatch) => {
        let fdTwo = new FormData();
        if (state.lotOnPageTwoData.imageOne != null
            && state.lotOnPageTwoData.imageTwo != null
            && state.lotOnPageTwoData.imageThree != null
            && state.lotOnPageTwoData.imageFour != null) {
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageOne, state.lotOnPageTwoData.imageOne.name);
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageTwo, state.lotOnPageTwoData.imageTwo.name);
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageThree, state.lotOnPageTwoData.imageThree.name);
            fdTwo.append('detLotImage', state.lotOnPageTwoData.imageFour, state.lotOnPageTwoData.imageFour.name);
            fdTwo.append('desc', state.lotOnPageTwoData.desc);
            postLotOnPageTwo(fdTwo, cookies).then(res => {
                dispatch(getLotsOnPageTwoThunkCreator());
                if (res.status === 201) {
                    dispatch(resetLotDataOnPageTwoActionCreator())
                } else {
                    alert(res)
                }
            });
        } else {
            postLotOnPageTwo(fdTwo, cookies).then(res => {
                alert(res)
            })
        }
    }
};

export const deleteLotOnPageOneThunkCreator = (id, cookies) => {
    return (dispatch) => {
        let lotURL = 'http://localhost:3001/stLots/' + id;
        deleteLotOnPageOne(lotURL, cookies).then(() => {
            dispatch(getLotsOnPageOneThunkCreator());
            alert(`Lot ${id} deleted!`)
        })
    }
};
export const deleteLotOnPageTwoThunkCreator = (id, cookies) => {
    return (dispatch) => {
        let lotURL = 'http://localhost:3001/detLots/' + id;
        deleteLotOnPageTwo(lotURL, cookies).then(() => {
            dispatch(getLotsOnPageTwoThunkCreator());
            alert(`Lot ${id} deleted!`)
        })
    }
};

export const loginThunkCreator = (email, password, cookies) => {
    return (dispatch) => {
        let body = {
            email: email,
            password: password
        };
        loginApi(body).then(res => {
            if (res.status === 200) {
                cookies.set('token', res.data.token);
                dispatch(loginActionCreator())
            } else {
                alert(res)
            }
        })
    }
};