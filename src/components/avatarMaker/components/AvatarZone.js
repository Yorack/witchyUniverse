import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import mergeImages from 'merge-images';

const AvatarZone = (props) => {
    const [mergedImage, setMergedImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const test1 = `${process.env.PUBLIC_URL}/Hairs/hairs0${props.hairShapeIndex}_color0${props.hairColorIndex}.png`;
        const imageToMerge = [
            `${process.env.PUBLIC_URL}/Body/Skin00.png`,
            `${process.env.PUBLIC_URL}/EyeBrows/Eyebrows01_color01.png`,
            `${process.env.PUBLIC_URL}/Eyes/Eyes01_color01.png`,
            `${process.env.PUBLIC_URL}/Mouths/Mouth01.png`,
            `${process.env.PUBLIC_URL}/Clothes/Necromancers/dress_Necromancer01.png`,
            test1,
        ];
        const hat = props.hatModel.index > 0 ?
            `${process.env.PUBLIC_URL}/Clothes/Necromancers/Hat0${props.hatModel.index}.png` : null;

        if (hat) {
            imageToMerge.push(hat);
        }
        setLoading(true);
        mergeImages(imageToMerge).then(b64 => {
            setMergedImage(b64);
            setLoading(false);
        });
    }, [props]);

    return (
        <div className='avatar-zone-container'>
            <div className="avatar">
            {/*<h2>hair color: {props.hairColor}</h2>*/}
            {/*<h2>eye color: {props.eyeColor}</h2>*/}

                {loading ? 'LOADING...' : mergedImage ? <img className={'body-image'} src={mergedImage} alt="item 1"/> : null}

                {/*<img className={'body-image hidden'} src={`${process.env.PUBLIC_URL}/Body/ears01_color01.png`} alt="item 1"/>*/}
                {/*<img className={'body-image hidden'} src={`${process.env.PUBLIC_URL}/Body/head01_color01.png`} alt="item 2"/>*/}
                {/*<img ref={imgTopHead} className={'body-image hidden'} src={`${process.env.PUBLIC_URL}/Body/tophead_color01.png`} alt="item 3"/>*/}
                {/*<img ref={imgTorso} className={'body-image hidden'} src={`${process.env.PUBLIC_URL}/Body/torse_skin01.PNG`} alt="item 4"/>*/}
                {/*<img className={'body-image hidden'} src={`${process.env.PUBLIC_URL}/Hairs/hairs0${props.hairShapeIndex}_color0${props.hairColorIndex}.png`} alt="item 5"/>*/}


                {/*<img className={'body-image'} src={`${process.env.PUBLIC_URL}/Hairs/eye02_color0${props.eyeColor}.png`} alt="item 1"/>*/}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        hairShapeIndex: state.shape.hair.index,
        hatModel: state.model.hat,

        hairColorIndex: state.color.hair.index + 1,
        eyeColor: state.color.eye.index + 1,
    };
}

export default connect(mapStateToProps)(AvatarZone);
