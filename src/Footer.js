import React, { Component } from "react";
import dice1Img from "./imgs/dice1.png";
import dice2Img from "./imgs/dice2.png";
import dice3Img from "./imgs/dice3.png";
import dice4Img from "./imgs/dice4.png";
import dice5Img from "./imgs/dice5.png";
import dice6Img from "./imgs/dice6.png";
import rollBtnImg from "./imgs/roll-btn.png";
import guideImg from "./imgs/guide.png";
import paytableImg from "./imgs/paytable.png";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.rollDice = this.rollDice.bind(this);
    this.state = {
      img_path1: dice5Img,
      alt1: "dice5",
      img_path2: dice2Img,
      alt2: "dice2",
    };
  }

  rollDice() {
    const items = [
      { ItemName: "dice1", ItemImg: dice1Img },
      { ItemName: "dice2", ItemImg: dice2Img },
      { ItemName: "dice3", ItemImg: dice3Img },
      { ItemName: "dice4", ItemImg: dice4Img },
      { ItemName: "dice5", ItemImg: dice5Img },
      { ItemName: "dice6", ItemImg: dice6Img },
    ];

    var item1 = items[Math.floor(Math.random() * items.length)];
    var item2 = items[Math.floor(Math.random() * items.length)];
    this.setState({
      img_path1: item1.ItemImg,
      alt1: item1.ItemName,
      img_path2: item2.ItemImg,
      alt2: item2.ItemName,
    });
  }
  render() {
    return (
      <div className="footer">
        <div className="anySeven">
          <div className="anySevenImg"></div>
        </div>
        <div className="diceArea">
          <img
            src={this.state.img_path1}
            className="diceImg"
            alt={this.state.alt1}
          />
          <img
            src={this.state.img_path2}
            className="diceImg"
            alt={this.state.alt2}
          />
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
