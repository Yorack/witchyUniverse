import React, {Component, useState} from "react";
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

const selectPreviousColor = (colors, selectedColor) => {
    const index = _.indexOf(colors, selectedColor);
    if (index <= 0) {
        return colors[colors.length - 1];
    }

    console.log(index - 1);
    console.log(colors.length);

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
    const {colors, classes} = props;

    // TODO a récupérer dans le local storage ou le store plutot que 1er valeur
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div className={classes.root}>
            <div className={'selection-icon'} onClick={() => {setSelectedColor(selectPreviousColor(colors, selectedColor))}}>
                <Icon>keyboard_arrow_left</Icon>
            </div>
            <div className={'color-container'}></div>
            <div className={classes.colorContainer}>
            {
                _.map(colors, (color, index) => {
                    return (
                        <div className={color === selectedColor ? `color-selected ` : `color-not-selected`} >
                            <div className={`color-icon`} style={{backgroundColor: color}} onClick={() => setSelectedColor(colors[index])}></div>
                        </div>
                    )
                })
            }
            </div>
            <div className={'selection-icon'} onClick={() => {setSelectedColor(selectNextColor(colors, selectedColor))}}>
                <Icon>keyboard_arrow_right</Icon>
            </div>
        </div>
    )
};

export default withStyles(style)(ColorChooser);
