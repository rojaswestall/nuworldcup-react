import React, { Component } from 'react';
import logo from '../assets/img/nuwclogo.jpg';

class Homepage extends Component {
    render() {
		return (
			<div className="d-flex justify-content-center home-logo-div">
				<img className="home-logo" src={logo} alt={"Northwestern World Cup 2018"}/>
			</div>
	    );
	}
}

export default Homepage;