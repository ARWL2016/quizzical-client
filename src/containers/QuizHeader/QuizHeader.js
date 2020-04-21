import React, {Component} from 'react';
import { getQuizById } from '../../data/quiz-data';
import './QuizHeader.scss';

class QuizHeader extends Component {
    state = {
        quiz: {}
    }

    async componentDidMount() {
        const id = +this.props.match.params.id;

        const quiz = await getQuizById(id);

        if (quiz) {
            this.setState({quiz})
        }
    }

    backHandler = () => {
        this.props.history.push("/home");
    }

    startQuizHandler = () => {
        this.props.history.push("/quiz/" + this.state.quiz.id);
    }

    render() {
        return (
            <div className="quiz-header">
                <h1>QUIZ INFO</h1>
                <p>{this.state.quiz.title}</p>
                <button className="btn-default" onClick={this.backHandler}>Back to Quiz List</button>
                <button className="btn-default" onClick={this.startQuizHandler}>Start Quiz</button>
            </div>
        )
    }
}

export default QuizHeader;
