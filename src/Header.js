import React, { Component } from "react";
import menuImg from './imgs/menu-btn.png';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <button className="menuBtn"><img className="menuImg" src={menuImg} alt=""/></button>
                <div className="balance">
                    <span>$9,999,999</span>
                </div>
                <div className="bet">
                    <span>$100,000,000</span>
                </div>
            </div>
        )
    }
}

export default Header