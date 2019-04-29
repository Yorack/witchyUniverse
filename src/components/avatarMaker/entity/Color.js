export default class Color {
    constructor(color, order) {
        this.colorHex = color;
        console.log("Constructeur de couleur :)")
        this.order = order;
    }

    equals(otherColor) {
        return otherColor instanceof Color && otherColor.color === this.color;
    }
}