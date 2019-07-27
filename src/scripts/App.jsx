import React, { Component } from 'react';
import Header from "./Header";

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <Header title="Whatever Weather" />
                <div className="widget">
                    <section className="location">
                        <div className="location__name">
                            <span className="location__nameText">Londyn</span>
                            <div className="location__nameOptions">
                                <div className="location__nameOptions --option">Katowice</div>
                                <div className="location__nameOptions --option">Londyn</div>
                                <div className="location__nameOptions --option">Sosnowiec</div>
                            </div>
                        </div>
                    </section>
                    <section className="date">Tuesday, April 15th</section>
                    <section className="weather">
                        <span className="weather__type">Overcast</span>
                        <div className="weather__data">
                            <div className="weather__dataBasics">
                                <img className="weather__dataBasics --image" src="assets/cloudy.png" alt="cloudy"/>
                                <span className="weather__dataBasics --value">58</span>
                                <span className="weather__dataBasics --unit">°F</span>
                            </div>
                            <div className="weather__dataDetails">
                                <div>
                                    <span className="weather__dataDetails --key">Precipitation: </span>
                                    <span className="weather__dataDetails --value">100%</span>
                                </div>
                                <div>
                                    <span className="weather__dataDetails --key">Humidity: </span>
                                    <span className="weather__dataDetails --value">97%</span>
                                </div>
                                <div>
                                    <span className="weather__dataDetails --key">Wind: </span>
                                    <span className="weather__dataDetails --value">4 mph SW</span>
                                </div>
                                <div>
                                    <span className="weather__dataDetails --key">Pollen Count: </span>
                                    <span className="weather__dataDetails --value">36</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default App;
