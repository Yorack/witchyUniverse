import React from 'react';
import {connect} from 'react-redux';

const AvatarZone = (props) => {

    return <div className='avatar-zone-container'>
       <div>This should be the Avatar zone</div>

        <div className="avatar">
            <h2>hair color: {props.hairColor}</h2>
            <h2>eye color: {props.eyeColor}</h2>
            {/*<img src={`${process.env.PUBLIC_URL}/Hairs/hairs02_color0${props.hairColor}.png`} alt="item 1"/>*/}
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        hairColor: state.color.hair + 1,
        eyeColor: state.color.eye + 1,
    };
}

export default connect(mapStateToProps)(AvatarZone);
