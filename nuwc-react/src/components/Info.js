import React, { Component } from 'react';
import KnockoutStage from './KnockoutStage';
import GroupStage from './GroupStage';
import Footer from './Footer';
import logo from '../assets/img/nuwclogo.jpg';

class Info extends Component {
    render() {

		return (
			<div>
				<div className ="container tournament-info">
					<div className="d-flex justify-content-center info-logo-div">
						<img className="info-logo" src={logo} alt={"Northwestern World Cup 2018"}/>
					</div>

					<ul className="nav flex-column flex-sm-row nav-tabs nav-fill justify-content-center" id="nav-tab" role="tablist">
					  <li className="nav-item">
					    <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Group Stage</a>
					  </li>
					  <li className="nav-item">
					    <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Knockout Stage</a>
					  </li>
					</ul>

					<div className="tab-content" id="nav-tabContent">
					  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><GroupStage/></div>
					  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><KnockoutStage/></div>
					</div>
				</div>
				<Footer />
			</div>
	    );
	}
}

export default Info;






