import React from 'react'

const version = process.env.REACT_APP_VERSION;

const Footer = () => (
    <div className="App-footer">
        <hr />
        <h6>Cat Food Captcha</h6>
        <p>Version: {version} </p>
    </div>
)

export default Footer;
