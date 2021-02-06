import React, { Component } from "react";
import dice1Img from "./imgs/dice1.png";
import dice2Img from "./imgs/dice2.png";
import rollBtnImg from "./imgs/roll-btn.png";
import guideImg from "./imgs/guide.png";
import paytableImg from "./imgs/paytable.png";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    console.log("Roll changed!");
  }
  render() {
    return (
      <div className="footer">
        <div className="anySeven">
          <div className="anySevenImg"></div>
        </div>
        <div className="diceArea">
          <img src={dice1Img} className="dice1Img" alt="" />
          <img src={dice2Img} className="dice2Img" alt="" />
        </div>
        <div className="bottomArea">
          <a href="/">
            <img className="guideImg" src={guideImg} alt="" />
          </a>
          <button className="rollBtn" onClick={this.rollDice}>
            <img className="rollBtnImg" src={rollBtnImg} alt="" />
          </button>
          <a href="/">
            <img className="paytableImg" src={paytableImg} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
