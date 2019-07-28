import React, { Component } from 'react';
import Header from "./Header";
import Location from "./Location";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentCity: '',
            currentDate: new Date()
        }
    }

    updateCurrentDate() {
        this.setState({ currentDate: new Date() });
    }

    getWeatherInfo(id) {
        this.setState({ currentCity: id});

        fetch(`http://dev-weather-api.azurewebsites.net/api/city/${id}/weather?date=2019-07-25`)
            .then(response => response.json().then(data => {
                console.log(data);
            }));
    }

    render() {
        setTimeout(this.updateCurrentDate.bind(this), 1000);

        return (
            <div className="container">
                <Header title="Whatever Weather" />
                <div className="widget">
                    <Location onChange={this.getWeatherInfo.bind(this)}/>
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
                    <section className="nutshell">
                        <ul>
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
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

export default App;
