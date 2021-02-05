import React, { Component } from "react";
import Header from "./Header";
import Jackpot from "./Jackpot";
import Gameboard from "./Gameboard";
import Footer from "./Footer";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="headerArea">
            <Header />
            <Jackpot />
          </div>
          <Gameboard />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
