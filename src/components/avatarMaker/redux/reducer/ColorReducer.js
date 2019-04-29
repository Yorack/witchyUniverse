import Immutable from "immutable";

const initialState = {
    hair: 1,
    eye: 1,
};

export const ColorReducer = (state = initialState, action) => {
    let newState = Immutable.fromJS(state).toJS();

    switch (action.type) {
        case 'SELECT_COLOR':
            newState[action.group] = action.color;
            return newState;
    }

    return newState
}