import React, { Component } from 'react';
import { getQuizQuestions } from '../../data/quiz-data';
import Question from '../../components/Question/Question';
import './Quiz.scss';

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

            this.setState({
                selectedQuestion: this.questions[0],
                answers: {},
                count: 0
            })

        }
    }

    clickHandler = (answer, questionId) => {
        console.log(answer)
        const state = { ...this.state };
        state.answers[questionId] = answer

        this.setState(state);
    }

    nextHandler = (iteration) => {
        this.setState((state) => {
            let newCount = state.count + iteration;

            return {
                selectedQuestion: this.questions[newCount],
                answers: { ...state.answers },
                count: newCount
            }

        });
    }



    render() {
        if (!this.state.selectedQuestion) { return <div /> }

        const { selectedQuestion, count, answers } = this.state;
        const isLast = count === this.questions.length - 1;
        const answerGiven = answers ? answers[selectedQuestion.id] : null;

        console.log({ answerGiven });

        return (
            <div className="quiz-container">
                <header>
                    <h2>{this.quiz.title}</h2>
                    <span>{count + 1} / {this.questions.length}</span>
                </header>
                <section>
                    <div>
                        <Question key={selectedQuestion.id} {...selectedQuestion} answerGiven={answerGiven} clickHandler={this.clickHandler}></Question>

                    </div>
                    <div>
                    <button className="previous" disabled={count === 0} onClick={() => this.nextHandler(-1)}>Previous</button>
                    <button className="next" disabled={isLast} onClick={() => this.nextHandler(1)}>Next</button>

                    </div>

                </section>
                {/* <div>{JSON.stringify(this.state)}</div> */}
            </div>

        )
    }
}

export default Quiz;




