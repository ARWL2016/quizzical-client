import React from 'react';
import './Card.scss';

const card = (props) => {
    return (
        <div className="card">
            <header>
                <h2>{props.header}</h2>


            </header>
            <section>
                {props.body}
            </section>
        </div>
    )
}

export default card;