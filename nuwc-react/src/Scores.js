import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

class Scores extends Component {
	constructor(props) {
		super(props);

		this.team1 = "";
		this.team2 = "";
		this.score1 = "";
		this.score2 = "";

		this.scores = {
      		messages: "",
    	};
    }

    // Pass arguments to props, then make the get request passing those arguemnts
    // Fetch from the database using those arguments on the server side

    	componentDidMount() {
    		// fetch('http://rojaswestall.com/api/games')
    		// .then(results => {
    		// 	return results.json()});

    		// Need to change this get to take arguments
    		var currentMessages = this.scores;
    		axios.get('http://rojaswestall.com/api/games', {
    			team: 'Mexico'
  			}).then((res) => console.log(res));

  			// (res) => res.json().then((data) => {
     //        	currentMessages.push(data);
     //        	console.log(currentMessages);
     //    	}));
    		this.setState({'scores': currentMessages});
    	}

    		// data.map((msg) => {
    		// 	return(
    		// 		<div key={msg.results}>
    		// 			<h3 className="h3msg">{msg.message}</h3>
    		// 			<h2 className="h2sig">-{msg.guestSignature}</h2>
    		// 		</div>)})


    render() {
    	return (
			<div className="guestdataContainer">
          		<h6>Guestbook Messages</h6>
          		{this.scores[0]}
        	</div>
        )
    }
}

export default Scores;