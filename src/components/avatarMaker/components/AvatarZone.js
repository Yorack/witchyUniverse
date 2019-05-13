import React from 'react';
import {connect} from 'react-redux';

const AvatarZone = (props) => {
    return (
        <div className='avatar-zone-container'>
            <div className="avatar">
            {/*<h2>hair color: {props.hairColor}</h2>*/}
            {/*<h2>eye color: {props.eyeColor}</h2>*/}

            {/*<img className={'body-image'} src={`${process.env.PUBLIC_URL}/Body/ears01_color01.png`} alt="item 1"/>*/}
            {/*<img className={'body-image'} src={`${process.env.PUBLIC_URL}/Body/head01_color01.png`} alt="item 2"/>*/}
            {/*<img className={'body-image'} src={`${process.env.PUBLIC_URL}/Body/tophead_color01.png`} alt="item 3"/>*/}
            {/*<img className={'body-image'} src={`${process.env.PUBLIC_URL}/Body/torse_skin01.PNG`} alt="item 4"/>*/}
            {/*<img className={'body-image'} src={`${process.env.PUBLIC_URL}/Hairs/hairs02_color0${props.hairColor}.png`} alt="item 5"/>*/}

            {/*<img src={`${process.env.PUBLIC_URL}/Hairs/eye02_color0${props.eyeColor}.png`} alt="item 1"/>*/}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        hairColor: state.color.hair + 1,
        eyeColor: state.color.eye + 1,
    };
}

export default connect(mapStateToProps)(AvatarZone);
