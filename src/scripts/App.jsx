import React, { Component } from 'react';
import Header from "./Header";

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <Header title="Whatever Weather" />
            </div>
        )
    }
}

export default App;
