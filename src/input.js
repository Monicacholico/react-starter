import React from 'react';
import ReactDOM from 'react-dom';

function getTime() {
    return (new Date()).toLocaleTimeString();
}

const Input = () => {
    const buttonText = {text: 'Click me'};
    return (
    <div>
    <label className="label" htmlFor="name">
        Enter name:
    </label>
    <input id="name" type="text"/>
    <button type="button" style={{backgroundColor:'blue', color: 'white'}}>
        {buttonText.text}
    </button>
    <h3>{getTime()}</h3>
    </div>
    
    );
};

export default Input;