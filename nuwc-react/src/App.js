import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Game from './game';
import Scores from './Scores';
import Homepage from './Homepage';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Homepage}/>
      </div>
    );
  }
}

export default App;
