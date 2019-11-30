import Immutable from 'immutable';
import _ from 'lodash';
import MathUtils from '../../../../utils/MathUtils';
import Constants from '../../../Common/Constants';

const initialState = {
    hat: Constants.DEFAULT_MODEL_HAT[0],
};

export const ModelReducer = (state = initialState, action) => {
    let newState = Immutable.fromJS(state).toJS();

    switch (action.type) {
        case 'SELECT_MODEL':
            console.log(`Select model from ${action.group}: ${action.model}`)
            newState[action.group] = action.model;
            break;
        case 'RESET_AVATAR':
            newState = initialState;
            break;
        case 'RANDOM_AVATAR':
            _.each(newState, (shapeIndex, index) => {
                const randomIndex = MathUtils.getRandomIntInclusive(0, Constants.DEFAULT_SHAPE.length - 1);
                newState[index] = Constants.DEFAULT_SHAPE[randomIndex];
            });
            break;
        case 'SAVE_AVATAR':
            const witchyAvatar = JSON.parse(localStorage.getItem('witchyAvatar'));
            witchyAvatar.shape = state;
            localStorage.setItem('witchyAvatar', JSON.stringify(witchyAvatar));
            break;
        default:
            return newState;
    }


    return newState
}
