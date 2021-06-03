import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component

if (module.hot) {
    module.hot.accept();
  }

  const App = () => {
      return <div>Hi there!</div>
  };

// Take the react component and show it on 

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);