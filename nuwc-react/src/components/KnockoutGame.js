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
        firstPlace: "",
        secondPlace: "",
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
    // componentDidMount() {
    //     // real endpoint: http://rojaswestall.com/api/games
    //     // for testing: http://localhost:4000/api/games
    //     axios.get('http://localhost:4000/api/games', {
    //       game: this.state.game,
    //       tournament: this.state.tournament
    //     }).then((res) => {
    //       var dbdata = res.data[0];
    //       if (dbdata.game === this.state.game) {
    //         this.setState({team1: dbdata.team1});
    //         this.setState({team2: dbdata.team2});
    //       }
    //     });

    //   }

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
                <tr className="tournament-bracket__team">
                  <td className="tournament-bracket__country">
                    <span className="tournament-bracket__code" title="CountryName">{this.state.team1}</span>
                    <span className={classnames("tournament-bracket__flag", "flag-icon", this.state.flag1)} aria-label="Flag"></span>
                  </td>
                  <td className="tournament-bracket__score">
                    <span className="tournament-bracket__number">{this.state.score1}</span>
                  </td>
                </tr>
                <tr className="tournament-bracket__team">
                  <td className="tournament-bracket__country">
                    <span className="tournament-bracket__code" title="CountryName">{this.state.team2}</span>
                    <span className={classnames("tournament-bracket__flag", "flag-icon", this.state.flag2)} aria-label="Flag"></span>
                  </td>
                  <td className="tournament-bracket__score">
                    <span className="tournament-bracket__number">{this.state.score2}</span>
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


// <span className="tournament-bracket__medal tournament-bracket__medal--gold fa fa-trophy" aria-label="Gold medal"></span>
// <span className="tournament-bracket__medal tournament-bracket__medal--silver fa fa-trophy" aria-label="Silver medal"></span>



        