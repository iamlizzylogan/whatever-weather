import React, { Component } from 'react';
import getFahrenheit from './getFahrenheit';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.types = {
            RainAndCloudy: {
                name: 'Heavy rain',
                img: 'rain_s_cloudy'
            },
            RainLight: {
                name: 'Light rain',
                img: 'rain_light'
            },
            Cloudy: {
                name: 'Overcast',
                img: 'cloudy'
            },
            PartlyCloudy: {
                name: 'Fair',
                img: 'partly_cloudy'
            },
            Sunny: {
                name: 'Sunny',
                img: 'sunny'
            }
        }
        this.state = {
            image: '',
            description: ''
        }
    }

    UNSAFE_componentWillMount() {
        let {type} = this.props;
        let valid = Object.keys(this.types).includes(type);
        if (!valid) { return false }

        let src = this.types[type]['img'];
        let description = this.types[type]['name'];
        let image = <img className="weather__dataBasics --image"
                src={`assets/${src}.png`} alt={description}/>;

        this.setState({ image: image, description: description })
    }

    render() {
        let { temperature, precipitation, humidity, windSpeed, windDirection, pollenCount } = this.props;
        let fahrenheit = getFahrenheit(temperature);

        return (
            <section className="weather">
                        <span className="weather__type">{this.state.description}</span>
                        <div className="weather__data">
                            <div className="weather__dataBasics">
                                {this.state.image}
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
