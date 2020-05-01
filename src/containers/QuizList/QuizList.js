import React, { Component } from 'react';
import QuizTitle from 'components/QuizTitle/QuizTitle';
import { getAll } from 'data/quiz-data';
import { connect } from 'react-redux';
import { STORE_RESULT, DELETE_RESULT } from 'store/actions';

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
                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
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

// export default QuizList;

const mapStateToProps = state => {
    return {
        counter: state.ctr.counter,
        results: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStoreResult: (result) => dispatch({ type: STORE_RESULT, value: result }),
        onDeleteResult: (v) => dispatch({ type: DELETE_RESULT, value: v})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)