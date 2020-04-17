import React, { Component } from 'react';
import { getQuizQuestions } from '../../data/quiz-data';
import Question from '../../components/Question/Question';

class Quiz extends Component {

    quiz = {};
    questions = [];

    state = {
        selectedQuestion: null,
        answers: {},
        count: 0
    }

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.nextHandler = this.nextHandler.bind(this);
    }

    async componentDidMount() {
        const quizQuestions = await getQuizQuestions(this.props.match.params.id);


        if (quizQuestions) {
            this.quiz = quizQuestions.quiz;
            this.questions = quizQuestions.questions;
            this.length = this.questions.length;

            this.setState({
                selectedQuestion: this.questions[0],
                answers: {},
                count: 0
            })

        }
    }

    clickHandler = (answer, questionId) => {
        const state = { ...this.state };
        state.answers[questionId] = answer

        this.setState(state);
    }

    nextHandler = (iteration) => {
        this.setState((state) => {
            let newCount = state.count + iteration;

            return {
                selectedQuestion: this.questions[newCount],
                answers: {...state.answers},
                count: newCount
            }

        });
    }



    render() {
        if (!this.state.selectedQuestion) { return <div /> }

        const {selectedQuestion, count} = this.state;
        const isLast = count === this.questions.length - 1;

        return (
            <React.Fragment>
                <h1>{this.quiz.title}</h1>
                <Question key={selectedQuestion.id} {...selectedQuestion} clickHandler={this.clickHandler}></Question>
                <div>
                    <button disabled={count === 0} onClick={() => this.nextHandler(-1)}>Previous</button>
                    <button disabled={isLast} onClick={() => this.nextHandler(1)}>Next</button>
                </div>
                <div>{JSON.stringify(this.state)}</div>

            </React.Fragment>
        )
    }
}

export default Quiz;




