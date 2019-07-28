import React, { Component } from 'react';
import Header from "./Header";
import Location from "./Location";
import Weather from "./Weather";
import getDateString from "./getDateString";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentCity: '',
            currentDate: new Date(),
            currentWeather: []
        };
        this.endpoint = (id, date) => {
            return `http://dev-weather-api.azurewebsites.net/api/city/${id}/weather?date=${date}`
        }
    }

    updateCurrentDate() {
        this.setState({ currentDate: new Date() });
    }

    getWeatherInfo(id) {
        this.setState({ currentCity: id });
        const dateString = getDateString(this.state.currentDate);
        fetch(this.endpoint(id, dateString))
            .then(response => response.json().then(data => {
                const currentData = data[0];
                let weatherComponent = <Weather
                        temperature={currentData.temperature}
                        precipitation={currentData.precipitation}
                        humidity={currentData.humidity}
                        windSpeed={currentData.windInfo.speed}
                        windDirection={currentData.windInfo.direction}
                        pollenCount={currentData.pollenCount}
                    />;
                let currentWeather = [...this.state.currentWeather];
                currentWeather.push(weatherComponent);
                this.setState({ currentWeather: currentWeather });
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
                    {this.state.currentWeather}
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
