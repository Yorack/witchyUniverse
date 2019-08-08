export default class Color {
    constructor(color, index) {
        this.colorHex = color;
        this.index = index;
    }

    equals(otherColor) {
        return otherColor instanceof Color && otherColor.color === this.color;
    }
}
