import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

class Game extends Component {
  constructor(props) {
    super(props);

    // this.handleScoreOfGame = this.handleScoreOfGame.bind(this);
    // this.handleTeamsOfGame = this.handleTeamsOfGame.bind(this);
    // this.addGame = this.addGame.bind(this);

    this.state = {
      score: "",
      teams: "",
    };

    
  }

  handleScoreOfGame = (event) => {
      this.setState({ score: event.target.value });
    }
  handleTeamsOfGame = (event) => {
    this.setState({ teams: event.target.value });
  }

  addGame = (event) => {
    console.log('entered addGame!');
      event.preventDefault();
      this.setState({
        score: event.target.value,
        teams: event.target.value,
      });

      axios.post('http://rojaswestall.com/api/games', {
          score: this.state.score,
          teams: this.state.teams,
        })
      .then(response => {
        console.log(response, 'Game added!');
      })
      .catch(err => {
        console.log(err, 'Game not added, try again');
      });

      this.setState({
        score: "",
        teams: "",
      });
    };



  render() {
    return(
      <div>
        <input
               onChange={this.handleScoreOfGame}
               name="score"
               className="ScoreinputForm"
               value={this.state.score}
               placeholder="Enter your name"
                />
        <textarea
                  onChange={this.handleTeamsOfGame}
                  name="teams"
                  className="TeamsinputForm"
                  value={this.state.teams}
                  placeholder="Type a message"
                   />
        <button
                className="addGame"
                type="submit"
                onClick={this.addGame}
                  >
                Add Game<i className="GameButton2" aria-hidden="true" />
                </button>
      </div>
    )
  }
}



export default Game;