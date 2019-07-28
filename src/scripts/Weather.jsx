import React, { Component } from 'react';
import getFahrenheit from './getFahrenheit';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.typeNames = [
            ['RainAndCloudy', 'Heavy rain'],
            ['RainLight', 'Light rain'],
            ['Cloudy', 'Overcast']
        ];
    }

    render() {
        let { type, temperature, precipitation, humidity, windSpeed, windDirection, pollenCount } = this.props;
        let tuple = this.typeNames.filter(tuple => tuple.includes(type))[0];
        let typeDisplayName = tuple ? tuple[1] : false;
        let fahrenheit = getFahrenheit(temperature);

        return (
            <section className="weather">
                        <span className="weather__type">{typeDisplayName}</span>
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
