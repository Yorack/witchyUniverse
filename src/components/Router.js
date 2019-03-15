import React, {Component} from 'react';
import {Switch} from 'react-router';
import {Route, Router as ReactRouter} from "react-router-dom";
import Landing from "./Landing";
import createBrowserHistory from "history/createBrowserHistory";
import AvatarMaker from "./avatarMaker/AvatarMaker";

const history = createBrowserHistory();

export default class Router extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: window.location.pathname,
        };
    }

    render() {
        return (
            <ReactRouter history={history}>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/avatar" component={AvatarMaker}/>
                </Switch>
            </ReactRouter>
        );
    }
}
