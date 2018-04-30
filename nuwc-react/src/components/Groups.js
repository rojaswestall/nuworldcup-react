import React, { Component } from 'react';
import GroupScores from './GroupScores';

class Groups extends Component {
    render() {
		return (


			<div>
				<div className="row fixture-row">
					<div className="col-2">
						<div className="game-identifier">
							<div className="row">
								Field #
							</div>
						</div>
						<div className="row">
							Date and Time
						</div>
					</div>
					<div className="col-3 fixture-team">
						<span className="flag-icon flag-icon-FLAG-ACRONYM flag-left"></span>
						MEXICO
					</div>
					<div className="col- fixture-score">
						 5 : 2
					</div>
					<div className="col-4 fixture-team">
						BRAZIL
						<span className="flag-icon flag-icon-FLAG-ACRONYM flag-right"></span>
					</div>
				</div>
			
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
		    </div>

	    );
	}
}

export default Groups;