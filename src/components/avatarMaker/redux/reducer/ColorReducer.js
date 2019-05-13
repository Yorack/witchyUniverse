import Immutable from "immutable";

const initialState = {
    hair: 0,
    eye: 0,
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
            newState = initialState;
            break;

        default:
            return newState;
    }

    return newState
}