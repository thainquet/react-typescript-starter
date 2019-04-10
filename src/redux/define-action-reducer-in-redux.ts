interface Image {
    id: string;
    url: string
}
interface ImageList {
    list: Image[];
}

const initialState: ImageList = {
    list: []
};

/* TYPES */
const ADD = 'Image/ADD';
const REMOVE = 'Image/REMOVE';
const UPDATE = 'Image/UPDATE';
const GET = 'Image/GET';

/* ACTIONS */
export const getImage = () => {
    return (dispatch: any) => {
        try {
            const list = JSON.parse(localStorage.getItem('imgList'));
            dispatch({
                list,
                type: GET,
            });
        } catch (err) {
            dispatch({
                list: [],
                type: GET,
            });
        }
    };
};

export const addImg = (input: string) => {
    return (dispatch: any) => {
        dispatch({
            url: input,
            type: ADD,
        });
    };
};

export const removeImg = (Image: Image) => {
    return (dispatch: any) => {
        dispatch({
            url: Image,
            type: REMOVE,
        });
    };
};

/* SELECTORS */

/* REDUCER */
export const ImageReducer = (
    state = initialState, action: { type: string, url: string, list: Image[], Image: Image }) => {
    let tempList: Image[];
    let tempCompList: Image[];
    switch (action.type) {
        case ADD:
            const newImage: Image = {
                id: generateId(),
                url: action.url
            };
            tempList = state.list;
            tempList.push(newImage);

            localStorage.setItem('ImageList', JSON.stringify(tempList));
            return {
                ...state,
                list: tempList || [],
            };
        case GET:
            return {
                ...state,
                list: action.list || [],
            };
        default:
            return state;
    }
};

// Utils
// Generate simple unique id
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ID_LENGTH = 8;

const generateId = () => {
    let rtn = '';
    for (let i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
};
