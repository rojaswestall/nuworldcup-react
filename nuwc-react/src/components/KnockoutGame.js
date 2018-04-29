import React, { Component } from 'react';
import axios from 'axios';

class KnockoutGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
        team1: this.props.team1,
        team2: this.props.team2,
        score1: this.props.score1,
        score2: this.props.score2,
        field: this.props.field,
        time: this.props.time,
        firstPlace: "",
        secondPlace: ""
        
      };
    }




    // componentDidMount() {
    //     // Need to change this get to take arguments
    //     // var currentMessages = this.scores;
    //     axios.get('http://rojaswestall.com/api/games', {
    //       team1: this.state.team1,
    //       team2: this.state.team2
    //     }).then((res) => {
    //       var dbdata = res.data[0];
    //       if (dbdata.team1 === this.state.team1) {
    //         this.setState({score1: dbdata.score1});
    //         this.setState({score2: dbdata.score2});
    //       }
    //       else {
    //         this.setState({score1: dbdata.score2});
    //         this.setState({score2: dbdata.score1});
    //       }
    //       console.log(dbdata.team1);
    //       console.log(this.state.team1);
    //     });

    //   }

    render() {
      return (
        <li className="tournament-bracket__item">
          <div className="tournament-bracket__match" tabIndex="0">
            <table className="tournament-bracket__table">
              <caption className="tournament-bracket__caption">
                <time dateTime="">Field {this.state.field}, {this.state.time}</time>
              </caption>
              <thead className="sr-only">
                <tr>
                  <th>Country</th>
                  <th>Score</th>
                </tr>
              </thead>  
              <tbody className="tournament-bracket__content">
                <tr className="tournament-bracket__team tournament-bracket__team--winner">
                  <td className="tournament-bracket__country">
                    <abbr className="tournament-bracket__code" title="Canada">CAN</abbr>
                    <span className="tournament-bracket__flag flag-icon flag-icon-ca" aria-label="Flag"></span>
                  </td>
                  <td className="tournament-bracket__score">
                    <span className="tournament-bracket__number">4</span>
                  </td>
                </tr>
                <tr className="tournament-bracket__team">
                  <td className="tournament-bracket__country">
                    <abbr className="tournament-bracket__code" title="Kazakhstan">KAZ</abbr>
                    <span className="tournament-bracket__flag flag-icon flag-icon-kz" aria-label="Flag"></span>
                  </td>
                  <td className="tournament-bracket__score">
                    <span className="tournament-bracket__number">1</span>
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



        