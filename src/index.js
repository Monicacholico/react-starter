import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';

// Create a react component

if (module.hot) {
    module.hot.accept();
  }

  const App = () => {
      return (
          <Input/>
      )
  };

// Take the react component and show it on 

ReactDOM.render(<App/>, document.getElementById('root'));