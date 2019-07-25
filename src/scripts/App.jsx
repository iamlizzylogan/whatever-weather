import React, { Component } from 'react';
import Header from "./Header";

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Header title="Whatever Weather" />
        )
    }
}

export default App;
