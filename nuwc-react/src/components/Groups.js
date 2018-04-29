import React, { Component } from 'react';
import GroupScores from './GroupScores';

class Groups extends Component {
    render() {
		return (
			<div className="container">
				<GroupScores team1="Mexico" team2="Mozambique" />
		    </div>
	    );
	}
}

export default Groups;