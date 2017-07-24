import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import Foods from './Foods';
import AnimalsContainer from "../containers/AnimalsContainer";

const App = () => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to CatFood</h2>
            <p>Catfood captcher is to capture the foods your animals like and don't like.</p>
            <p>This is my first react-redux application.</p>
        </div>
        <AnimalsContainer />
        <Foods />
    </div>
)

export default App;
