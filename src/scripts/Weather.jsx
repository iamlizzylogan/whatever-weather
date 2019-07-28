import React, { Component } from 'react';
import getFahrenheit from './getFahrenheit';

class Weather extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { temperature, precipitation, humidity, windSpeed, windDirection, pollenCount } = this.props;
        let fahrenheit = getFahrenheit(temperature);

        return (
            <section className="weather">
                        <span className="weather__type">Overcast</span>
                        <div className="weather__data">
                            <div className="weather__dataBasics">
                                <img className="weather__dataBasics --image" src="assets/cloudy.png" alt="cloudy"/>
                                <span className="weather__dataBasics --value">{fahrenheit}</span>
                                <span className="weather__dataBasics --unit">°F</span>
                            </div>
                            <div className="weather__dataDetails">
                                <div>
                                    <span className="weather__dataDetails --key">Precipitation: </span>
                                    <span className="weather__dataDetails --value">{precipitation}</span>
                                </div>
                                <div>
                                    <span className="weather__dataDetails --key">Humidity: </span>
                                    <span className="weather__dataDetails --value">{humidity}</span>
                                </div>
                                <div>
                                    <span className="weather__dataDetails --key">Wind: </span>
                                    <span className="weather__dataDetails --value">{windSpeed} mph {windDirection}</span>
                                </div>
                                <div>
                                    <span className="weather__dataDetails --key">Pollen Count: </span>
                                    <span className="weather__dataDetails --value">{pollenCount}</span>
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }
}

export default Weather;
