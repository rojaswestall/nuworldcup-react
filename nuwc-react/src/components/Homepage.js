import React, { Component } from 'react';
import logo from '../assets/img/nuwclogo.jpg';
import logomx from '../assets/img/nuwcmxwhite.png';

class Homepage extends Component {
    render() {
		return (
			<div className="d-flex justify-content-center home-logo-div">
				<img className="home-logo" src={logomx} alt={"Northwestern World Cup 2018"}/>
			</div>
	    );
	}
}

export default Homepage;