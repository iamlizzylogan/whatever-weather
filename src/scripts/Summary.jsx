import React, { Component } from 'react';

class Summary extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li className="nutshell__day --0">
                <div>Today</div>
                <div>
                    <img src="assets/sunny.png" alt="sunny" />
                </div>
                <div className="temperature">
                    <div className="wrapper">
                        <span className="temperature__celsius">68°C</span>
                        <span className="temperature__fahrenheit">36°F</span>
                    </div>
                </div>
                <div className="pollen">
                    <div className="wrapper">
                        <span className="pollen__key">Pollen</span>
                        <span className="pollen__value">36</span>
                    </div>
                </div>
            </li>
        )
    }
}

export default Summary;
