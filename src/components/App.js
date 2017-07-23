import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import Animals from './Animals';
import Foods from './Foods';

const App = () => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to CatFood</h2>
        </div>
        <Animals />
        <Foods />
    </div>
)

export default App;
