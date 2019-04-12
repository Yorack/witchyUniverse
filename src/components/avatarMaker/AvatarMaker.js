import React, {Component} from "react";
import Menu from "../menu/Menu";
import RightMenu from "./components/RightMenu";
import '../../AvatarMaker.css';
import AvatarZone from "./components/AvatarZone";


export default class AvatarMaker extends Component {
    render() {

        return <div>
            <Menu menuClass='top-menu' />
            <div className={'avatar-maker-container'}>
                <AvatarZone />
                <RightMenu />
            </div>
        </div>
    }
}
