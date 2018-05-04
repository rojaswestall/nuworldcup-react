import React, { Component } from 'react';
import Footer from './Footer';
import title from '../assets/img/titles/sponsors-title.png';
import womenscenter from '../assets/img/sponsors/2018/womens-center.png';
import president from '../assets/img/sponsors/2018/president.png';
import loop from '../assets/img/sponsors/2018/loop.png';
import pha from '../assets/img/sponsors/2018/pha.jpg';

class Sponsors extends Component {
    render() {
		return (
			<div className="container">
				<div className="d-flex justify-content-center sponsor-title-div">
	        		<img className="sponsor-title" src={title} alt={"SPONSORS"}/> 
	    		</div>
	    		<div className="d-flex justify-content-center">
	    			<p className="lead"> NU World Cup is made possible by generous contributions from our fantastic sponsors:</p>
    			</div>
    			<div className="row justify-content-center">
	            	<div className="col-7 img-portfolio">
		                <a target="_blank" href="https://www.northwestern.edu/president/">
		                    <img className="img-responsive img-hover sponsor" src={president} alt="" />
		                </a>
		            </div>
		        </div>
    			<div className="row justify-content-center">
	            	<div className="col-7 img-portfolio">
		                <a target="_blank" href="http://www.northwestern.edu/womenscenter/">
		                    <img className="img-responsive img-hover sponsor" src={womenscenter} alt="" />
		                </a>
		            </div>
		        </div>
		        <div className="row justify-content-center">
	            	<div className="col-7 img-portfolio">
		                <a target="_blank" href="https://northwesternpha.com/">
		                    <img className="img-responsive img-hover sponsor" src={pha} alt="" />
		                </a>
		            </div>
		        </div>
		        <div className="row justify-content-center">
	            	<div className="col-7 img-portfolio">
		                <a target="_blank" href="https://loopnearby.com/">
		                    <img className="img-responsive img-hover sponsor" src={loop} alt="" />
		                </a>
		            </div>
		        </div>
		        <div className="row justify-content-center">
	            	<div className="col-7 img-portfolio no-logo-div">
		                <a target="_blank" className="no-logo" href="https://www.internationalstudies.northwestern.edu/">
		  		            International Studies Program
		                </a>
		            </div>
		        </div>
		        

    			<Footer />
    		</div>
	    );
	}
}

export default Sponsors;