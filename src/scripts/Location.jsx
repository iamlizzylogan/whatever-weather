import React, { Component } from 'react';

class Location extends Component {
    constructor(props) {
        super(props);
        this.endpoint = 'http://dev-weather-api.azurewebsites.net/api/city';
        this.onChange = this.props.onChange;
        this.state = {
            cities: [],
            currentCity: ''
        }
    }

    UNSAFE_componentWillMount() {
        fetch(this.endpoint)
            .then(response => response.json()
                .then(data => {
                    let options = data.map((element, index) => {
                        return ( <div className="location__nameOptions --option" key={index}>{element['name']}</div> )
                    });
                    let currentCity = options[0].props.children;
                    this.setState({ cities: options, currentCity: currentCity });
                    this.props.onChange(currentCity);
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
