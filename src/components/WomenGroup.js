import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class WomenGroup extends Component {

	constructor(props) {
		super(props);

		this.state = {
			group: this.props.group,
			teams: {"team1": this.props.team1, "team2": this.props.team2, "team3": this.props.team3, "team4": this.props.team4},
			points: {"team1": 0, "team2": 0, "team3": 0, "team4": 0},
			flags: {"team1": "flag-icon-", "team2": "flag-icon-", "team3": "flag-icon-", "team4": "flag-icon-"},
	        tournament: "women"
  		};
    }

    componentDidMount() {
    // real endpoint: http://rojaswestall.com/api/points
    // for testing: http://localhost:4000/api/points
    // https://nuwc-server.herokuapp.com/api/points

    // Need to replace spaces with - because teams with spaces use dashes in the database to accomodate for slack
    	var teamArr = ["team1", "team2", "team3", "team4"];
	    	
    	teamArr.forEach((team) => {
    		var pointsCopy = this.state.points;
    		var flagsCopy = this.state.flags;

    		axios.get('https://nuwc-server.herokuapp.com/api/points', {
				params: {
	        		name: this.state.teams[team].replace(/\s+/g, '-'),
	        		tournament: this.state.tournament
	      		}
			}).then((res) => {
				var dbdata = res.data;
				if (dbdata.name === this.state.teams[team].replace(/\s+/g, '-')) {
					pointsCopy[team] = dbdata.points;
					flagsCopy[team] = flagsCopy[team] + dbdata.flag;
					this.setState({points: pointsCopy});
					this.setState({flags: flagsCopy});
				}
			});
		});
	}




    render() {
		return (
			<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 table-responsive group-table">
				<table className="table table-striped">
					<thead>
						<tr> 
							<th scope="col"> Group {this.state.group} </th>
							<th scope="col"> Pts </th>
						</tr>
					</thead>
					<tbody id="tbody-group-a">
						<tr>
							<td className="table-body">
								<span className={classnames("flag-icon", this.state.flags["team1"], "group-flag")}></span>
								{this.state.teams["team1"]}
							</td>
							<td className="points">
								{this.state.points["team1"]}
							</td>
						</tr>
						<tr>
							<td className="table-body">
								<span className={classnames("flag-icon", this.state.flags["team2"], "group-flag")}></span>
								{this.state.teams["team2"]}
							</td>
							<td className="points">
								{this.state.points["team2"]}
							</td>
						</tr>
						<tr>
							<td className="table-body">
								<span className={classnames("flag-icon", this.state.flags["team3"], "group-flag")}></span>
								{this.state.teams["team3"]}
							</td>
							<td className="points">
								{this.state.points["team3"]}
							</td>
						</tr>
						<tr>
							<td className="table-body">
								<span className={classnames("flag-icon", this.state.flags["team4"], "group-flag")}></span>
								{this.state.teams["team4"]}
							</td>
							<td className="points">
								{this.state.points["team4"]}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
	    );
	}
}

export default WomenGroup;





