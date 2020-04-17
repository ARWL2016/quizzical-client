import React from 'react'; 
import './QuizTitle.css';

const quiztitle = (props) => {
    return <div className="QuizTitle" onClick={props.click}>{props.title}</div>
}

export default quiztitle;