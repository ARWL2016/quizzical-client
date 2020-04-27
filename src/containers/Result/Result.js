import React, { Component } from 'react';
import { getLastResult } from 'data/attempt-data';
import Card from 'components/Card/Card';
import './Result.scss';

const temp = { "attempt_id": 29, "quiz_id": 4, "user_id": 1, "datetime": "2020-04-27T09:33:37.926Z", "quiz_title": "Cities and Capitals", "results": [{ "question_id": 1, "text": "What is the capital of France?", "answer": "Lyon", "correct_answer": "Paris", "result": false }, { "question_id": 2, "text": "What is the capital of Germany?", "answer": "Berlin", "correct_answer": "Berlin", "result": true }], "num_questions": "2", "score": "1" };

export default class Result extends Component {

    state = {};

    componentDidMount() {
        const lastResult = getLastResult();

        this.setState({...lastResult});
        // this.setState(temp)
    }

    renderErrors() {
        const errors = this.state.results.filter(r => r.result === false);

        if (errors.length) {
            return (
                <>
                    <p>Here's what you got wrong...</p>

                    <table>
                        <tr>
                            <th></th>
                            <th>Your answer</th>
                            <th>Correct answer</th>
                        </tr>
                        {errors.map(e => {
                            return (
                                <tr>
                                    <td>{e.question_id}) {e.text}</td>
                                    <td style={{ 'text-align': 'center' }}>{e.option_selected}</td>
                                    <td style={{ 'text-align': 'center' }}>{e.correct_option}</td>
                                </tr>
                            )
                        })}


                    </table>
                </>
            )
        }
    }

    renderBody() {

        return (
            <>
                <div className="score">You scored {this.state.score} out of {this.state.num_questions}</div>
                {this.renderErrors()}
            </>
        )
    }

    render() {
        if (this.state && this.state.results) {
            return (
                <div className="result-container">

                    <Card className="result-container"
                        header={<h2>{this.state.quiz_title}</h2>}
                        body={
                            <>
                                <div className="score">You scored {this.state.score} out of {this.state.num_questions}</div>
                                {this.renderErrors()}
                            </>
                        }></Card>
                </div>
            )
        } else {
            return null;
        }
    }
}