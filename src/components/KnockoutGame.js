import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

class KnockoutGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
        field: this.props.field,
        time: this.props.time,
        game: parseInt(this.props.game),
        tournament: this.props.tournament,
        team1trophy: "",
        team2trophy: "",
        trophy: "",
        team1Status: "",
        team2Status: "",
        team1: "Tm 1",
        team2: "Tm 2",
        score1: 0,
        score2: 0,
        flag1: "flag-icon-",
        flag2: "flag-icon-"
      };
    }



// tournament-bracket__team--winner goes with tournament-bracket__team in tr
// If team1 score > team2 score then team1Status becomes tournament-bracket__team--winner 
// include team1Status and team2Status as classes
    async componentDidMount() {
        // real endpoint: http://rojaswestall.com/api/games
        // for testing: http://localhost:4000/api/games
        // https://nuwc-server.herokuapp.com/api/games
        var gameRequest = await axios.get('https://nuwc-server.herokuapp.com/api/games', {
          params: {
            game: parseInt(this.state.game),
            tournament: this.state.tournament
          }
        });
        var dbdata = gameRequest.data;

        if (dbdata.game === this.state.game) {
          if (dbdata.team1 === "Tm 1" && dbdata.team2 === "Tm 2") {
            this.setState({team1: dbdata.team1});
            this.setState({team2: dbdata.team2});
          }

          else if (dbdata.team1 === "Tm 1") {
            // Just team one hasn't gone
            const team2Request = await axios.get('https://nuwc-server.herokuapp.com/api/points', {
              params: {
                name: dbdata.team2.replace(/\s+/g, '-'),
                tournament: this.state.tournament
              }
            });
            var team2data = team2Request.data;
            if (team2data.name === dbdata.team2.replace(/\s+/g, '-')) {
              this.setState({flag2: 'flag-icon-' + team2data.flag});
              this.setState({team2: team2data.abb});
            }
          }

          else if (dbdata.team2 === "Tm 2") {
            // Just team two hasn't gone
            const team1Request = await axios.get('https://nuwc-server.herokuapp.com/api/points', {
              params: {
                name: dbdata.team1.replace(/\s+/g, '-'),
                tournament: this.state.tournament
              }
            });
            var team1data = team1Request.data;
            if (team1data.name === dbdata.team1.replace(/\s+/g, '-')) {
              this.setState({flag1: 'flag-icon-' + team1data.flag});
              this.setState({team1: team1data.abb});
            }
          }


          // If the team1 and team2 is not Tm 1 or Tm 2, try a request to get the info for that team
          else {
            this.setState({score1: dbdata.score1});
            this.setState({score2: dbdata.score2});

            // Checking scores to declare winner
            if (dbdata.score1 > dbdata.score2) {
              this.setState({team1Status: "tournament-bracket__team--winner"});
              if ((this.state.game === 3 && this.state.tournament === "women") || (this.state.game === 19 && this.state.tournament === "co-rec")) {
                this.setState({team1trophy: "tournament-bracket__medal--gold"});
                this.setState({team2trophy: "tournament-bracket__medal--silver"});
                this.setState({trophy: "fa-trophy"});
              }
            }
            else if (dbdata.score1 < dbdata.score2) {
              this.setState({team2Status: "tournament-bracket__team--winner"});
              if ((this.state.game === 3 && this.state.tournament === "women") || (this.state.game === 19 && this.state.tournament === "co-rec")) {
                this.setState({team2trophy: "tournament-bracket__medal--gold"});
                this.setState({team1trophy: "tournament-bracket__medal--silver"});
                this.setState({trophy: "fa-trophy"});
              }
            }


            //real endpoint: http://rojaswestall.com/api/points
            // for testing: http://localhost:4000/api/points
            // https://nuwc-server.herokuapp.com/api/points
            const team1Request = await axios.get('https://nuwc-server.herokuapp.com/api/points', {
              params: {
                name: dbdata.team1.replace(/\s+/g, '-'),
                tournament: this.state.tournament
              }
            });
            var team1data = team1Request.data;
            if (team1data.name === dbdata.team1.replace(/\s+/g, '-')) {
              this.setState({flag1: 'flag-icon-' + team1data.flag});
              this.setState({team1: team1data.abb});
            }

            //real endpoint: http://rojaswestall.com/api/points
            // for testing: http://localhost:4000/api/points
            const team2Request = await axios.get('https://nuwc-server.herokuapp.com/api/points', {
              params: {
                name: dbdata.team2.replace(/\s+/g, '-'),
                tournament: this.state.tournament
              }
            });
            var team2data = team2Request.data;
            if (team2data.name === dbdata.team2.replace(/\s+/g, '-')) {
              this.setState({flag2: 'flag-icon-' + team2data.flag});
              this.setState({team2: team2data.abb});
            }


          }
        }

      }

    render() {
      return (
        <li className="tournament-bracket__item">
          <div className="tournament-bracket__match" tabIndex="0">
            <table className="tournament-bracket__table">
              <caption className="tournament-bracket__caption">
                <time dateTime="">Field {this.state.field}, {this.state.time}</time>
                <br/>
                <time dateTime="">Game {this.state.game}</time>
              </caption>
              <thead className="sr-only">
                <tr>
                  <th>Country</th>
                  <th>Score</th>
                </tr>
              </thead>  
              <tbody className="tournament-bracket__content">
                <tr className={classnames("tournament-bracket__team", this.state.team1Status)}>
                  <td className="tournament-bracket__country">
                    <span className="tournament-bracket__code" title="CountryName">{this.state.team1}</span>
                    <span className={classnames("tournament-bracket__flag", "flag-icon", this.state.flag1)} aria-label="Flag"></span>
                  </td>
                  <td className="tournament-bracket__score">
                    
                    <span className="tournament-bracket__number">{this.state.score1}</span>
                    <span className={classnames("tournament-bracket__medal", this.state.team1trophy, "fa", this.state.trophy)} aria-label="trophy"></span>
                  </td>
                </tr>
                <tr className={classnames("tournament-bracket__team", this.state.team2Status)}>
                  <td className="tournament-bracket__country">
                    <span className="tournament-bracket__code" title="CountryName">{this.state.team2}</span>
                    <span className={classnames("tournament-bracket__flag", "flag-icon", this.state.flag2)} aria-label="Flag"></span>
                  </td>
                  <td className="tournament-bracket__score">
                    <span className="tournament-bracket__number">{this.state.score2}</span>
                    <span className={classnames("tournament-bracket__medal", this.state.team2trophy, "fa", this.state.trophy)} aria-label="trophy"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
      )
    }
}

export default KnockoutGame;

