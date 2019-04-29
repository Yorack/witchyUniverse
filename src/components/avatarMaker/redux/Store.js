import {combineReducers, createStore} from 'redux';
import {ColorReducer} from './reducer/ColorReducer.js';

export default class Store {
    static initialize = () => {
        const store = createStore(this.createReducers(), this.initialState); // no middleware for now

        return store;
    }

    static initialState = {};

    static createReducers = () => {
        return combineReducers({
            color: ColorReducer
        })
    }
}