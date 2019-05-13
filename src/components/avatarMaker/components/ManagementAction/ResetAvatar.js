import React from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';
import {bindActionCreators} from 'redux';
import {actions} from '../../redux/actions';
import {connect} from 'react-redux';
import {darken} from '@material-ui/core/styles/colorManipulator.js';

const styles = theme => ({
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    button: {
        backgroundColor: "#b12782",
        '&:hover': {
            backgroundColor: darken("#b12782", .2),
        },
    },
    iconSmall: {
        fontSize: 20,
        backgroundColor: '#ffffff',
        borderRadius: '25px',
        color: '#b12782',
    },
});

const ResetAvatar = (props) => {
    const {classes} = props;

    return (
        <Button variant="contained" color="primary" className={classes.button} onClick={props.actions.resetAvatar}>
            <Clear className={classNames(classes.leftIcon, classes.iconSmall)} /> Reset
        </Button>
    );
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(ResetAvatar));