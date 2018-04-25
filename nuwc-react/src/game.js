import React, { Component } from 'react';
import logo from './logo.svg';

class Game extends Component {
  constructor(props) {
    super(props);

    this.handleScoreOfGame = this.handleScoreOfGame.bind(this);
    this.handleTeamsOfGame = this.handleTeamsOfGame.bind(this);

    this.state = {
      SignatureOfGuest: "",
      MessageofGuest: "",
    };

    handleScoreOfGame(event) {
    this.setState({ score: event.target.value });
  }
  handleTeamsOfGame(event) {
      this.setState({ teams: event.target.value });
    }
  }
}

export default Game;