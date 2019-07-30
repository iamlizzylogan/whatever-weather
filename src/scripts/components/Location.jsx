import React, { Component } from 'react';
import toggleAccordion from "../functions/toggleAccordion";

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
                    let options = data.map(element => {
                        let { id, name } = element;

                        return (
                            <div className="option"
                            onClick={event => {
                                this.changeCity(name, id);
                                event.persist();
                                let toggleTrigger = event.target.parentElement.previousElementSibling;
                                toggleAccordion(toggleTrigger);
                            }}
                            key={id}>{name}</div>
                        )
                    });
                    let currentCity = options[0].props.children;
                    this.setState({ cities: options, currentCity: currentCity });
                    this.props.onChange(options[0].key);
                }
            )
        )
    }

    changeCity(name, id) {
        this.setState({ currentCity: name});
        this.props.onChange(id);
    }

    render() {
        let {cities, currentCity} = this.state;
        return (
            <section className="location">
                <div className="location__name">
                    <span className="location__nameText" onClick={event => toggleAccordion(event.target)}>
                        {`${currentCity}`}
                    </span>
                    <div className="location__nameOptions">
                        {cities ? cities : false}
                    </div>
                </div>
            </section>
        )
    }
}

export default Location;
