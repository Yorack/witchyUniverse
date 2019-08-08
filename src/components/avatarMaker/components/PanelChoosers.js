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

export class PanelChoosers extends Component {
    static propTypes = {
        content: PropTypes.array,
    };

    render() {
        const {content, group} = this.props;

        const contentArray = [];
        _.forEach(content, (content, index) => {
            const key = `${content.type}_${index}`;

            switch (content.type) {
                case Constants.CHOOSER_TYPE.SHAPE:
                    // contentArray.push(<div key={key}><h1>there should be a shape chooser tbd</h1></div>);
                    contentArray.push(<ShapeChooser key={key} shapes={content.shapes} group={group}/>);
                    break;
                case Constants.CHOOSER_TYPE.COLOR:
                    contentArray.push(<ColorChooser key={key} colors={content.colors} group={group}/>);
                    break;
            }
        })

        return contentArray;
    }
}

export default PanelChoosers;
