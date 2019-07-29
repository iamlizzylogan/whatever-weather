import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        const {title} = this.props;
        return (
            <header className="title">
                <span className="title__name">{title}</span>
            </header>
        )
    }
}

const {string} = PropTypes;
Header.propTypes = {
    title: string
}

export default Header;
