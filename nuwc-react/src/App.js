import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Game from './game';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Game}/>
      </div>
    );
  }
}

export default App;
