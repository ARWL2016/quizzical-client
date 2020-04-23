import React, { Component } from 'react';
import { getLastResult } from 'data/attempt-data'

export default class Result extends Component {

    state = {};

    componentDidMount() {
        const lastResult = getLastResult();

        this.setState({...lastResult});
    }

    render() {
        return (
            <section>
                <h1>{this.state.quiz_title}</h1>
                {JSON.stringify(this.state)}
            </section>
        )
    }
}