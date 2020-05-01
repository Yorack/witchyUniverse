import Color from '../avatarMaker/entity/Color.js';
import Shape from '../avatarMaker/entity/Shape';
import EmptyModel from '../avatarMaker/entity/EmptyModel';
import Model from '../avatarMaker/entity/Model';
import Tools from '../avatarMaker/entity/Tools';

export default class Constants {
    static CHOOSER_TYPE = {
        COLOR: 'COLOR',
        SHAPE: 'SHAPE',
        MODEL: 'MODEL',
        TOOLS: 'TOOLS',
    };

    static DEFAULT_COLOR = [
        new Color('#8e8ed9', 0),
        new Color('#9e9e9e', 1),
        new Color('#794b3b', 2),
        new Color('#ffce76', 3),
        new Color('#774f8f', 4),
        new Color('#b32b84', 5),
        new Color('#75d6c1', 6),
        new Color('#000000', 7), // todo demander cet couleur
    ];

    static SKIN_COLOR = [
        new Color('#8e8ed9', 0),
        new Color('#9e9e9e', 1),
        new Color('#794b3b', 2),
        new Color('#ffce76', 3),
        new Color('#774f8f', 4), // todo demander les code de couleur pour la peau
        new Color('#774f8f', 5), // todo demander les code de couleur pour la peau
        new Color('#774f8f', 6), // todo demander les code de couleur pour la peau
    ];

    // todo a trouver une solution 'Ø'
    static EYE_BROWS_SHAPE = [
        new Shape(1),
        new Shape(2),
        new Shape(3),
    ];

    static HAIRS_SHAPE = [
        new Shape(1),
        new Shape(2),
        new Shape(3),
        new Shape(4),
    ];

    static MOUTHS_SHAPE = [
        new Shape(1),
        new Shape(2),
        new Shape(3),
        new Shape(5),
    ];

    static EYE_SHAPE = [
        new Shape(1),
        new Shape(2),
        new Shape(3),
        // new Shape(4),
        new Shape(5),
        new Shape(6),
    ];

    static DEFAULT_MODEL_HAT = [
        // todo un abstract model
        new EmptyModel(),
        new Model('may be an image :)', 1),
        new Model('may be an image :)', 2),
    ];

    static TOOLS_COLORS_GHOST = [
        new Color('#8e8ed9', 0),
        new Color('#9e9e9e', 1),
        new Color('#794b3b', 2),
        new Color('#ffce76', 3),
    ];

    static TOOLS_COLORS_FLASK = [
        new Color('#8e8ed9', 0),
        new Color('#9e9e9e', 1),
        new Color('#794b3b', 2),
        new Color('#ffce76', 3),
        new Color('#774f8f', 4),
    ];

    static TOOLS_COLORS_SKULL = [
        new Color('#8e8ed9', 0),
        new Color('#9e9e9e', 1),
        new Color('#794b3b', 2),
    ];

    static TOOLS_TOP_LEFT = [
        // todo un abstract tool maybe
        new Tools(0, 'Ø', []),
        new Tools(1, 'flames', this.TOOLS_COLORS_GHOST, {
            folder: 'Flames',
            fileTitle: 'ghost'
        }),
        new Tools(2, 'flasks', this.TOOLS_COLORS_FLASK, {
            folder: 'Flasks',
            fileTitle: 'flask'
        }),
        new Tools(3, 'skull', this.TOOLS_COLORS_SKULL, {
            folder: 'Skull',
            fileTitle: 'flame'
        }),
    ];

    static AVATAR_MAKER_CHOOSER_GROUP = {
        SKIN: 'skin',
        HAIR: 'hair',
        EYE_BROWS: 'eyeBrows',
        EYE: 'eye',
        MOUTHS: 'mouths',
    };

    static CLOTH_CHOOSERS_GROUPS = {
        HAT: 'hat',
    };

    static TOOL_CHOOSERS_GROUPS = {
        DECORATION: 'decoration',
    };

    static EXPENTION_PANEL_TYPE = {
        SECTION: 'SECTION',
        PANEL: 'PANEL',
    };

    static ANATOMY_CHOOSERS = [
        {
            title: 'Skins',
            group: this.AVATAR_MAKER_CHOOSER_GROUP.SKIN,
            content: [
                {
                    type: this.CHOOSER_TYPE.COLOR,
                    colors: this.SKIN_COLOR,
                },
            ],
        },
        {
            title: 'Hairs',
            group: this.AVATAR_MAKER_CHOOSER_GROUP.HAIR,
            content: [
                {
                    type: this.CHOOSER_TYPE.SHAPE,
                    shapes: this.HAIRS_SHAPE,
                },
                {
                    type: this.CHOOSER_TYPE.COLOR,
                    colors: this.DEFAULT_COLOR,
                },
            ],
        },
        {
            title: 'EyeBrows',
            group: this.AVATAR_MAKER_CHOOSER_GROUP.EYE_BROWS,
            content: [
                {
                    type: this.CHOOSER_TYPE.SHAPE,
                    shapes: this.EYE_BROWS_SHAPE,
                },
                {
                    type: this.CHOOSER_TYPE.COLOR,
                    colors: this.DEFAULT_COLOR,
                },
            ],
        },
        {
            title: 'Eyes',
            group: this.AVATAR_MAKER_CHOOSER_GROUP.EYE,
            content: [
                {
                    type: this.CHOOSER_TYPE.SHAPE,
                    shapes: this.EYE_SHAPE,
                },
                {
                    type: this.CHOOSER_TYPE.COLOR,
                    colors: this.DEFAULT_COLOR,
                },
            ],
        },
        {
            title: 'Mouths',
            group: this.AVATAR_MAKER_CHOOSER_GROUP.MOUTHS,
            content: [
                {
                    type: this.CHOOSER_TYPE.SHAPE,
                    shapes: this.MOUTHS_SHAPE,
                }
            ],
        },
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

    static TOOLS_CHOOSERS = [
        {
            title: 'Decoration',
            group: this.TOOL_CHOOSERS_GROUPS.DECORATION,
            content: [
                {
                    type: this.CHOOSER_TYPE.TOOLS,
                    tools: this.TOOLS_TOP_LEFT,
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
            content: this.CLOTHS_CHOOSERS,
        },
        {
            title: 'TOOLS',
            content: this.TOOLS_CHOOSERS,
        }
    ];

}
