import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { INCREMENT } from 'store/actions';

import './TopNav.scss';

class Topnav extends Component {

    state = {
        formValue: 7
    }

    constructor(props) {
        super(props);

        this.handleIncrementCounter = this.handleIncrementCounter.bind(this);
    }

    handleIncrementCounter() {
        this.props.onIncrementCounter(this.state.formValue)
    }

    render() {


        return (
            <nav className="top-nav">
                <Link to="/home">
                    <span className="logo">quizzical?</span>

                </Link>
                {this.props.counter}
                <button onClick={this.handleIncrementCounter}>Increment</button>


                <Link to="/add">
                    <span className="menu-item">Add Quiz</span>

                </Link>
            </nav>
        )
    }
}



const mapStateToProps = state => {
    return {
        counter: state.ctr.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: (v) => dispatch({ type: INCREMENT, value: v })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topnav)