import React, { Component } from 'react';
import GroupScores from './GroupScores';

class Groups extends Component {
    render() {
		return (
			<div className="container">
				<div>
					<strong> Game 1 </strong>
					<GroupScores team1="Mexico" team2="Mozambique" tournament="co-rec" />
				</div>
				<div>
					<strong> Game 2 </strong>
					<GroupScores team1="Brazil" team2="Mongolia" tournament="co-rec" />
				</div>
				<div>
					<strong> Game 3 </strong>
					<GroupScores team1="Mexico" team2="Brazil" tournament="co-rec" />
		    	</div>
		    </div>


		    
	    );
	}
}

export default Groups;