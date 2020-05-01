import React, {Component} from 'react';
import Menu from '../menu/Menu';
import RightMenu from './components/RightMenu';
import '../../AvatarMaker.css';
import AvatarZone from './components/AvatarZone';
import {Provider} from 'react-redux';
import Store from './redux/Store.js';

export default class AvatarMaker extends Component {
    render() {
        const store = Store.initialize();
        return (
            <Provider store={store}>
                <Menu menuClass='top-menu'/>
                <div className={'avatar-maker-container'}>
                    <AvatarZone/>
                    <RightMenu/>
                </div>
            </Provider>
        );
    }
}
