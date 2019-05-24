import Immutable from "immutable";

const initialState = {
    hair: 1,
    eye: 1,
};

export const ShapeReducer = (state = initialState, action) => {
    let newState = Immutable.fromJS(state).toJS();

    switch (action.type) {
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