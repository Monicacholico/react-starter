import React from 'react';
import ReactDOM from 'react-dom';

const Input = () => {
    return (
    <div>
    <label class="label" for="name">
        Enter name:
    </label>
    <input id="name" type="text"/>
    <button style={{backgroundColor:'blue', color: 'white'}}>

    </button>
    </div>
    
    );
};

export default Input;