import React, { Component } from 'react';
import QuizTitle from 'components/QuizTitle/QuizTitle';
import { getAll } from 'data/quiz-data';


class QuizList extends Component {
    state = {
        quizTitles: [{ title: '', id: 0 }]
    }

    async componentDidMount() {

        const quizList = await getAll();

        if (quizList) {
            const quizTitles = quizList.map(quiz => ({ id: quiz.quiz_id, title: quiz.title }));
            this.setState({ quizTitles });
        }

    }

    titleClickHandler = (e, title) => {
        this.props.history.push({ pathname: "/info/" + title.id });
    }



    renderTitles() {
        return this.state.quizTitles.map(title => {
            return <QuizTitle key={title.id} click={() => this.titleClickHandler(null, title)} title={title.title} />
        });
    }

    render() {
        return (
            <div className="QuizList">
                {this.renderTitles()}
                {this.props.counter}
                <ul>
                    {(this.props.results || []).map((r, idx) => {
                        return (
                            <li key={idx} onClick={() => this.props.onDeleteResult(idx)}>{r}</li>
                        )
                    })}

                </ul>
            </div>
        )
    }
}

export default QuizList;



