import React, {Component, useEffect, useState} from 'react';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import * as _ from "lodash";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Constants from "../../Common/Constants";
import Icon from "@material-ui/core/Icon";
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
    }
});

const selectPreviousColor = (colors, selectedColor, actions) => {
    const index = _.indexOf(colors, selectedColor);
    if (index <= 0) {
        return colors[colors.length - 1];
    }

    return colors[index - 1];
};

const selectNextColor = (colors, selectedColor, actions) => {
    const index = _.indexOf(colors, selectedColor);
    if (index === colors.length - 1) {
        return colors[0];
    }

    return colors[index + 1];
};

const ColorChooser = (props) => {
    const {colors, classes, actions, key, group} = props;

    // TODO a récupérer dans le local storage ou le store plutot que 1er valeur
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    useEffect(() => {
        // Update the document title using the browser API
        actions.selectColor(_.indexOf(colors, selectedColor), group);
    }, [selectedColor]);

    return (
        <div key={key} className={classes.root}>
            <div className={'selection-icon'} onClick={() => {setSelectedColor(selectPreviousColor(colors, selectedColor, actions))}}>
                <Icon>keyboard_arrow_left</Icon>
            </div>
            <div className={'color-container'}></div>
            <div className={classes.colorContainer}>
            {
                _.map(colors, (color, index) => {
                    return (
                        <div key={'color' + index} className={color === selectedColor ? `color-selected ` : `color-not-selected`} >
                            <div className={`color-icon`} style={{backgroundColor: color.colorHex}} onClick={() => setSelectedColor(colors[index])}></div>
                        </div>
                    )
                })
            }
            </div>
            <div className={'selection-icon'} onClick={() => {setSelectedColor(selectNextColor(colors, selectedColor, actions))}}>
                <Icon>keyboard_arrow_right</Icon>
            </div>
        </div>
    )
};


const mapStateToProps = (state, ownProps) => {
    return {
        hairColor: state.color.hair,
    };
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(ColorChooser));
