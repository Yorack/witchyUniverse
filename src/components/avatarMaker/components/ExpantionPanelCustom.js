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
import ColorChooser from "./ColorChooser";

const styles = theme => ({
    root: {
        width: '100%',
    },
    panelContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#b8bbcb',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

export class ExpantionPanelCustom extends Component {
    static propTypes = {
        panelContent: PropTypes.object,
    };

    renderPanelContent = (content, group) => {
        if (!content) {
            return <div>empty :)</div>
        }

        const contentArray = [];
        _.forEach(content, (content, index) => {
            const key = `${content.type}_${index}`;

            switch (content.type) {
                case Constants.CHOOSER_TYPE.SHAPE:
                    contentArray.push(<div key={key}><h1>there should be a shape chooser tbd</h1></div>);
                    break;
                case Constants.CHOOSER_TYPE.COLOR:
                    contentArray.push(<ColorChooser key={key} colors={content.colors} group={group}/>);
                    break;
            }
        })

        return contentArray;
    }

    render() {
        const {classes, panelContent, key} = this.props;

        return (
            <div key={key} className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{panelContent.title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelContainer}>
                        {this.renderPanelContent(panelContent.content, panelContent.group)}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default withStyles(styles)(ExpantionPanelCustom);
