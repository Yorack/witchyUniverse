export const actions = {
    selectColor: (color, group) => {
        return {
            type: 'SELECT_COLOR',
            color: color,
            group: group,
        };
    },
    resetAvatar: () => {
        return {
            type: 'RESET_AVATAR',
            payload: 'NULL'
        };
    },
    randomAvatar: () => {
        return {
            type: 'RANDOM_AVATAR',
        };
    },
};