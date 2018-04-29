import React, { Component } from 'react';
import GroupScores from './GroupScores';
import Brackets from './Brackets';
import Groups from './Groups';
import logo from '../assets/img/nuwclogo.jpg';

class Info extends Component {
    render() {

		return (
			<div className ="container">
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
				  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Groups/></div>
				  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><Brackets/></div>
				</div>
			</div>
	    );
	}
}

export default Info;






