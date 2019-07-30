import React, { Component } from 'react';

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

export default Header;
