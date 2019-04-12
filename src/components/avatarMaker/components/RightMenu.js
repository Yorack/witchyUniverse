import React, {Component} from "react";
import ExpantionPanelCustom from "./ExpantionPanelCustom";
import Constants from "../../Common/Constants";
import * as _ from 'lodash';

export default class RightMenu extends Component {
    render() {
        return <div className='right-menu-container'>
            {
                _.map(Constants.AVATAR_MAKER_CHOOSER, chooser => {
                    return (
                        <ExpantionPanelCustom panelContent={chooser} />
                    )
                })
            }
        </div>
    }
}
