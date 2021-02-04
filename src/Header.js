import React, { Component } from "react";
import menuImg from './imgs/menu-btn.png';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <button className="menuBtn"><img className="menuImg" src={menuImg} alt=""/></button>
                <div className="balance"></div>
                <div className="bet"></div>
            </div>
        )
    }
}

export default Header