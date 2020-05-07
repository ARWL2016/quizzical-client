import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './TopNav.scss';

class Topnav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="top-nav">
                <Link to="/home">
                    <span className="logo">quizzical?</span>

                </Link>



                <Link to="/add">
                    <span className="menu-item">Add Quiz</span>

                </Link>
            </nav>
        )
    }
}

export default Topnav;