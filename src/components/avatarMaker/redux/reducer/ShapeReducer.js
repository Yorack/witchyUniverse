import Immutable from 'immutable';
import _ from 'lodash';
import MathUtils from '../../../../utils/MathUtils';
import Constants from '../../../Common/Constants';

const initialState = {
    hair: Constants.HAIRS_SHAPE[0],
    eye: Constants.EYE_SHAPE[0],
    eyeBrows: Constants.EYE_BROWS_SHAPE[0],
    mouths: Constants.MOUTHS_SHAPE[0],
};

export const ShapeReducer = (state = initialState, action) => {
    let newState = Immutable.fromJS(state).toJS();

    console.log('---------')
    console.log(action.type)
    switch (action.type) {
        case 'SELECT_SHAPE':
            newState[action.group] = action.shape;
            break;
        case 'RESET_AVATAR':
            newState = initialState;
            break;
        case 'RANDOM_AVATAR':
            // _.each(newState, (shapeIndex, index) => {
            //     const randomIndex = MathUtils.getRandomIntInclusive(0, Constants.DEFAULT_SHAPE.length - 1);
            //     newState[index] = Constants.DEFAULT_SHAPE[randomIndex];
            // });
            newState = {
                hair: Constants.HAIRS_SHAPE[MathUtils.getRandomIntInclusive(0, Constants.HAIRS_SHAPE.length - 1)],
                eye: Constants.EYE_SHAPE[MathUtils.getRandomIntInclusive(0, Constants.EYE_SHAPE.length - 1)],
                eyeBrows: Constants.EYE_BROWS_SHAPE[MathUtils.getRandomIntInclusive(0, Constants.EYE_BROWS_SHAPE.length - 1)],
                mouths: Constants.MOUTHS_SHAPE[MathUtils.getRandomIntInclusive(0, Constants.MOUTHS_SHAPE.length - 1)],
            }
            console.log("TEST")
            console.log(newState)
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
