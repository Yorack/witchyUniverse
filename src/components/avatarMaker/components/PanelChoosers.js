import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import Constants from '../../Common/Constants';
import ColorChooser from './Chooser/ColorChooser';
import ShapeChooser from './Chooser/ShapeChooser.js';
import ToolChooser from './Chooser/ToolChooser.js';
import ModelChooser from './Chooser/ModelChooser';

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
                case Constants.CHOOSER_TYPE.MODEL:
                    contentArray.push(<ModelChooser key={key} models={content.models} group={group}/>);
                    break;
                case Constants.CHOOSER_TYPE.TOOLS:
                    contentArray.push(<ToolChooser key={key} tools={content.tools} group={group}/>);
                    break;
            }
        })

        return contentArray;
    }
}

export default PanelChoosers;
