import React, {Component} from 'react';
import {Link} from "react-router-dom";
import image1 from 'assets/img/icon-workshop.PNG';
import image2 from 'assets/img/icon-witch-maker.PNG';
import image3 from 'assets/img/icon-pet.PNG';
import image4 from 'assets/img/icon-blog.PNG';
import image5 from 'assets/img/icon-shop.PNG';

export default class Menu extends Component {
    static defaultProps = {
        menuClass: 'menu'
    }

    render() {
        return (
            <div className={this.props.menuClass}>
                <Link to={"/"}>
                    <img src={image1} alt="item 1"/>
                    item 1
                </Link>
                <Link to={"/avatar"}>
                    <img src={image2} alt="item 1"/>
                    item 2
                </Link>
                <Link to={"/"}>
                    <img src={image3} alt="item 1"/>
                    item 3
                </Link>
                <Link to={"/"}>
                    <img src={image4} alt="item 1"/>
                    item 4
                </Link>
                <Link to={"/"}>
                    <img src={image5} alt="item 1"/>
                    item 5
                </Link>
            </div>
        );
    }
}
