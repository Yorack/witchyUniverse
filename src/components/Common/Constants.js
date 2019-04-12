

export default class Constants {
    static CHOOSER_TYPE = {
        COLOR: "COLOR",
        SHAPE: "SHAPE",
    }

    static HAIR_COLOR = [
        '#75d6c1',
        '#b32b84',
        '#774f8f',
        '#ffce76',
        '#8e8ed9',
        '#9e9e9e',
        '#794b3b',
    ]

    static AVATAR_MAKER_CHOOSER = [
        {
            title: 'Hairs',
            content: [
                {
                    type: this.CHOOSER_TYPE.SHAPE,
                },
                {
                    type: this.CHOOSER_TYPE.COLOR,
                    colors: this.HAIR_COLOR,
                }
            ]
        },
        {
            title: 'Eyes',
            content: [
                {
                    type: this.CHOOSER_TYPE.SHAPE,
                },
                {
                    type: this.CHOOSER_TYPE.COLOR,
                    colors: this.HAIR_COLOR,
                }
            ]
        }
    ]
}
