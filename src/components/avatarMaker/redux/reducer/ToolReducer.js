import Immutable from 'immutable';
import _ from 'lodash';
import MathUtils from '../../../../utils/MathUtils';
import Constants from '../../../Common/Constants';

const initialState = {
    decoration: Constants.TOOLS_TOP_LEFT[0],
};

export const ToolReducer = (state = initialState, action) => {
    let newState = Immutable.fromJS(state).toJS();

    switch (action.type) {
        case 'SELECT_TOOL':
            console.log(`Select tool from ${action.group}: ${action.tool}`)
            newState[action.group] = action.tool;
            break;
        case 'RESET_AVATAR':
            newState = initialState;
            break;
        case 'RANDOM_AVATAR':
            _.each(newState, (shapeIndex, index) => {
                const randomIndex = MathUtils.getRandomIntInclusive(0, Constants.TOOLS_TOP_LEFT.length - 1);
                newState[index] = Constants.TOOLS_TOP_LEFT[randomIndex];
            });
            break;
        case 'SAVE_AVATAR':
            const witchyAvatar = JSON.parse(localStorage.getItem('witchyAvatar'));
            witchyAvatar.tool = state;
            localStorage.setItem('witchyAvatar', JSON.stringify(witchyAvatar));
            break;
        default:
            return newState;
    }


    return newState
}
