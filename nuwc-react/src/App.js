import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Game from './game';
import Scores from './Scores';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Scores}/>
      </div>
    );
  }
}

export default App;
