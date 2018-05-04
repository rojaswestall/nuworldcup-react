import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class GroupScores extends Component {
	constructor(props) {
		super(props);

		this.state = {
    		team1: this.props.team1,
    		team2: this.props.team2,
        tournament: this.props.tournament,
        field: this.props.field,
        time: this.props.time,
        flag1: "flag-icon-" + this.props.flag1,
        flag2: "flag-icon-" + this.props.flag2,
    		score1: 0,
    		score2: 0
  		};
    }

    	componentDidMount() {
        // real endpoint: http://rojaswestall.com/api/games
        // for testing: http://localhost:4000/api/games
        // https://nuwc-server.herokuapp.com/api/games

        // Need to replace spaces with - because teams with spaces use dashes in the database to accomodate for slack
    		axios.get('https://nuwc-server.herokuapp.com/api/games', {
    			params: {
            team1: this.state.team1.replace(/\s+/g, '-'),
    			  team2: this.state.team2.replace(/\s+/g, '-'),
            tournament: this.state.tournament
          }
  			}).then((res) => {
  				var dbdata = res.data;
  				if (dbdata.team1 === this.state.team1.replace(/\s+/g, '-')) {
  					this.setState({score1: dbdata.score1});
  					this.setState({score2: dbdata.score2});
  				}
  				else {
  					this.setState({score1: dbdata.score2});
  					this.setState({score2: dbdata.score1});
  				}
  			});
    	}

    render() {
    	return (
			  <div className="">
          <div className="row fixture-row align-items-center">
            <div className="col-3">
              <div className="game-identifier">
                <div className="row">
                  Field {this.state.field}
                </div>
                <div className="row">
                  {this.state.time}
                </div>
              </div>
            </div>
            <div className="col-3 fixture-team">
              <span className={classnames("flag-icon", this.state.flag1, "flag-left")}></span>
              {this.state.team1}
            </div>
            <div className="col-2 fixture-score">
               {this.state.score1} : {this.state.score2}
            </div>
            <div className="col-3 fixture-team">
              {this.state.team2}
              <span className={classnames("flag-icon", this.state.flag2, "flag-right")}></span>
            </div>
          </div>    		
        </div>
      )
    }
}

export default GroupScores;