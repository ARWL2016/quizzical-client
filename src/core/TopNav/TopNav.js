import React from 'react';
import {Link} from 'react-router-dom';

import './TopNav.scss';

const topnav = (props) => {
    return (
        <nav className="top-nav">
            <Link to="/home">
                <span>quizzical?</span>

            </Link>
        </nav>
    )
}

export default topnav;