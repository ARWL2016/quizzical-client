import React from 'react';
import './Question.css';

const question = (props) => {

    const renderAnswer = () => {
        return props.answer.map(a => {
            return <button key={a} onClick={() => props.clickHandler(a, props.id)}>{a}</button>
        })
    }

    return (
        <React.Fragment>
            <h3>{props.text}</h3>
            {renderAnswer()}
        </React.Fragment>
    )
}

export default question;