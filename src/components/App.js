import React from 'react'
import logo from '../catdog.svg';
import '../App.css';
import FoodsContainer from '../containers/FoodsContainer';
import AnimalsContainer from '../containers/AnimalsContainer';
import Footer from "./Footer";

const App = () => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to CatFood</h2>
            <p>Catfood captcher is to capture the foods your animals like and don't like.</p>
            <p>This is my first react-redux application.</p>
        </div>
        <AnimalsContainer />
        <FoodsContainer />
        <Footer />
    </div>
)

export default App;
