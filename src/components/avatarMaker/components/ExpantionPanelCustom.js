import React, {Component} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import * as _ from "lodash";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Constants from "../../Common/Constants";
import ColorChooser from "./Chooser/ColorChooser";
import Avatar from '@material-ui/core/Avatar';
import ShapeChooser from './Chooser/ShapeChooser.js';

const styles = theme => ({
    root: {
        width: '100%',
    },
    panelContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#b8bbcb',
    },
    sectionContainerSection: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'b8bbcb',
        padding: 0,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    expansionPanelSummary: {
        backgroundColor: '#5b5f84',
    },
    sectionPanelSummary: {
        backgroundColor: '#07062a',
    },
    expansionPanelContent: {
        display: 'flex',
        alignItems: 'baseline',
    },
    expansionPanelSummaryTitle: {
        color: '#ffffff'
    },
    expandIcon: {
        color: '#ffffff'
    },
    avatar: {
        marginRight: 15,
    }
});

export class ExpantionPanelCustom extends Component {
    render() {
        const {classes, content, title, key, type} = this.props;
        const isTypeSection = type === Constants.EXPENTION_PANEL_TYPE.SECTION;
        const summaryClass = isTypeSection ? classes.sectionPanelSummary : classes.expansionPanelSummary;
        const detailClass = isTypeSection ? classes.sectionContainerSection : classes.panelContainer;

        return (
            <div key={key} className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary className={summaryClass} expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}>
                        <div className={classes.expansionPanelContent}>
                            <Avatar aria-label={title} className={classes.avatar}>
                                {title[0]}
                            </Avatar>
                            <Typography className={classes.expansionPanelSummaryTitle} variant="h5">
                                {title}
                            </Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={detailClass}>
                        {content}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default withStyles(styles)(ExpantionPanelCustom);
