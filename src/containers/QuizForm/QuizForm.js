import React, { Component } from 'react';
import './QuizForm.scss';

class QuizForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quizTitle: '',
            questions: [{
                number: 1,
                text: 'test'
            }]
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        console.log(event.target.name);
        console.log(event.target.value);

        if (name === 'quizTitle') {
            this.setState({ quizTitle: value });
        } else {

            this.setState(state => {

                return {
                    questions: state.questions.map(q => {
                        if (q.number === +name) {
                            return {
                                number: q.number,
                                text: value
                            }
                        }

                        return q;

                    })
                }
            });
        }
    }

    handleAddQuestion(e) {
        e.preventDefault();
        const next = this.state.questions.length + 1;

        this.setState(state => {
            return {
                questions: [...state.questions, { number: next, text: ''}]
            }
        })
    }




    render() {
        const { quizTitle, questions } = this.state;

        if (!questions) { return null}

        return (
            <form className="quiz-form-container" onChange={this.handleInputChange}>
                <section>
                    <label htmlFor="quizTitle">Quiz Title
                    <input type="text" name="quizTitle" value={quizTitle}></input>
                    </label>

                </section>
                {questions.map((q, idx) => {
                    return (
                        <section key={idx}>
                            <label htmlFor={q.number}>{q.number}
                                <input
                                    placeholder="add question text"
                                    type="text"
                                    name={q.number}
                                    value={q.text}
                                    ></input>
                            </label>

                        </section>
                    )
                })}
                <button onClick={this.handleAddQuestion}>Add Question</button>





                {JSON.stringify(this.state, null, 2)}
            </form>

        )
    }
}

export default QuizForm;