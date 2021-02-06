import React, { Component } from "react";
import Tile from "./Tile";
class Gameboard extends Component {
  render() {
    return (
      <div className="gameboardArea">
        <ul className="gameboard">
          {/* {tiles.map((value, index) => {
            return value;
          })} */}
          <Tile tileColor="blueTile" numberColor="whiteNumber" tileNumber="2" />
          <Tile tileColor="greenTile" numberColor="whiteNumber" tileNumber="9" />
          <Tile tileColor="blueTile" numberColor="whiteNumber" tileNumber="8" />
          <Tile tileColor="blueTile" numberColor="whiteNumber" tileNumber="6" />
          <Tile tileColor="whiteTile" numberColor="blackNumber" tileNumber="3" />
          <Tile tileColor="whiteTile" numberColor="blackNumber" tileNumber="6" />
          <Tile tileColor="greenTile" numberColor="whiteNumber" tileNumber="4" />
          <Tile tileColor="whiteTile" numberColor="blackNumber" tileNumber="12" />
          <Tile tileColor="whiteTile" numberColor="blackNumber" tileNumber="10" />
          <Tile tileColor="yellowTile" numberColor="whiteNumber" tileNumber="8" />
          <Tile tileColor="whiteTile" numberColor="blackNumber" tileNumber="11" />
          <Tile tileColor="greenTile" numberColor="whiteNumber" tileNumber="5" />
          <Tile tileColor="purpleTile" numberColor="whiteNumber" tileNumber="7" />
          <Tile tileColor="whiteTile" numberColor="blackNumber" tileNumber="2" />
          <Tile tileColor="whiteTile" numberColor="blackNumber" tileNumber="5" />
          <Tile tileColor="blueTile" numberColor="whiteNumber" tileNumber="5" />
          <Tile tileColor="greenTile" numberColor="whiteNumber" tileNumber="12" />
          <Tile tileColor="whiteTile" numberColor="blackNumber" tileNumber="10" />
          <Tile tileColor="yellowTile" numberColor="whiteNumber" tileNumber="8" />
          <Tile tileColor="blueTile" numberColor="whiteNumber" tileNumber="9" />
          <Tile tileColor="blueTile" numberColor="whiteNumber" tileNumber="8" />
          <Tile tileColor="greenTile" numberColor="whiteNumber" tileNumber="6" />
          <Tile tileColor="blueTile" numberColor="whiteNumber" tileNumber="3" />
          <Tile tileColor="blueTile" numberColor="whiteNumber" tileNumber="4" />
          <Tile tileColor="whiteTile" numberColor="blackNumber" tileNumber="11" />
        </ul>
      </div>
    );
  }
}

export default Gameboard;
