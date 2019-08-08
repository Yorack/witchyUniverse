import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {withStyles} from '@material-ui/core';
import classNames from 'classnames';
import {darken} from '@material-ui/core/es/styles/colorManipulator.js';
import {bindActionCreators} from 'redux';
import {actions} from '../../redux/actions';
import {connect} from 'react-redux';

const styles = theme => ({
    button: {
        backgroundColor: "#24c5c5",
        '&:hover': {
            backgroundColor: darken("#24c5c5", .2),
        },
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

const SaveAvatar = (props) => {
    const {classes} = props;

    return (
        <Button variant="contained" color="primary" className={classes.button} onClick={props.actions.saveAvatar}>
            <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} /> Save
        </Button>
    );
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});


export default connect(null, mapDispatchToProps)(withStyles(styles)(SaveAvatar));
