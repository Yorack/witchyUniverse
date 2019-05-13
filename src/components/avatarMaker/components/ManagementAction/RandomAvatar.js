import React from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import Refresh from '@material-ui/icons/Refresh';
import {darken} from '@material-ui/core/es/styles/colorManipulator.js';
import {connect} from 'react-redux';
import {actions} from '../../redux/actions';
import {bindActionCreators} from 'redux';

const styles = theme => ({
    button: {
        backgroundColor: "#764e8e",
        '&:hover': {
            backgroundColor: darken("#764e8e", .2),
        },
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

const RandomAvatar = (props) => {
    const {classes} = props;

    return (
        <Button variant="contained" color="primary" className={classes.button} onClick={props.actions.randomAvatar}>
            <Refresh className={classNames(classes.leftIcon, classes.iconSmall)} /> Random
        </Button>
    );
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(RandomAvatar));