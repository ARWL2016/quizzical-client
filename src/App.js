import React, {Component} from 'react';
import LayoutContainer from './containers/Layout/Layout';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <LayoutContainer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
