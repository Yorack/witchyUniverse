export default class Shape {
    constructor(index, label = '') {
        // this.shapeImage = shapeImage;
        this.index = index;
        this.label = label === '' ? index : label;
    }

    // equals (otherShape) {
    //     return otherShape instanceof Shape && otherShape.shapeImage === this.shapeImage;
    // }
}
