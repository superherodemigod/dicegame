import React, { Component } from "react";
import Tile from "./Tile";
class Gameboard extends Component {
  render() {
    let tiles = [];
    for (let i = 0; i < 25; i++) {
      tiles.push(<Tile />);
    }
    return (
      <div className="gameboardArea">
        <ul className="gameboard">
          {tiles.map((value, index) => {
            return value;
          })}
        </ul>
      </div>
    );
  }
}

export default Gameboard;
