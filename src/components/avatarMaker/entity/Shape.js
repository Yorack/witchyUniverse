export default class Shape {
    constructor(shapeImage, index) {
        this.shapeImage = shapeImage;
        this.index = index;
    }

    equals(otherShape) {
        return otherShape instanceof Shape && otherShape.shapeImage === this.shapeImage;
    }
}
