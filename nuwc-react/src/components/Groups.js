import React, { Component } from 'react';
import GroupScores from './GroupScores';

class Groups extends Component {
    render() {
		return (
			<div className="container">
				<GroupScores team1="Mexico" team2="Mozambique" tournament="co-rec" />
		    </div>
	    );
	}
}

export default Groups;