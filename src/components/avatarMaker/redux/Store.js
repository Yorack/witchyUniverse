import {combineReducers, createStore} from 'redux';
import {ColorReducer} from './reducer/ColorReducer.js';
import {ShapeReducer} from './reducer/ShapeReducer.js';
import {ModelReducer} from './reducer/ModelReducer';
import {ToolReducer} from './reducer/ToolReducer';

export default class Store {
    static initialize = () => {
        const store = createStore(this.createReducers(), this.getInitialState()); // no middleware for now
        // todo envoyer un event d'initialisation
        // pour pouvoir detecter les pb d'historique
        return store;
    };

    static getInitialState = () => {
        const witchyAvatar = localStorage.getItem('witchyAvatar');

        if (!witchyAvatar) {
            localStorage.setItem('witchyAvatar', JSON.stringify({}));
            return {};
        }

        return JSON.parse(witchyAvatar);
    };

    static createReducers = () => {
        return combineReducers({
            color: ColorReducer,
            shape: ShapeReducer,
            model: ModelReducer,
            tool: ToolReducer,
        });
    };
}
