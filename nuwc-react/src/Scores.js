import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

class Scores extends Component {
	constructor(props) {
		super(props);

		this.state = {
    		team1: this.props.team1,
    		team2: this.props.team2,
    		score1: 0,
    		score2: 0
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
    		axios.get('http://rojaswestall.com/api/games', {
    			team1: this.state.team1,
    			team2: this.state.team2
  			}).then((res) => {
  				var dbdata = res.data[0];
  				if (dbdata.team1 === this.team1) {
  					this.setState({score1: dbdata.score1});
  					this.setState({score2: dbdata.score2});
  					console.log('reached if');
  				}
  				else {
  					this.setState({'score1': dbdata.score2});
  					this.setState({'score2': dbdata.score1});
  				}
  			});

    	}

    render() {
    	return (
			<div className="guestdataContainer">
          		<h6>Guestbook Messages</h6>
          		{this.state.team1}
          		{this.state.score1}
          		{this.state.team2}
          		{this.state.score2}
        	</div>
        )
    }
}

export default Scores;