import Immutable from 'immutable';
import MathUtils from '../../../../utils/MathUtils.js';
import Constants from '../../../Common/Constants.js';

const initialState = {
    hair: Constants.DEFAULT_COLOR[0],
    eye: Constants.DEFAULT_COLOR[0],
    eyeBrows: Constants.DEFAULT_COLOR[0],
    skin: Constants.SKIN_COLOR[0],
    decoration: Constants.TOOLS_COLORS_SKULL[0], // todo pas bon
};
// const colorMapper = {
//     hair: Constants.DEFAULT_COLOR[0],
//     eye: Constants.DEFAULT_COLOR[0],
//     eyeBrows: Constants.DEFAULT_COLOR[0],
//     skin: Constants.SKIN_COLOR[0],
//     decoration: Constants.TOOLS_COLORS_SKULL[0], // todo pas bon
// };
//
// const getInitialState = () => {
//
//
//     return {
//         hair: Constants.DEFAULT_COLOR[0],
//         eye: Constants.DEFAULT_COLOR[0],
//         eyeBrows: Constants.DEFAULT_COLOR[0],
//         skin: Constants.SKIN_COLOR[0],
//         decoration: Constants.TOOLS_COLORS_SKULL[0],
//     };
// }

export const ColorReducer = (state = initialState, action) => {
    let newState = Immutable.fromJS(state).toJS();

    switch (action.type) {
        case 'SELECT_COLOR':
            newState[action.group] = action.color;
            break;
        case 'RESET_AVATAR':
            newState = initialState;
            break;
        case 'SAVE_AVATAR':
            const witchyAvatar = JSON.parse(localStorage.getItem('witchyAvatar'));
            witchyAvatar.color = state;
            localStorage.setItem('witchyAvatar', JSON.stringify(witchyAvatar));
            break;
        case 'RANDOM_AVATAR':
            newState = {
                hair: Constants.DEFAULT_COLOR[MathUtils.getRandomIntInclusive(0, Constants.DEFAULT_COLOR.length - 1)],
                eye: Constants.DEFAULT_COLOR[MathUtils.getRandomIntInclusive(0, Constants.DEFAULT_COLOR.length - 1)],
                eyeBrows: Constants.DEFAULT_COLOR[MathUtils.getRandomIntInclusive(0, Constants.DEFAULT_COLOR.length - 1)],
                skin: Constants.SKIN_COLOR[MathUtils.getRandomIntInclusive(0, Constants.SKIN_COLOR.length - 1)],
                decoration: state.decoration,
                // decoration: Constants.TOOLS_COLORS[MathUtils.getRandomIntInclusive(0, Constants.TOOLS_COLORS.length - 1)],
            };
            break;
        default:
            return newState;
    }

    return newState;
};
