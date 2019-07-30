import React, { Component } from 'react';
import getWeekday from "../helpers/getWeekday";
import getFahrenheit from '../helpers/getFahrenheit';

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

    processProps(properties) {
        let { index, date, type, temperature } = properties;

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

    componentDidMount() {
        this.processProps(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.processProps(nextProps);
    }

    render() {
        let { pollenCount } = this.props;
        let { weekday, image, celsius, fahrenheit } = this.state;

        return (
            <li className="nutshell__day">
                <div>{weekday}</div>
                <div>{image}</div>
                <div className="temperature">
                    <span className="temperature__fahrenheit">{fahrenheit}°</span>
                    <span className="temperature__celsius">{celsius}°</span>
                </div>
                <div className="pollen">
                    <span className="pollen__key">Pollen</span>
                    <span className="pollen__value">{pollenCount}</span>
                </div>
            </li>
        )
    }
}

export default Summary;
