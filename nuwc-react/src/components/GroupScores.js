import React, { Component } from 'react';
import axios from 'axios';

class GroupScores extends Component {
	constructor(props) {
		super(props);

		this.state = {
    		team1: this.props.team1,
    		team2: this.props.team2,
    		score1: 0,
    		score2: 0,
        tournament: this.props.tournament
  		};
    }

    // Pass team1 and team2 to the component
    // Make get request to get the scores for that game
    // Match the teams to the scores


    // Pass arguments to props, then make the get request passing those arguemnts
    // Fetch from the database using those arguments on the server side

    	componentDidMount() {
    		// Need to change this get to take arguments
    		// var currentMessages = this.scores;
        // real endpoint: http://rojaswestall.com/api/games
        // for testing: http://localhost:4000/api/games
    		axios.get('http://localhost:4000/api/games', {
    			params: {
            team1: this.state.team1,
    			  team2: this.state.team2,
            tournament: this.state.tournament
          }
  			}).then((res) => {
  				var dbdata = res.data;
  				if (dbdata.team1 === this.state.team1) {
  					this.setState({score1: dbdata.score1});
  					this.setState({score2: dbdata.score2});
  				}
  				else {
  					this.setState({score1: dbdata.score2});
  					this.setState({score2: dbdata.score1});
  				}
  			});

    	}

    render() {
    	return (
			  <div className="guestdataContainer">
          		<div>{this.state.team1} : {this.state.score1}</div>
          		<div>{this.state.team2} : {this.state.score2}</div>
          		
          		
        </div>
      )
    }
}

export default GroupScores;