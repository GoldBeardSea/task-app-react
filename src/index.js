import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './main.css';
import App from './App.js';

class Main extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));