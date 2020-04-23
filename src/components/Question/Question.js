import React from 'react';
import './Question.scss';

// renders into Quiz

const question = (props) => {

    console.log(props)

    const renderAnswers = () => {
        return props.answers.map(answer => {
            return (
                <div key={answer}>
                    <input  type="radio" id={answer} value={answer} onChange={() => props.clickHandler(answer, props.id)} checked={answer === props.answerGiven}></input>
                    <label htmlFor={answer}>{answer}</label>
                </div>
            )
        })
    }

    return (
        <form className="question">
            <p>{props.text}</p>
            {renderAnswers()}
        </form>
    )
}

export default question;