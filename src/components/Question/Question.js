import React from 'react';
import './Question.scss';

// renders into Quiz

const question = (props) => {

    console.log(props)

    const renderAnswers = () => {
        return props.answer.map(a => {
            return (
                <div key={a}>
                    <input  type="radio" id={a} value={a} onChange={() => props.clickHandler(a, props.id)} checked={a === props.answerGiven}></input>
                    <label htmlFor={a}>{a}</label>
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