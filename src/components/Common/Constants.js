import Color from '../avatarMaker/entity/Color.js';

export default class Constants {
    static CHOOSER_TYPE = {
        COLOR: "COLOR",
        SHAPE: "SHAPE",
    }

    static DEFAULT_COLOR = [
        new Color('#75d6c1', 0),
        new Color('#b32b84', 1),
        new Color('#774f8f', 2),
        new Color('#ffce76', 3),
        new Color('#8e8ed9', 4),
        new Color('#9e9e9e', 5),
        new Color('#794b3b', 6),
    ]


    static HAIR_COLOR = [
        '#75d6c1',
        '#b32b84',
        '#774f8f',
        '#ffce76',
        '#8e8ed9',
        '#9e9e9e',
        '#794b3b',
    ]
    static AVATAR_MAKER_CHOOSER_GROUP = {
        HAIR: 'hair',
        EYE: 'eye',
    }

    static AVATAR_MAKER_CHOOSER = [
        {
            title: 'Hairs',
            group: this.AVATAR_MAKER_CHOOSER_GROUP.HAIR,
            content: [
                {
                    type: this.CHOOSER_TYPE.SHAPE,
                },
                {
                    type: this.CHOOSER_TYPE.COLOR,
                    colors: this.DEFAULT_COLOR,
                }
            ]
        },
        {
            title: 'Eyes',
            group: this.AVATAR_MAKER_CHOOSER_GROUP.EYE,
            content: [
                {
                    type: this.CHOOSER_TYPE.SHAPE,
                },
                {
                    type: this.CHOOSER_TYPE.COLOR,
                    colors: this.DEFAULT_COLOR,
                }
            ]
        }
    ]
}
