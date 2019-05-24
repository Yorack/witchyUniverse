import React from 'react';
import {withStyles} from '@material-ui/core';
import * as _ from 'lodash';
import Icon from '@material-ui/core/Icon';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '../redux/actions';

const style = () => ({
    root: {
        display: 'flex',
    },
    colorContainer: {
        display: 'flex',
        padding: '0 25px',
        flexGrow: 1,
        justifyContent: 'space-evenly',
    },
});

const selectPreviousColor = (colors, selectedColor) => {
    const index = _.indexOf(colors, selectedColor);
    if (index <= 0) {
        return colors[colors.length - 1];
    }

    return colors[index - 1];
};

const selectNextColor = (colors, selectedColor) => {
    const index = _.indexOf(colors, selectedColor);
    if (index === colors.length - 1) {
        return colors[0];
    }

    return colors[index + 1];
};

const ColorChooser = (props) => {
    const {colors, classes, actions, key, group, selectedColor} = props;

    const selectColor = (selectedColor) => {
        actions.selectColor(_.indexOf(colors, selectedColor), group);
    };

    return (
        <div key={key} className={classes.root}>
            <div className={'selection-icon'} onClick={() => {
                selectColor(selectPreviousColor(colors, selectedColor));
            }}>
                <Icon>keyboard_arrow_left</Icon>
            </div>
            <div className={'color-container'}></div>
            <div className={classes.colorContainer}>
                {
                    _.map(colors, (color, index) => {
                        return (
                            <div key={'color' + index} className={color === selectedColor ? `color-selected ` : `color-not-selected`}>
                                <div className={`color-icon`} style={{backgroundColor: color.colorHex}}
                                     onClick={() => selectColor(colors[index])}></div>
                            </div>
                        );
                    })
                }
            </div>
            <div className={'selection-icon'} onClick={() => {
                selectColor(selectNextColor(colors, selectedColor));
            }}>
                <Icon>keyboard_arrow_right</Icon>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    // todo faut rendre paramétrable avec le ownProps.group
    return {
        selectedColor: state.color[ownProps.group],
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(ColorChooser));
