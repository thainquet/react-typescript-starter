import { createStore, combineReducers, applyMiddleware, compose as reduxCompose } from "redux";
import thunk from 'redux-thunk';

import { todoReducer } from './todo.redux';
import { ImageReducer } from './define-action-reducer-in-redux'

const compose = typeof window !== 'undefined' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose : reduxCompose;

const rootReducer = combineReducers({
    todo: todoReducer,
    image: ImageReducer
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);

export default store;
