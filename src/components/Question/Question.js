import React from 'react';
import './Question.css';

// renders into Quiz

const question = (props) => {

    console.log(props)

    const renderAnswers = () => {
        return props.answer.map(a => {
            return (
                <div className="radio-button-wrapper" key={a}>
                    <input  type="radio" id={a} value={a} onChange={() => props.clickHandler(a, props.id)} checked={a === props.answerGiven}></input>
                    <label htmlFor={a}>{a}</label>
                </div>
            )
        })
    }

    return (
        <React.Fragment>
            <p className="question">{props.text}</p>
            {renderAnswers()}
        </React.Fragment>
    )
}

export default question;