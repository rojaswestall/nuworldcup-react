import React, { Component } from 'react';
import title from '../assets/img/titles/gonzo-title.png';
import infographic from '../assets/img/gonzo/gonzo-infograph-short.png';
import Footer from './Footer';

class Gonzo extends Component {
    render() {
		return (
			<div>
				<div className="d-flex justify-content-center title-div">
            		<img className="title" src={title} alt={"GONZO"}/> 
        		</div>

        		<div className="d-flex justify-content-center infographic-div">
            		<img className="infographic" src={infographic} alt={"Infographic"}/> 
        		</div>

				<Footer />
			</div>
	    );
	}
}

export default Gonzo;