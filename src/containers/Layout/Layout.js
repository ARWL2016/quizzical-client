// This container component will hold any top level state

import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import QuizList from '../QuizList/QuizList';
import Quiz from '../Quiz/Quiz';
import './Layout.css';
import QuizHeader from '../QuizHeader/QuizHeader';
import TopNav from '../../components/TopNav/TopNav'

class LayoutContainer extends Component {


    render() {
        return (
            <div className="LayoutContainer">
                <TopNav></TopNav>

                {/* <QuizList/> */}
                <Switch>
                    <Route path="/home" component={QuizList} />

                    {/* Quiz Header Component */}
                    <Route path="/info/:id" component={QuizHeader} />
                    <Route path="/quiz/:id" component={Quiz} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default LayoutContainer;
