import React, {Component} from 'react';
import ExpantionPanelCustom from './ExpantionPanelCustom';
import Constants from '../../Common/Constants';
import * as _ from 'lodash';
import ManagementZone from './ManagementZone.js';
import PanelChoosers from './PanelChoosers';

export default class RightMenu extends Component {
    renderSectionContent = (content) => {
        return (
            _.map(content, (chooser, index) => {
                return (
                    <ExpantionPanelCustom key={`expantionPanel_${index}`}
                                          type={Constants.EXPENTION_PANEL_TYPE.PANEL}
                                          title={chooser.title}
                                          content={<PanelChoosers content={chooser.content} group={chooser.group}/>}/>
                );
            })
        );
    };

    render() {
        return <div className='right-menu-container'>
            {
                _.map(Constants.SECTION_CONTAINER, (section, index) => {
                    return (
                        <ExpantionPanelCustom key={`sectionPanel_${index}`}
                                              type={Constants.EXPENTION_PANEL_TYPE.SECTION}
                                              title={section.title}
                                              content={this.renderSectionContent(section.content)}/>
                    );
                })
            }
            <ManagementZone/>
        </div>;
    }
}
