import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Scores from './Scores';

class Homepage extends Component {
    render() {
		return (
			<Scores team1="Mexico" team2="Mozambique" />
	    );
	}
}

export default Homepage;