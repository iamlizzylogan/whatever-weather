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
                <div className="widget">
                    <section className="location">
                        <div className="location__name">
                            <span className="location__nameText">Londyn</span>
                            <div className="location__nameOptions">
                                <div className="location__nameOptions --option">Katowice</div>
                                <div className="location__nameOptions --option">Londyn</div>
                                <div className="location__nameOptions --option">Sosnowiec</div>
                            </div>
                        </div>
                    </section>
                    <section className="date">Tuesday, April 15th</section>
                </div>
            </div>
        )
    }
}

export default App;
