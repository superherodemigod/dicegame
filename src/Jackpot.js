import React, { Component } from "react";
import jackpotImg from './imgs/jackpot.png';
class Jackpot extends Component {
    render() {
        return (
            <div className="jackpot">
                <div className="jackpotImg">
                    <span>$100,108.28</span>
                </div>
                <div className="winArea">
                    <div className="winImg">
                        <span>$103.50</span>
                    </div>
                </div>
                <div className="streakArea">
                    {/* <div className="streakImg"></div> */}
                </div>
            </div>
        )
    }
}

export default Jackpot