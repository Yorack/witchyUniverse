import Immutable from 'immutable';
import MathUtils from '../../../../utils/MathUtils.js';
import _ from 'lodash';
import Constants from '../../../Common/Constants.js';

const initialState = {
    hair: Constants.DEFAULT_COLOR[0],
    eye: Constants.DEFAULT_COLOR[0],
};

export const ColorReducer = (state = initialState, action) => {
    let newState = Immutable.fromJS(state).toJS();

    switch (action.type) {
        case 'SELECT_COLOR':
            newState[action.group] = action.color;
            break;
        case 'RESET_AVATAR':
            newState = initialState;
            break;
        case 'RANDOM_AVATAR':
            _.each(newState, (colorIndex, index) => {
                const randomIndex = MathUtils.getRandomIntInclusive(0, 6);
                newState[index] = Constants.DEFAULT_COLOR[randomIndex];//MathUtils.getRandomIntInclusive(0, 6);
            });
            break;

        default:
            return newState;
    }

    return newState;
};