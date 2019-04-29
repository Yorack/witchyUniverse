export const actions = {
    selectColor: (color, group) => {
        return {
            type: 'SELECT_COLOR',
            color: color,
            group: group,
        }
    }
}