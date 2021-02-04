import React, {Component} from 'react'
import Header from './Header';
import Jackpot from './Jackpot';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Jackpot />
        </div>
      </div>
    )
  }
}

export default App
