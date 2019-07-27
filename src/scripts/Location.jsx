import React, { Component } from 'react';

class Location extends Component {
    constructor() {
        super();
        this.endpoint = 'http://dev-weather-api.azurewebsites.net/api/city';
        this.state = {
            cities: [],
            currentCity: {}
        }
    }

    UNSAFE_componentWillMount() {
        fetch(this.endpoint)
            .then(response => response.json()
                .then(data => {
                    let options = data.map((element, index) => {
                        return ( <div className="location__nameOptions --option" key={index}>{element['name']}</div> )
                    });
                    this.setState({ cities: options, currentCity: options[0].props.children });
                }
            )
        )
    }

    render() {
        let {cities, currentCity} = this.state;
        return (
            <section className="location">
                <div className="location__name">
                    <span className="location__nameText">{`${currentCity}`}</span>
                    <div className="location__nameOptions">
                        {cities ? cities : false}
                    </div>
                </div>
            </section>
        )
    }
}

export default Location;
