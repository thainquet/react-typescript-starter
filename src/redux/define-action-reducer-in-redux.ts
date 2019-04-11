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


import axios from 'axios'
import ImageList from 'src/components/ImageList/ImageList';

/* TYPES */
const GET = 'Image/GET';
const ADD_IMG = 'IMG/ADD';
const QUERY = 'IMG/API'

/* ACTIONS */
export const searchImg = (query: string) => {
    return (dispatch: any) => {
        axios.get('https://api.giphy.com/v1/gifs/search'+ '?api_key=eLRMI9GctVULzps6opaxg25yY8ULID5s&q=' + query + '&limit=20')
        .then(res => {
            dispatch({
                list: res.data.data,
                type: QUERY
            });
        })
    }
}

export const showImgAvai = () => {
    return (dispatch: any) => {
        const list = JSON.parse(localStorage.getItem('imgList'));
        dispatch({
            list,
            type: GET
        });
    }
}

export const addImg = (input: string) => {
    return (dispatch: any) => {
        dispatch({
            url: input,
            type: ADD_IMG,
        });
    };
};

/* SELECTORS */

/* REDUCER */
export const ImageReducer = (
    state = initialState, action: { type: string, url: string, list: Array<Image>, Image: Image }) => {
    let tempList: Image[];
    switch (action.type) {
        case ADD_IMG:
            const newImage: Image = {
                id: generateId(),
                url: action.url
            };
            tempList = state.list;
            tempList.push(newImage);

            localStorage.setItem('imgList', JSON.stringify(tempList));
            return {
                ...state,
                list: tempList || [],
            };
        case GET:
            tempList = JSON.parse(localStorage.getItem('imgList'));
            return {
                ...state,
                list: tempList
            };
        case QUERY:         
            let newList: Image[] = [];
            action.list.forEach((i: any) => {
                newList.push({ id: i.id, url: i.images.downsized_medium.url})
            });
            return {
                ...state,
                list: [...newList]
            }
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
