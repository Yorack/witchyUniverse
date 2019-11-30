export const actions = {
    selectColor: (color, group) => {
        return {
            type: 'SELECT_COLOR',
            color,
            group,
        };
    },

    selectModel: (model, group) => {
        return {
            type: 'SELECT_MODEL',
            model,
            group,
        };
    },

    selectShape: (shape, group) => {
        return {
            type: 'SELECT_SHAPE',
            shape,
            group,
        };
    },

    resetAvatar: () => {
        return {
            type: 'RESET_AVATAR',
            payload: 'NULL'
        };
    },

    saveAvatar: () => {
        return {
            type: 'SAVE_AVATAR',
            payload: 'NULL'
        };
    },

    randomAvatar: () => {
        return {
            type: 'RANDOM_AVATAR',
        };
    },
};
