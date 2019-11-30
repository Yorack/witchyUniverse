export default class Model {
    constructor(modelImage, index) {
        this.modelImage = modelImage;
        this.index = index;
    }

    equals(otherShape) {
        return otherShape instanceof Model && otherShape.modelImage === this.modelImage;
    }
}
