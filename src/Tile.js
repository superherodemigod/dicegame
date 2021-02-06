import React, { Component } from "react";
class Tile extends Component {
  render() {
    // let color = Math.floor(Math.random() * 4);
    // let classImg;
    // let classNumber;
    // if (color == 0) {
    //   classImg = "whiteTile";
    //   classNumber = "blackNumber";
    // } else if (color == 1) {
    //   classImg = "greenTile";
    //   classNumber = "whiteNumber";
    // } else if (color == 2) {
    //   classImg = "blueTile";
    //   classNumber = "whiteNumber";
    // } else {
    //   classImg = "yellowTile";
    //   classNumber = "whiteNumber";
    // }
    return (
      <li className={this.props.tileColor}>
        <span className={this.props.numberColor}>{this.props.tileNumber}</span>
      </li>
    );
  }
}

export default Tile;
