import React, {Component} from "react";
import ExpantionPanelCustom from "./ExpantionPanelCustom";
import Constants from "../../Common/Constants";
import * as _ from 'lodash';
import ManagementZone from './ManagementZone.js';

export default class RightMenu extends Component {
    render() {
        return <div className='right-menu-container'>
            {
                _.map(Constants.AVATAR_MAKER_CHOOSER, (chooser, index) => {
                    return (
                        <ExpantionPanelCustom key={`expantionPanel_${index}`} panelContent={chooser} />
                    )
                })
            }
            <ManagementZone />
        </div>
    }
}
