import Shape from '../entity/Shape';

export default class ShapeCreatorUtil {

    static creatShapes = (numberOfShape) => {
        const shapeArray = [];
        let index = 0
        while (index < numberOfShape) {
            shapeArray.push(new Shape(index + 1));
            index++;
        }

        return shapeArray;
    }

}
