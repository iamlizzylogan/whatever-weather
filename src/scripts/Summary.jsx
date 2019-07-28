import React, { Component } from 'react';
import getWeekday from "./getWeekday";
import getFahrenheit from './getFahrenheit';

class Summary extends Component {
    constructor() {
        super();
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
            weekday: '',
            image: '',
            fahrenheit: '',
            celsius: ''
        }
    }

    UNSAFE_componentWillMount() {
        let { index, date, type, temperature } = this.props;

        let weekday = index === 0 ? 'Today' : getWeekday(new Date(date));

        let valid = Object.keys(this.types).includes(type);
        if (!valid) { return false }

        let src = this.types[type]['img'];
        let description = this.types[type]['name'];
        let image = <img src={`assets/${src}.png`} alt={description} />;

        let fahrenheit = getFahrenheit(temperature);

        this.setState({
            weekday: weekday,
            image: image,
            fahrenheit: fahrenheit,
            celsius: temperature
        });
    }

    render() {
        let { pollenCount } = this.props;
        let { weekday, image, celsius, fahrenheit } = this.state;

        return (
            <li className="nutshell__day">
                <div>{weekday}</div>
                <div>{image}</div>
                <div className="temperature">
                    <div className="wrapper">
                        <span className="temperature__celsius">{celsius}°C</span>
                        <span className="temperature__fahrenheit">{fahrenheit}°F</span>
                    </div>
                </div>
                <div className="pollen">
                    <div className="wrapper">
                        <span className="pollen__key">Pollen</span>
                        <span className="pollen__value">{pollenCount}</span>
                    </div>
                </div>
            </li>
        )
    }
}

export default Summary;
