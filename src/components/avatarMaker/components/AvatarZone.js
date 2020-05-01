import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import mergeImages from 'merge-images';

const AvatarZone = (props) => {
    const [mergedImage, setMergedImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        // const test1 = `${process.env.PUBLIC_URL}/Hairs/hairs0${props.hairShapeIndex}_c0${props.hairColor}.png`;

        console.log(props.decoration)
        console.log(props.decoration.type)
        console.log(props.decorationColor)

        const imageToMerge = [
            `${process.env.PUBLIC_URL}/Body/Skin0${props.skinColor}.png`,
            `${process.env.PUBLIC_URL}/EyeBrows/Eyebrows0${props.eyeBrowsShape}_c0${props.eyeBrowsColor}.png`,
            `${process.env.PUBLIC_URL}/Eyes/eyes0${props.eyeShape}_c0${props.eyeColor}.png`,
            `${process.env.PUBLIC_URL}/Mouths/Mouth0${props.mouthsShape}.png`,
            `${process.env.PUBLIC_URL}/Clothes/Necromancers/dress_Necromancer01.png`,
            `${process.env.PUBLIC_URL}/Hairs/hairs0${props.hairShapeIndex}_c0${props.hairColor}.png`,
            // `${process.env.PUBLIC_URL}/Hairs/hairs0${props.hairShapeIndex}_c0${props.hairColor}.png`,
        ];
        const hat = props.hatModel.index > 0 ?
            `${process.env.PUBLIC_URL}/Clothes/Necromancers/Hat0${props.hatModel.index}.png` : null;


        if (hat) {
            imageToMerge.push(hat);
        }
        if (props.decoration.index > 0) {
            const decorationSrc = props.decoration.src;
            const decoration = `${process.env.PUBLIC_URL}/Tools/${decorationSrc.folder}/Tool_${decorationSrc.fileTitle}_color0${props.decorationColor}.png`;

            imageToMerge.push(decoration);
        }
        setLoading(true);
        mergeImages(imageToMerge).then(b64 => {
            setMergedImage(b64);
            setLoading(false);
        });
    }, [props]);

    useEffect(() => {
        const myHeight = document.getElementsByClassName("avatar")[0].offsetHeight;

        setHeight(myHeight);
    }, [loading]);

    return (
        <div className='avatar-zone-container'>
            <div className="avatar">
            {/*<h2>hair color: {props.hairColor}</h2>*/}
            {/*<h2>eye color: {props.eyeColor}</h2>*/}

                {loading ? 'LOADING...' : mergedImage ? <img className={'body-image'} style={{height: height}} src={mergedImage} alt="item 1"/> : null}

                {/*<img className={'body-image hidden'} src={`${process.env.PUBLIC_URL}/Body/ears01_color01.png`} alt="item 1"/>*/}
                {/*<img className={'body-image hidden'} src={`${process.env.PUBLIC_URL}/Body/head01_color01.png`} alt="item 2"/>*/}
                {/*<img ref={imgTopHead} className={'body-image hidden'} src={`${process.env.PUBLIC_URL}/Body/tophead_color01.png`} alt="item 3"/>*/}
                {/*<img ref={imgTorso} className={'body-image hidden'} src={`${process.env.PUBLIC_URL}/Body/torse_skin01.PNG`} alt="item 4"/>*/}
                {/*<img className={'body-image hidden'} src={`${process.env.PUBLIC_URL}/Hairs/hairs0${props.hairShapeIndex}_color0${props.hairColor}.png`} alt="item 5"/>*/}


                {/*<img className={'body-image'} src={`${process.env.PUBLIC_URL}/Hairs/eye02_color0${props.eyeColor}.png`} alt="item 1"/>*/}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        // shape
        hairShapeIndex: state.shape.hair.index,
        eyeShape: state.shape.eye.index,
        eyeBrowsShape: state.shape.eyeBrows.index,
        mouthsShape: state.shape.mouths.index,
        // color
        skinColor: state.color.skin.index,
        hairColor: state.color.hair.index + 1,
        eyeColor: state.color.eye.index + 1,
        eyeBrowsColor: state.color.eyeBrows.index + 1,
        decorationColor: state.color.decoration.index + 1,
        // clothes
        hatModel: state.model.hat,
        // tools
        decoration: state.tool.decoration,
    };
}

export default connect(mapStateToProps)(AvatarZone);
