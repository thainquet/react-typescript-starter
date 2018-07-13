interface Todo {
    id: string;
    name: string;
    status: boolean;
}
interface TodoList {
    list: Todo[];
    completedList: Todo[];
}

const initialState: TodoList = {
    list: [],
    completedList: []
};

/* TYPES */
const ADD = 'todo/ADD';
const REMOVE = 'todo/REMOVE';
const UPDATE = 'todo/UPDATE';
const GET = 'todo/GET';

/* ACTIONS */
export const getTodo = () => {
    return (dispatch: any) => {
        try {
            const list = JSON.parse(localStorage.getItem('todoList'));
            dispatch({
                type: GET,
                list
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: GET,
                list: []
            });
        }
    };
};

export const addTodo = (input: string) => {
    return (dispatch: any) => {
        dispatch({
            type: ADD,
            name: input
        });
    };
};

export const updateTodo = (todo: Todo) => {
    return (dispatch: any) => {
        dispatch({
            type: UPDATE,
            todo
        });
    };
};

export const removeTodo = (todo: Todo) => {
    return (dispatch: any) => {
        dispatch({
            type: REMOVE,
            todo
        });
    };
};

/* SELECTORS */


/* REDUCER */
export const todoReducer = (state = initialState, action: { type: string, name: string, list: Todo[], todo: Todo }) => {
    let tempList: Todo[];
    let tempCompList: Todo[];
    switch (action.type) {
        case ADD:
            const newTodo: Todo = {
                id: generateId(),
                name: action.name,
                status: false
            };
            tempList = state.list;
            tempList.push(newTodo);

            localStorage.setItem('todoList', JSON.stringify(tempList));
            return {
                ...state,
                list: tempList || []
            };
        case GET:
            return {
                ...state,
                list: action.list || []
            };
        case UPDATE:
            tempCompList = state.completedList || [];
            tempList = state.list.filter(todo => {
                if (todo.id === action.todo.id) {
                    todo.status = true;
                    tempCompList.push(todo);
                }
                return todo;
            });
            localStorage.setItem('todoList', JSON.stringify(tempList));
            return {
                ...state,
                list: tempList,
                completedList: tempCompList
            };
        case REMOVE:
            tempList = state.list.filter(todo => {
                return todo.id !== action.todo.id;
            });
            localStorage.setItem('todoList', JSON.stringify(tempList));
            return {
                ...state,
                list: tempList
            }
            return {
                ...state,
                list: tempList
            };
        default:
            return state;
    }
};

// Utils
// Generate simple unique id
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ID_LENGTH = 8;

const generateId = function () {
    let rtn = '';
    for (let i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
}
