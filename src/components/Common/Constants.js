import Color from '../avatarMaker/entity/Color.js';
import Shape from '../avatarMaker/entity/Shape';
import EmptyModel from '../avatarMaker/entity/EmptyModel';
import Model from '../avatarMaker/entity/Model';

export default class Constants {
    static CHOOSER_TYPE = {
        COLOR: 'COLOR',
        SHAPE: 'SHAPE',
        MODEL: 'MODEL',
    };

    static DEFAULT_COLOR = [
        new Color('#8e8ed9', 0),
        new Color('#9e9e9e', 1),
        new Color('#794b3b', 2),
        new Color('#ffce76', 3),
        new Color('#774f8f', 4),
        new Color('#b32b84', 5),
        new Color('#75d6c1', 6),
    ];

    static DEFAULT_SHAPE = [
        new Shape('should be an image :)', 1),
        new Shape('should be an image :)', 2),
    ];

    static DEFAULT_MODEL_HAT = [
        new EmptyModel(),
        new Model('may be an image :)', 1),
        new Model('may be an image :)', 2),
    ];

    static AVATAR_MAKER_CHOOSER_GROUP = {
        HAIR: 'hair',
        EYE: 'eye',
    };

    static CLOTH_CHOOSERS_GROUPS = {
        HAT: 'hat',
    };

    static EXPENTION_PANEL_TYPE = {
        SECTION : 'SECTION',
        PANEL : 'PANEL',
    }

    static ANATOMY_CHOOSERS = [
        {
            title: 'Hairs',
            group: this.AVATAR_MAKER_CHOOSER_GROUP.HAIR,
            content: [
                {
                    type: this.CHOOSER_TYPE.SHAPE,
                    shapes: this.DEFAULT_SHAPE,
                },
                {
                    type: this.CHOOSER_TYPE.COLOR,
                    colors: this.DEFAULT_COLOR,
                },
            ],
        },
        // {
        //     title: 'Eyes',
        //     group: this.AVATAR_MAKER_CHOOSER_GROUP.EYE,
        //     content: [
        //         {
        //             type: this.CHOOSER_TYPE.SHAPE,
        //             shapes: [],
        //         },
        //         {
        //             type: this.CHOOSER_TYPE.COLOR,
        //             colors: this.DEFAULT_COLOR,
        //         },
        //     ],
        // },
    ];

    static CLOTHS_CHOOSERS = [
        {
            title: 'Hat',
            group: this.CLOTH_CHOOSERS_GROUPS.HAT,
            content: [
                {
                    type: this.CHOOSER_TYPE.MODEL,
                    models: this.DEFAULT_MODEL_HAT,
                },
            ],
        },
    ];

    static SECTION_CONTAINER = [
        {
            title: 'ANATOMY',
            content: this.ANATOMY_CHOOSERS,
        },
        {
            title: 'CLOTHES',
            content: this. CLOTHS_CHOOSERS,
        }
    ]

}
