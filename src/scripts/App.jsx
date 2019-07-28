import React, { Component } from 'react';
import Header from "./Header";
import Location from "./Location";
import Summary from "./Summary";
import Today from "./Today";
import Weather from "./Weather";
import getRequestDate from "./getRequestDate";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentCity: '',
            currentDate: new Date(),
            currentWeather: [],
            futureWeather: []
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
        const dateString = getRequestDate(this.state.currentDate);
        fetch(this.endpoint(id, dateString))
            .then(response => response.json().then(data => {
                const currentData = data[0];
                let weatherComponent =
                    <Weather
                        type={currentData.type}
                        temperature={currentData.temperature}
                        precipitation={currentData.precipitation}
                        humidity={currentData.humidity}
                        windSpeed={currentData.windInfo.speed}
                        windDirection={currentData.windInfo.direction}
                        pollenCount={currentData.pollenCount}
                    />;
                let summaryComponents = data.map((day, index) => {
                    return (
                        <Summary
                            key={index}
                            index={index}
                            date={day.date}
                            type={day.type}
                            temperature={day.temperature}
                            pollenCount={day.pollenCount}
                        />
                    )
                })
                this.setState({ currentWeather: weatherComponent, futureWeather: summaryComponents });
            }));
    }

    render() {
        setTimeout(this.updateCurrentDate.bind(this), 1000);
        let { currentDate, currentWeather, futureWeather } = this.state;

        return (
            <div className="container">
                <Header title="Whatever Weather" />
                <div className="widget">
                    <Location onChange={this.getWeatherInfo.bind(this)}/>
                    <Today date={currentDate} />
                    {currentWeather}
                    <section className="nutshell">
                        <ul>{futureWeather}</ul>
                    </section>
                </div>
            </div>
        )
    }
}

export default App;
