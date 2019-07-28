import React, { Component } from 'react';
import getDisplayDate from './getDisplayDate';

class Today extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {date} = this.props;
        let displayDate = getDisplayDate(date);
        return (
            <section className="date">{displayDate}</section>
        )
    }
}

export default Today;
