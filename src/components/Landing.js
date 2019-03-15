import React, {Component} from 'react';
import Menu from "./menu/Menu";

export default class Landing extends Component {
    renderTitle = () => {
        return (
            <div className='title'>
                <span>
                    welcome into  <br /> witchy universe
                </span>
            </div>
        )
    }

    render() {
        return (
            <div className="witchyUniverse">
                <div className='landing'>
                    {this.renderTitle()}
                    <Menu />
                </div>
            </div>
        );
    }
}
