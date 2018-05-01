import React, { Component } from 'react';
import KnockoutGame from './KnockoutGame';

class Brackets extends Component {
    render() {
		return (

			<div>

				<div className="bracket-title">Women's World Cup 2018</div>

				<div className="bracket-container">
				  <div className="tournament-bracket tournament-bracket--rounded">
				  	<div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Semi-Finals</h3>
				      <ul className="tournament-bracket__list">
				      	<KnockoutGame team1="" score1="2" team2="" score2="1" field="1" time="8:00am" />
				        <KnockoutGame team1="" score1="5" team2="" score2="2" field="2" time="9:30am" />
				      </ul>
				    </div>
				    <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Championship</h3>
				      <ul className="tournament-bracket__list">
				      	<KnockoutGame team1="" score1="" team2="" score2="" field="2" time="3:30pm" />
				      </ul>
				    </div>
				  </div>
				</div>

				<div className="bracket-title-top-space">Co-Rec World Cup 2018</div>

				<div className="bracket-container">
				  <div className="tournament-bracket tournament-bracket--rounded">
				    <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Round of 32</h3>
				      <ul className="tournament-bracket__list">
				        <KnockoutGame team1="" team2="" field="1" time=""/>
				        <KnockoutGame team1="" team2="" field="2" time=""/>
				        <KnockoutGame team1="" team2="" field="3" time=""/>
				        <KnockoutGame team1="" team2="" field="4" time=""/>
				        <KnockoutGame team1="" team2="" field="5" time=""/>
				        <KnockoutGame team1="" team2="" field="6" time=""/>
				        <KnockoutGame team1="" team2="" field="1" time=""/>
				        <KnockoutGame team1="" team2="" field="2" time=""/>
				        <KnockoutGame team1="" team2="" field="3" time=""/>
				        <KnockoutGame team1="" team2="" field="4" time=""/>
				        <KnockoutGame team1="" team2="" field="5" time=""/>
				        <KnockoutGame team1="" team2="" field="6" time=""/>
				        <KnockoutGame team1="" team2="" field="7" time=""/>
				        <KnockoutGame team1="" team2="" field="8" time=""/>
				        <KnockoutGame team1="" team2="" field="9" time=""/>
				        <KnockoutGame team1="" team2="" field="10" time=""/>
				      </ul>
				    </div>

				    <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Round of 16</h3>
				      <ul className="tournament-bracket__list">
				        <KnockoutGame />
				        <KnockoutGame />
				        <KnockoutGame />
				        <KnockoutGame />
				        <KnockoutGame />
				        <KnockoutGame />
				        <KnockoutGame />
				        <KnockoutGame />
				      </ul>
				    </div>

				    <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Quarterfinals</h3>
				      <ul className="tournament-bracket__list">
				        <KnockoutGame />
				        <KnockoutGame />
				        <KnockoutGame />
				        <KnockoutGame />
				      </ul>
				    </div>

				    <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
				      <h3 className="tournament-bracket__round-title">Semi-Finals</h3>
				      <ul className="tournament-bracket__list">
				        <KnockoutGame />
				        <KnockoutGame />
				      </ul>
				    </div>

				    <div className="tournament-bracket__round tournament-bracket__round--gold">
				      <h3 className="tournament-bracket__round-title">Championship</h3>
				      <ul className="tournament-bracket__list">
				        <KnockoutGame />
				      </ul>
				    </div>
				  </div>
				</div>
			</div>

	    );
	}
}

export default Brackets;